import { useEffect, useRef } from "react";

export default function SwimmingFish() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const FISH_HEIGHT = 160;
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = FISH_HEIGHT;
        };
        resize();
        window.addEventListener("resize", resize);

        const fish = Array.from({ length: 12 }, (_, i) => ({
            x: Math.random() * window.innerWidth,
            y: 40 + Math.random() * (FISH_HEIGHT - 80),
            speed: 0.35 + Math.random() * 0.4,
            size: 16 + Math.random() * 14,
            phase: Math.random() * Math.PI * 2,
            waveAmp: 10 + Math.random() * 8,
            waveFreq: 0.016 + Math.random() * 0.008,
            tailPhase: Math.random() * Math.PI * 2,
        }));

        function drawFish(x, y, size, t, tailPhase) {
            ctx.save();
            ctx.translate(x, y);

            const wagFreq = 3.2;
            const bodyWag = Math.sin(t * wagFreq + tailPhase) * size * 0.04;
            const rootWag = Math.sin(t * wagFreq + tailPhase - 1.0) * size * 0.28;
            const tipWag  = Math.sin(t * wagFreq + tailPhase - 1.6) * size * 0.52;

            // Body
            ctx.beginPath();
            ctx.moveTo(size, 0);
            ctx.bezierCurveTo( size * 0.6, -size * 0.38, -size * 0.2, -size * 0.38 + bodyWag, -size * 0.62, rootWag);
            ctx.bezierCurveTo(-size * 0.2,  size * 0.38 + bodyWag,  size * 0.6,  size * 0.38, size, 0);
            ctx.fillStyle = "#2E86D4";
            ctx.fill();

            // Belly highlight
            ctx.beginPath();
            ctx.moveTo(size * 0.7, size * 0.08);
            ctx.bezierCurveTo(size * 0.3, size * 0.28, -size * 0.1, size * 0.28 + bodyWag * 0.5, -size * 0.4, rootWag * 0.5 + size * 0.1);
            ctx.bezierCurveTo(-size * 0.1, size * 0.18 + bodyWag * 0.5, size * 0.3, size * 0.16, size * 0.7, size * 0.08);
            ctx.fillStyle = "#85B7EB";
            ctx.fill();

            // Tail lobes
            const tailRootX = -size * 0.62;
            const tailTipX  = -size * 1.38;
            [[-1], [1]].forEach(([sign]) => {
                ctx.beginPath();
                ctx.moveTo(tailRootX, rootWag);
                ctx.quadraticCurveTo(
                    tailRootX - size * 0.35,
                    rootWag * 0.4 + sign * (-size * 0.22 + tipWag * 0.3),
                    tailTipX,
                    tipWag + sign * (-size * 0.38)
                );
                ctx.quadraticCurveTo(tailRootX - size * 0.5, rootWag * 0.6 + tipWag * 0.5, tailRootX, rootWag);
                ctx.closePath();
                ctx.fillStyle = "#185FA5";
                ctx.fill();
            });

            // Dorsal fin
            ctx.beginPath();
            ctx.moveTo(-size * 0.05, -size * 0.36 + bodyWag * 0.3);
            ctx.bezierCurveTo(size * 0.1, -size * 0.78 + bodyWag * 0.2, size * 0.45, -size * 0.72, size * 0.55, -size * 0.36);
            ctx.bezierCurveTo(size * 0.3, -size * 0.42, size * 0.05, -size * 0.4, -size * 0.05, -size * 0.36 + bodyWag * 0.3);
            ctx.closePath();
            ctx.fillStyle = "rgba(24,95,165,0.75)";
            ctx.fill();

            // Pectoral fin
            ctx.beginPath();
            ctx.moveTo(size * 0.3, size * 0.1 + bodyWag * 0.2);
            ctx.bezierCurveTo(size * 0.1, size * 0.5 + bodyWag * 0.2, -size * 0.15, size * 0.45, -size * 0.1, size * 0.18 + bodyWag * 0.3);
            ctx.bezierCurveTo(size * 0.05, size * 0.22, size * 0.2, size * 0.18, size * 0.3, size * 0.1 + bodyWag * 0.2);
            ctx.closePath();
            ctx.fillStyle = "rgba(55,138,221,0.6)";
            ctx.fill();

            // Scale shimmer
            ctx.strokeStyle = "rgba(133,183,235,0.35)";
            ctx.lineWidth = 0.6;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.arc(
                    size * (0.5 - i * 0.32) + bodyWag * 0.1 * i,
                    bodyWag * 0.2 * i,
                    size * (0.22 - i * 0.02),
                    Math.PI * 0.55,
                    Math.PI * 1.45
                );
                ctx.stroke();
            }

            // Eye
            ctx.fillStyle = "#042C53";
            ctx.beginPath();
            ctx.arc(size * 0.68, -size * 0.09, size * 0.11, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#185FA5";
            ctx.beginPath();
            ctx.arc(size * 0.68, -size * 0.09, size * 0.07, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#000";
            ctx.beginPath();
            ctx.arc(size * 0.68, -size * 0.09, size * 0.04, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.arc(size * 0.70, -size * 0.11, size * 0.02, 0, Math.PI * 2);
            ctx.fill();

            // Mouth
            ctx.beginPath();
            ctx.arc(size * 0.96, size * 0.04, size * 0.06, Math.PI * 0.1, Math.PI * 0.9);
            ctx.strokeStyle = "#0C447C";
            ctx.lineWidth = 0.8;
            ctx.stroke();

            ctx.restore();
        }

        let t = 0;
        let animId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t += 0.016;
            fish.forEach(f => {
                f.x += f.speed;
                if (f.x > canvas.width + 80) f.x = -80;
                const y = f.y + Math.sin(f.x * f.waveFreq + f.phase) * f.waveAmp;
                drawFish(f.x, y, f.size, t, f.tailPhase);
            });
            animId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: "100%",
                height: 160,
                display: "block",
                pointerEvents: "none",
            }}
        />
    );
}
