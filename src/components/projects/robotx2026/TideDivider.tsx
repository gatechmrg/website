import { Box } from '@mui/material';
import { robotxColors } from './colors';
import { driftClasses, slideClasses, swellClasses, waveMotionSx } from './waveMotion';
import type { WaveSpan } from './waveMotion';

export type TideVariant = 'swell' | 'counterSwell';

interface TideDividerProps {
  from: string;
  to: string;
  variant?: TideVariant;
  phase?: number;
}

interface WaveShape {
  width: number;
  height: number;
  fills: [string, string, string];
  contours: [string, string, string];
}

const shapes: Record<TideVariant, { wide: WaveShape; narrow: WaveShape }> = {
  swell: {
    wide: {
      width: 1440,
      height: 180,
      fills: [
        'M0,70 C240,40 480,100 720,78 C960,56 1200,30 1440,60 L1440,180 L0,180 Z',
        'M0,100 C260,76 500,126 760,104 C1000,84 1220,70 1440,92 L1440,180 L0,180 Z',
        'M0,136 C220,118 460,154 720,140 C980,126 1220,116 1440,132 L1440,180 L0,180 Z',
      ],
      contours: [
        'M-120,91.8 L0,82 C220,64 460,100 720,86 C980,72 1220,62 1440,78 L1560,86.8',
        'M-120,109.8 L0,100 C220,82 460,118 720,104 C980,90 1220,80 1440,96 L1560,104.8',
        'M-120,127.8 L0,118 C220,100 460,136 720,122 C980,108 1220,98 1440,114 L1560,122.8',
      ],
    },
    narrow: {
      width: 390,
      height: 120,
      fills: [
        'M0,48 C80,30 170,66 260,52 C320,42 360,36 390,42 L390,120 L0,120 Z',
        'M0,70 C90,58 180,86 270,74 C330,66 365,62 390,66 L390,120 L0,120 Z',
        'M0,94 C90,86 190,104 280,96 C335,92 368,90 390,92 L390,120 L0,120 Z',
      ],
      contours: [
        'M-60,64.6 L0,58 C90,48 190,72 280,62 C335,56 368,54 390,56 L450,61.5',
        'M-60,76.6 L0,70 C90,60 190,84 280,74 C335,68 368,66 390,68 L450,73.5',
        'M-60,88.6 L0,82 C90,72 190,96 280,86 C335,80 368,78 390,80 L450,85.5',
      ],
    },
  },
  counterSwell: {
    wide: {
      width: 1440,
      height: 180,
      fills: [
        'M0,58 C220,34 470,86 740,66 C1000,46 1230,72 1440,50 L1440,180 L0,180 Z',
        'M0,94 C240,110 500,70 760,90 C1010,110 1230,82 1440,96 L1440,180 L0,180 Z',
        'M0,130 C240,144 480,112 740,128 C990,144 1230,118 1440,130 L1440,180 L0,180 Z',
      ],
      contours: [
        'M-120,69 L0,76 C240,90 480,58 740,74 C990,90 1230,64 1440,76 L1560,82.8',
        'M-120,87 L0,94 C240,108 480,76 740,92 C990,108 1230,82 1440,94 L1560,100.8',
        'M-120,105 L0,112 C240,126 480,94 740,110 C990,126 1230,100 1440,112 L1560,118.8',
      ],
    },
    narrow: {
      width: 390,
      height: 120,
      fills: [
        'M0,42 C70,56 160,28 250,42 C315,52 360,46 390,40 L390,120 L0,120 Z',
        'M0,66 C80,78 170,52 260,66 C320,76 362,70 390,64 L390,120 L0,120 Z',
        'M0,92 C90,100 180,82 270,92 C330,99 364,95 390,90 L390,120 L0,120 Z',
      ],
      contours: [
        'M-60,48.6 L0,54 C90,62 180,44 270,54 C330,61 364,57 390,52 L450,40.5',
        'M-60,60.6 L0,66 C90,74 180,56 270,66 C330,73 364,69 390,64 L450,52.5',
        'M-60,72.6 L0,78 C90,86 180,68 270,78 C330,85 364,81 390,76 L450,64.5',
      ],
    },
  },
};

const fillOpacities = [0.35, 0.6, 1];
const contourOpacities = [0.12, 0.2, 0.3];

interface WaveProps {
  shape: WaveShape;
  color: string;
  display: Record<string, string>;
  phase: number;
  span: WaveSpan;
}

function Wave({ shape, color, display, phase, span }: WaveProps) {
  return (
    <Box
      component="svg"
      viewBox={`0 0 ${shape.width} ${shape.height}`}
      preserveAspectRatio="none"
      focusable="false"
      sx={[{ position: 'absolute', inset: 0, width: '100%', height: '100%', display }, waveMotionSx(phase, span)]}
    >
      {shape.fills.map((d, index) => (
        <g key={d} className={swellClasses[index]}>
          <path d={d} fill={color} fillOpacity={fillOpacities[index]} />
        </g>
      ))}
      <g fill="none" stroke={robotxColors.gold}>
        {shape.contours.map((d, index) => (
          <g key={d} className={slideClasses[index]}>
            <g className={driftClasses[index]}>
              <path d={d} strokeOpacity={contourOpacities[index]} vectorEffect="non-scaling-stroke" />
            </g>
          </g>
        ))}
      </g>
    </Box>
  );
}

export default function TideDivider({ from, to, variant = 'swell', phase = 0 }: TideDividerProps) {
  const shape = shapes[variant];
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'relative',
        height: { xs: 120, sm: 150, md: 180 },
        background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
        mb: '-1px',
      }}
    >
      <Wave shape={shape.narrow} color={to} display={{ xs: 'block', sm: 'none' }} phase={phase} span="narrow" />
      <Wave shape={shape.wide} color={to} display={{ xs: 'none', sm: 'block' }} phase={phase} span="wide" />
    </Box>
  );
}
