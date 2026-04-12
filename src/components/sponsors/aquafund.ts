/**
 * AquaFund – Robotic fish flocking fundraiser tank
 *
 * Usage:
 *   import { AquaFund } from './aquafund';
 *
 *   const tank = new AquaFund({
 *     container:  document.getElementById('tank-container')!,
 *     goal:       10000,
 *     raised:     4500,
 *     numFish:    18,
 *   });
 *
 *   // Later, update the raised amount live:
 *   tank.setRaised(7200);
 *   tank.setGoal(12000);
 *   tank.setNumFish(24);
 *
 *   // Clean up when done:
 *   tank.destroy();
 *
 * The widget injects its own canvas + overlay elements into `container`.
 * Style the container however you like (width / border-radius etc.).
 * Import aquafund.css alongside this module for the glass-tank aesthetics.
 */

// ─────────────────────────────────────────────────────────────────
//  Types
// ─────────────────────────────────────────────────────────────────

export interface AquaFundOptions {
  /** Element to mount the canvas into. Must have a defined width. */
  container: HTMLElement;
  /** Fundraising goal in dollars (or any currency unit). */
  goal: number;
  /** Amount raised so far. */
  raised: number;
  /** Number of robotic fish to simulate. Default 18. */
  numFish?: number;
  /** Canvas logical width in px. Default 900. */
  width?: number;
  /** Canvas logical height in px. Default 520. */
  height?: number;
}

interface FishColor {
  body:    string;
  hilight: string;
  shadow:  string;
  frame:   string;
  fin:     string;
  belly:   string;
  eye:     string;
  led:     string;
  vent:    string;
}

interface FishAgent {
  x:         number;
  y:         number;
  vx:        number;
  vy:        number;
  size:      number;
  col:       FishColor;
  tailPhase: number;
  glowPhase: number;
}

interface Bubble {
  x:   number;
  y:   number;
  r:   number;
  vy:  number;
  top: number;
}

interface Plant {
  x:        number;
  segments: number;
  segH:     number;
  hue:      number;
  phase:    number;
  speed:    number;
}

interface Rock {
  x:   number;
  y:   number;
  rx:  number;
  ry:  number;
  hue: number;
}

// ─────────────────────────────────────────────────────────────────
//  Constants
// ─────────────────────────────────────────────────────────────────

const FISH_COLORS: FishColor[] = [
  { body:'#2a4a6b', hilight:'#5a9ecf', shadow:'#0d1f30', frame:'#1a3550', fin:'#3a7aaa', belly:'#a0d4f0', eye:'#00e5ff', led:'#00ff88', vent:'#4af' },
  { body:'#3a2a5a', hilight:'#7a5aaf', shadow:'#150d28', frame:'#2a1a48', fin:'#6040a0', belly:'#c090f8', eye:'#df80ff', led:'#ff44aa', vent:'#a08ef' },
  { body:'#1a4a2a', hilight:'#3a9a5a', shadow:'#0a1f10', frame:'#0d3018', fin:'#2a7a3a', belly:'#90e8a0', eye:'#44ffaa', led:'#aaffcc', vent:'#4fa' },
  { body:'#5a3a1a', hilight:'#c87a30', shadow:'#281505', frame:'#3a2008', fin:'#a05020', belly:'#f8c080', eye:'#ffaa22', led:'#ffcc44', vent:'#fa4' },
  { body:'#4a1a1a', hilight:'#c04040', shadow:'#200808', frame:'#380808', fin:'#902020', belly:'#f09090', eye:'#ff4444', led:'#ff6644', vent:'#f44' },
  { body:'#1a3a4a', hilight:'#309898', shadow:'#081820', frame:'#0a2030', fin:'#207070', belly:'#88e0e0', eye:'#00ffee', led:'#44eeff', vent:'#0ef' },
  { body:'#3a3a1a', hilight:'#9a9a30', shadow:'#181808', frame:'#282810', fin:'#707020', belly:'#e0e080', eye:'#dddd00', led:'#ffff44', vent:'#dd0' },
  { body:'#2a1a3a', hilight:'#6a3a8a', shadow:'#100818', frame:'#1e0c2e', fin:'#503070', belly:'#b080d8', eye:'#cc88ff', led:'#ff88ff', vent:'#c8f' },
];

const PERCEPTION  = 80;
const MAX_SPEED   = 2.2;
const MAX_FORCE   = 0.06;
const WALL_MARGIN = 55;
const WALL_FORCE  = 0.22;

// ─────────────────────────────────────────────────────────────────
//  Seeded RNG (reproducible environment layout)
// ─────────────────────────────────────────────────────────────────

function makeRng(seed: number): () => number {
  let v = seed;
  return (): number => {
    v = (Math.imul(v, 1664525) + 1013904223) | 0;
    return (v >>> 0) / 0xffffffff;
  };
}

// ─────────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────────

function limit(vx: number, vy: number, max: number): [number, number] {
  const m = Math.sqrt(vx * vx + vy * vy);
  return m > max ? [vx / m * max, vy / m * max] : [vx, vy];
}

function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y,     x + w, y + r,     r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x,     y + h, x,     y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x,     y,     x + r, y,         r);
  ctx.closePath();
}

// ─────────────────────────────────────────────────────────────────
//  AquaFund class
// ─────────────────────────────────────────────────────────────────

export class AquaFund {
  // Public state
  private goal:   number;
  private raised: number;
  private numFish: number;

  // Canvas
  private readonly W: number;
  private readonly H: number;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx:    CanvasRenderingContext2D;
  private readonly container: HTMLElement;

  // Simulation
  private fish:    FishAgent[] = [];
  private bubbles: Bubble[]    = [];
  private plants:  Plant[]     = [];
  private rocks:   Rock[]      = [];
  private rng = makeRng(42);

  private waterLevel       = 0;
  private targetWaterLevel = 0;
  private time             = 0;
  private rafId            = 0;

  // ── Constructor ──────────────────────────────────────────────

  constructor(opts: AquaFundOptions) {
    this.goal    = opts.goal;
    this.raised  = opts.raised;
    this.numFish = opts.numFish ?? 18;
    this.W       = opts.width  ?? 900;
    this.H       = opts.height ?? 520;
    this.container = opts.container;

    // Canvas
    this.canvas        = document.createElement('canvas');
    this.canvas.width  = this.W;
    this.canvas.height = this.H;
    this.canvas.className = 'aquafund-canvas';

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('AquaFund: could not get 2d context');
    this.ctx = ctx;

    // Overlay elements (shimmer + glass reflection)
    const shimmer = document.createElement('div');
    shimmer.className = 'aquafund-shimmer';
    const reflect = document.createElement('div');
    reflect.className = 'aquafund-reflect';

    // Wrap in a border div
    const border = document.createElement('div');
    border.className = 'aquafund-border';
    border.appendChild(this.canvas);
    border.appendChild(shimmer);
    border.appendChild(reflect);
    this.container.appendChild(border);
    this.container.classList.add('aquafund-container');

    // Init
    this.initEnvironment();
    this.waterLevel = this.calcSwimTop();
    this.spawnFish();
    this.rafId = requestAnimationFrame(this.frame);
  }

  // ── Public API ───────────────────────────────────────────────

  /** Update the fundraising goal. Fish zone resizes smoothly. */
  setGoal(goal: number): void {
    this.goal = goal;
  }

  /** Update the amount raised. Water level animates to new position. */
  setRaised(raised: number): void {
    this.raised = raised;
  }

  /** Change the number of fish (respawns the school). */
  setNumFish(n: number): void {
    this.numFish = n;
    this.spawnFish();
  }

  /** Stop the animation loop and remove DOM elements. */
  destroy(): void {
    cancelAnimationFrame(this.rafId);
    const border = this.canvas.parentElement;
    if (border) border.remove();
    this.container.classList.remove('aquafund-container');
  }

  // ── Environment ──────────────────────────────────────────────

  private initEnvironment(): void {
    const rng = this.rng = makeRng(42); // deterministic layout

    this.rocks = Array.from({ length: 9 }, () => ({
      x:   40 + rng() * (this.W - 80),
      y:   this.H - 14 - rng() * 14,
      rx:  18 + rng() * 28,
      ry:   8 + rng() * 14,
      hue: 180 + rng() * 40,
    }));

    this.plants = Array.from({ length: 7 }, () => ({
      x:        50 + rng() * (this.W - 100),
      segments: 5 + Math.floor(rng() * 5),
      segH:     18 + rng() * 12,
      hue:      130 + rng() * 50,
      phase:    rng() * Math.PI * 2,
      speed:    0.4 + rng() * 0.6,
    }));
  }

  // ── Fish ─────────────────────────────────────────────────────

  private spawnFish(): void {
    const rng  = makeRng(Date.now() & 0xffff);
    const top  = this.calcSwimTop();
    const bot  = this.H - 44;

    this.fish = Array.from({ length: this.numFish }, (): FishAgent => {
      const col = FISH_COLORS[Math.floor(rng() * FISH_COLORS.length)];
      return {
        x:         50 + rng() * (this.W - 100),
        y:         top + 10 + rng() * Math.max(1, bot - top - 10),
        vx:        (rng() - 0.5) * 2,
        vy:        (rng() - 0.5) * 0.8,
        size:      10 + rng() * 7,
        col,
        tailPhase: rng() * Math.PI * 2,
        glowPhase: rng() * Math.PI * 2,
      };
    });
  }

  // ── Boids ────────────────────────────────────────────────────

  private updateFish(swimTop: number, swimBot: number): void {
    const hardLeft  = 18;
    const hardRight = this.W - 18;
    const hardTop   = swimTop + 10;
    const hardBot   = swimBot - 10;

    for (const f of this.fish) {
      let sx = 0, sy = 0;  // separation
      let ax = 0, ay = 0;  // alignment
      let cx = 0, cy = 0;  // cohesion
      let sc = 0, ac = 0, cc = 0;

      for (const o of this.fish) {
        if (o === f) continue;
        const dx = o.x - f.x, dy = o.y - f.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < PERCEPTION) {
          if (d < 28) { sx -= dx / d; sy -= dy / d; sc++; }
          ax += o.vx; ay += o.vy; ac++;
          cx += o.x;  cy += o.y;  cc++;
        }
      }

      let stX = 0, stY = 0;

      if (sc) {
        [sx, sy] = limit(sx / sc, sy / sc, MAX_SPEED);
        [sx, sy] = limit(sx - f.vx, sy - f.vy, MAX_FORCE);
        stX += sx * 1.6; stY += sy * 1.6;
      }
      if (ac) {
        [ax, ay] = limit(ax / ac, ay / ac, MAX_SPEED);
        [ax, ay] = limit(ax - f.vx, ay - f.vy, MAX_FORCE);
        stX += ax * 1.0; stY += ay * 1.0;
      }
      if (cc) {
        [cx, cy] = limit(cx / cc - f.x, cy / cc - f.y, MAX_SPEED);
        [cx, cy] = limit(cx - f.vx, cy - f.vy, MAX_FORCE);
        stX += cx * 0.25; stY += cy * 0.25;  // reduced cohesion
      }

      // Smooth inverse-square anti-wall repulsion
      const wp = (dist: number): number => {
        if (dist >= WALL_MARGIN) return 0;
        const t = 1 - dist / WALL_MARGIN;
        return WALL_FORCE * t * t;
      };
      stX += wp(f.x - hardLeft);
      stX -= wp(hardRight - f.x);
      stY += wp(f.y - hardTop);
      stY -= wp(hardBot  - f.y);

      f.vx += stX; f.vy += stY;
      [f.vx, f.vy] = limit(f.vx, f.vy, MAX_SPEED);

      f.x = Math.max(hardLeft,  Math.min(hardRight, f.x + f.vx));
      f.y = Math.max(hardTop,   Math.min(hardBot,   f.y + f.vy));

      f.tailPhase += 0.18;
    }
  }

  // ── Bubbles ──────────────────────────────────────────────────

  private spawnBubble(swimTop: number): void {
    const rng = makeRng(this.time * 7919);
    if (rng() > 0.04) return;
    this.bubbles.push({
      x:   30 + Math.random() * (this.W - 60),
      y:   this.H - 20,
      r:   2  + Math.random() * 4,
      vy:  0.4 + Math.random() * 0.8,
      top: swimTop,
    });
  }

  private updateBubbles(): void {
    const t = this.time;
    this.bubbles = this.bubbles.filter(b => {
      b.y -= b.vy;
      b.x += Math.sin(t * 0.05 + b.r) * 0.3;
      return b.y >= b.top;
    });
  }

  // ── Water level ──────────────────────────────────────────────

  private calcSwimTop(): number {
    // Tank holds 120% of goal. Full when raised == 1.2 * goal.
    const frac = Math.min(1, this.raised / (this.goal * 1.2));
    return this.H * (1 - frac);
  }

  /** Y-coordinate of the 100%-of-goal watermark (always in the tank). */
  private goalLineY(): number {
    return this.H * (1 - 1 / 1.2);
  }

  // ── Drawing ──────────────────────────────────────────────────

  private drawAirSection(swimTop: number): void {
    const { ctx, W, H } = this;
    if (swimTop <= 0) return;
    const grad = ctx.createLinearGradient(0, 0, 0, swimTop);
    grad.addColorStop(0, '#1a2a3a');
    grad.addColorStop(1, '#0e2540');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, swimTop);

    if (swimTop > 30) {
      ctx.fillStyle = 'rgba(200,238,255,0.2)';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('▲ room to grow ▲', W / 2, swimTop / 2);
    }
  }

  private drawBackground(swimTop: number): void {
    const { ctx, W, H } = this;
    const grad = ctx.createLinearGradient(0, swimTop, 0, H);
    grad.addColorStop(0,   '#0a2244');
    grad.addColorStop(0.5, '#0d3060');
    grad.addColorStop(1,   '#091828');
    ctx.fillStyle = grad;
    ctx.fillRect(0, swimTop, W, H - swimTop);
  }

  private drawLightRays(swimTop: number): void {
    const { ctx, W, H } = this;
    ctx.save();
    for (let i = 0; i < 5; i++) {
      const x = W * (0.1 + i * 0.2);
      const grad = ctx.createLinearGradient(x, swimTop, x + 30, H);
      grad.addColorStop(0, 'rgba(200,238,255,0.07)');
      grad.addColorStop(1, 'rgba(200,238,255,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(x - 10, swimTop);
      ctx.lineTo(x + 10, swimTop);
      ctx.lineTo(x + 50, H);
      ctx.lineTo(x + 20, H);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  private drawSand(): void {
    const { ctx, W, H } = this;
    const grad = ctx.createLinearGradient(0, H - 28, 0, H);
    grad.addColorStop(0, '#c8a84b');
    grad.addColorStop(1, '#9a7530');
    ctx.fillStyle = grad;
    ctx.fillRect(0, H - 24, W, 24);
    ctx.strokeStyle = 'rgba(180,140,60,0.4)';
    ctx.lineWidth = 1;
    for (let x = 10; x < W; x += 22) {
      ctx.beginPath();
      ctx.moveTo(x,      H - 18);
      ctx.bezierCurveTo(x + 5, H - 20, x + 11, H - 20, x + 16, H - 18);
      ctx.stroke();
    }
  }

  private drawRocks(): void {
    const { ctx } = this;
    for (const r of this.rocks) {
      const g = ctx.createRadialGradient(r.x - r.rx * 0.2, r.y - r.ry * 0.3, 1, r.x, r.y, r.rx);
      g.addColorStop(0, `hsl(${r.hue},18%,42%)`);
      g.addColorStop(1, `hsl(${r.hue},12%,22%)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(r.x, r.y, r.rx, r.ry, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawPlants(swimTop: number): void {
    const { ctx, H, time } = this;
    for (const p of this.plants) {
      let px = p.x, py = H - 24;
      const sway = Math.sin(time * p.speed * 0.03 + p.phase) * 5;
      for (let s = 0; s < p.segments; s++) {
        const segTop = py - p.segH;
        if (segTop < swimTop) break;
        const bend = sway * (s / p.segments);
        ctx.strokeStyle = `hsl(${p.hue},60%,${28 + s * 4}%)`;
        ctx.lineWidth = 5 - s * 0.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.quadraticCurveTo(px + bend, (py + segTop) / 2, px + bend * 1.5, segTop);
        ctx.stroke();
        ctx.fillStyle = `hsl(${p.hue},55%,${32 + s * 4}%)`;
        ctx.beginPath();
        ctx.ellipse(px + bend * 1.5 + 8, segTop + 5, 10, 5, Math.PI * 0.3, 0, Math.PI * 2);
        ctx.fill();
        px += bend * 1.5;
        py  = segTop;
      }
    }
  }

  private drawWaterSurface(swimTop: number): void {
    const { ctx, W, time } = this;
    if (swimTop <= 0) return;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, swimTop);
    for (let x = 0; x <= W; x += 4) {
      const y = swimTop
        + Math.sin(x * 0.03 + time * 0.04) * 3
        + Math.sin(x * 0.07 + time * 0.02) * 1.5;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W, 0);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = '#0e2540';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, swimTop);
    for (let x = 0; x <= W; x += 4) {
      const y = swimTop
        + Math.sin(x * 0.03 + time * 0.04) * 3
        + Math.sin(x * 0.07 + time * 0.02) * 1.5;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(200,238,255,0.5)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  private drawBubbles(): void {
    const { ctx } = this;
    for (const b of this.bubbles) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(200,238,255,0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = 'rgba(200,238,255,0.08)';
      ctx.fill();
    }
  }

  private drawGoalLine(swimTop: number): void {
    const { ctx, W, time } = this;
    const goalY = this.goalLineY();

    // The line is always drawn (even in the air section above the water).
    // Alpha is 1 when in air, slightly reduced once submerged.
    const submerged = goalY >= swimTop;
    const alpha = submerged ? 0.65 : 1.0;

    ctx.save();
    ctx.globalAlpha = alpha;

    // Animated dashed line
    ctx.setLineDash([12, 8]);
    ctx.lineDashOffset = -(time * 0.4);
    ctx.strokeStyle = 'rgba(245,200,66,0.85)';
    ctx.lineWidth = submerged ? 1.5 : 2;
    ctx.shadowColor = 'rgba(245,200,66,0.7)';
    ctx.shadowBlur  = submerged ? 6 : 10;
    ctx.beginPath();
    ctx.moveTo(0,  goalY);
    ctx.lineTo(W, goalY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;

    // Label pill (always legible)
    const label = '100% GOAL';
    ctx.font = 'bold 10px sans-serif';
    const tw = ctx.measureText(label).width;
    const lx = 12, ly = goalY - 1;
    const lw = tw + 14, lh = 16;

    roundRectPath(ctx, lx, ly - lh + 4, lw, lh, 3);
    ctx.fillStyle = submerged ? 'rgba(15,30,50,0.82)' : 'rgba(10,20,38,0.88)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(245,200,66,0.8)';
    ctx.lineWidth = 1;
    roundRectPath(ctx, lx, ly - lh + 4, lw, lh, 3);
    ctx.stroke();

    ctx.fillStyle = '#f5c842';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, lx + 7, ly - lh / 2 + 4);

    ctx.restore();
  }

  private drawFish(): void {
    const { ctx } = this;
    for (const f of this.fish) {
      const angle = Math.atan2(f.vy, f.vx);
      const s     = f.size;
      const col   = f.col;
      const glow  = f.glowPhase;
      const bw    = s * 1.5;
      const bh    = s * 0.7;

      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(angle);

      // ── Propeller tail ──
      const tailWag = Math.sin(f.tailPhase) * 0.55;
      ctx.save();
      ctx.translate(-s * 0.75, 0);
      for (let blade = -1; blade <= 1; blade++) {
        ctx.save();
        ctx.rotate(tailWag + blade * 0.45);
        ctx.strokeStyle = col.frame;
        ctx.lineWidth   = s * 0.08;
        ctx.lineCap     = 'round';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-s * 0.65, 0);
        ctx.stroke();
        ctx.fillStyle   = col.fin;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.ellipse(-s * 0.65, 0, s * 0.28, s * 0.13, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.restore();
      }
      ctx.fillStyle = col.frame;
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.13, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // ── Hull ──
      ctx.save();
      ctx.translate(-s * 0.15, 0);
      const hullGrad = ctx.createLinearGradient(-bw/2, -bh/2, bw/2, bh/2);
      hullGrad.addColorStop(0,   col.hilight);
      hullGrad.addColorStop(0.5, col.body);
      hullGrad.addColorStop(1,   col.shadow);
      roundRectPath(ctx, -bw/2, -bh/2, bw, bh, s * 0.12);
      ctx.fillStyle = hullGrad;
      ctx.fill();
      ctx.strokeStyle = col.frame;
      ctx.lineWidth   = s * 0.07;
      roundRectPath(ctx, -bw/2, -bh/2, bw, bh, s * 0.12);
      ctx.stroke();

      // Panel lines
      ctx.strokeStyle  = col.frame;
      ctx.lineWidth    = s * 0.04;
      ctx.globalAlpha  = 0.5;
      for (let px = -bw/2 + bw*0.28; px < bw/2 - 4; px += bw * 0.27) {
        ctx.beginPath();
        ctx.moveTo(px, -bh/2 + 2);
        ctx.lineTo(px,  bh/2 - 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Belly stripe
      ctx.fillStyle   = col.belly;
      ctx.globalAlpha = 0.35;
      roundRectPath(ctx, -bw/2 + 4, bh * 0.1, bw - 8, bh * 0.35, s * 0.06);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();

      // ── Dorsal fin ──
      ctx.fillStyle   = col.fin;
      ctx.strokeStyle = col.frame;
      ctx.lineWidth   = s * 0.05;
      ctx.beginPath();
      ctx.moveTo( s * 0.3,  -bh/2);
      ctx.lineTo( s * 0.5,  -bh/2 - s * 0.5);
      ctx.lineTo(-s * 0.1,  -bh/2 - s * 0.42);
      ctx.lineTo(-s * 0.2,  -bh/2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.globalAlpha = 0.4;
      ctx.lineWidth   = s * 0.03;
      for (let ri = 0; ri < 3; ri++) {
        const rx = s * (0.3 - ri * 0.17);
        ctx.beginPath();
        ctx.moveTo(rx, -bh/2);
        ctx.lineTo(rx - s * 0.05, -bh/2 - s * (0.15 + ri * 0.12));
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // ── Nose cone ──
      ctx.save();
      ctx.translate(s * 0.6, 0);
      const noseGrad = ctx.createRadialGradient(-s*0.1, -s*0.1, 1, 0, 0, s*0.5);
      noseGrad.addColorStop(0, col.hilight);
      noseGrad.addColorStop(1, col.body);
      ctx.fillStyle   = noseGrad;
      ctx.beginPath();
      ctx.moveTo(s * 0.55, 0);
      ctx.lineTo(0, -bh/2);
      ctx.lineTo(0,  bh/2);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = col.frame;
      ctx.lineWidth   = s * 0.06;
      ctx.stroke();
      ctx.restore();

      // ── Camera eye ──
      const ex = s * 0.55, ey = -s * 0.08;
      ctx.fillStyle = col.frame;
      ctx.beginPath();
      ctx.arc(ex, ey, s * 0.22, 0, Math.PI * 2);
      ctx.fill();
      const lensGrad = ctx.createRadialGradient(ex-s*0.06, ey-s*0.06, 1, ex, ey, s*0.16);
      lensGrad.addColorStop(0,   '#a0f0ff');
      lensGrad.addColorStop(0.5, col.eye);
      lensGrad.addColorStop(1,   '#001020');
      ctx.fillStyle = lensGrad;
      ctx.beginPath();
      ctx.arc(ex, ey, s * 0.16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.beginPath();
      ctx.arc(ex - s*0.06, ey - s*0.06, s * 0.05, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle  = col.eye;
      ctx.lineWidth    = s * 0.04;
      ctx.globalAlpha  = 0.5 + 0.4 * Math.sin(glow);
      ctx.beginPath();
      ctx.arc(ex, ey, s * 0.22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;

      // ── Status LED ──
      const ledGlow = 0.6 + 0.4 * Math.sin(glow * 1.3 + 1);
      ctx.save();
      ctx.shadowColor  = col.led;
      ctx.shadowBlur   = s * 0.5 * ledGlow;
      ctx.fillStyle    = col.led;
      ctx.globalAlpha  = ledGlow;
      ctx.beginPath();
      ctx.arc(s * 0.08, -bh/2 + s * 0.12, s * 0.07, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();

      // ── Thruster vents ──
      ctx.fillStyle   = col.frame;
      ctx.strokeStyle = col.vent;
      ctx.lineWidth   = s * 0.04;
      for (const side of [-1, 1] as const) {
        const vy = side * bh / 2;
        for (let vi = -1; vi <= 1; vi++) {
          const vx = s * (-0.1 + vi * 0.28);
          ctx.beginPath();
          ctx.ellipse(vx, vy, s * 0.07, s * 0.035, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }

      ctx.restore();

      f.glowPhase += 0.04 + Math.sqrt(f.vx * f.vx + f.vy * f.vy) * 0.015;
    }
  }

  // ── Main loop ────────────────────────────────────────────────

  private readonly frame = (): void => {
    this.time++;
    this.targetWaterLevel = this.calcSwimTop();
    this.waterLevel += (this.targetWaterLevel - this.waterLevel) * 0.03;

    const swimTop = this.waterLevel;
    const swimBot = this.H - 24;
    const { ctx, W, H } = this;

    ctx.clearRect(0, 0, W, H);
    this.drawAirSection(swimTop);
    this.drawBackground(swimTop);
    this.drawLightRays(swimTop);
    this.drawSand();
    this.drawRocks();
    this.drawPlants(swimTop);
    this.drawBubbles();
    this.drawFish();
    // Goal line drawn AFTER fish but BEFORE water surface so it's
    // visible in both the air and water zones.
    this.drawGoalLine(swimTop);
    this.drawWaterSurface(swimTop);

    this.updateFish(swimTop, swimBot);
    this.spawnBubble(swimTop);
    this.updateBubbles();

    // Keep fish in water zone
    for (const f of this.fish) {
      if (f.y < swimTop + 10) f.y = swimTop + 10;
    }

    this.rafId = requestAnimationFrame(this.frame);
  };
}
