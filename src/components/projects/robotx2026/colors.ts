import type { SxProps, Theme } from '@mui/material/styles';

export const robotxColors = {
  navy: '#003566',
  deep: '#00284F',
  footerNavy: '#001848',
  gold: '#B3A369',
  paleGold: '#E9DDB0',
  bodySecondary: '#C4D3E3',
  light: '#D5DFEA',
  hairline: 'rgba(255,255,255,0.12)',
  pillSurface: 'rgba(0,24,72,0.72)',
  pillBorder: 'rgba(255,255,255,0.14)',
  activeFill: 'rgba(179,163,105,0.22)',
} as const;

export const sectionScrollMargin = { xs: '156px', md: '172px' };

export const motion = {
  hover: '@media (hover: hover) and (pointer: fine)',
  hoverMotion: '@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
  allowed: '@media (prefers-reduced-motion: no-preference)',
  reduced: '@media (prefers-reduced-motion: reduce)',
  ease: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
  fast: '0.2s',
  zoom: '0.45s',
} as const;

export type SxObject = Exclude<SxProps<Theme>, ReadonlyArray<unknown> | ((...args: never[]) => unknown)>;
