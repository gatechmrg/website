import { keyframes } from '@mui/material/styles';
import { motion } from './colors';
import type { SxObject } from './colors';

export const swellClasses = ['robotx-swell-back', 'robotx-swell-middle', 'robotx-swell-front'] as const;
export const driftClasses = ['robotx-drift-a', 'robotx-drift-b', 'robotx-drift-c'] as const;
export const slideClasses = ['robotx-slide-a', 'robotx-slide-b', 'robotx-slide-c'] as const;

const swell = (peak: number) => keyframes`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(${peak}); }
`;

const drift = keyframes`
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(-7px); opacity: 0.8; }
`;

const slide = (span: number) => keyframes`
  from { transform: translateX(-${span}px); }
  to { transform: translateX(${span}px); }
`;

const slides = { wide: slide(64), narrow: slide(30) };

export type WaveSpan = keyof typeof slides;

const swellLayers = [
  { animation: swell(1.07), period: 15, delay: 3 },
  { animation: swell(1.08), period: 12, delay: 7 },
  { animation: swell(1.09), period: 9, delay: 2 },
];

const driftLayers = [
  { period: 13, delay: 5 },
  { period: 17, delay: 11 },
  { period: 21, delay: 2 },
];

const slideLayers = [
  { period: 18, delay: 9 },
  { period: 23, delay: 4 },
  { period: 28, delay: 21 },
];

const offset = (delay: number, phase: number) => `${-Math.round((delay + phase) * 100) / 100}s`;

export function waveMotionSx(phase: number, span: WaveSpan): SxObject {
  const layers: Record<string, object> = {};
  swellLayers.forEach((layer, index) => {
    layers[`& .${swellClasses[index]}`] = {
      transformBox: 'fill-box',
      transformOrigin: '50% 100%',
      willChange: 'transform',
      animation: `${layer.animation} ${layer.period}s ease-in-out ${offset(layer.delay, phase)} infinite`,
    };
  });
  driftLayers.forEach((layer, index) => {
    layers[`& .${driftClasses[index]}`] = {
      willChange: 'transform, opacity',
      animation: `${drift} ${layer.period}s ease-in-out ${offset(layer.delay, phase)} infinite`,
    };
  });
  slideLayers.forEach((layer, index) => {
    layers[`& .${slideClasses[index]}`] = {
      willChange: 'transform',
      animation: `${slides[span]} ${layer.period}s ease-in-out ${offset(layer.delay, phase)} infinite alternate`,
    };
  });
  return { [motion.allowed]: layers };
}
