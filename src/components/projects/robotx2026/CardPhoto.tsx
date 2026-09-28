import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { motion, robotxColors } from './colors';
import type { SxObject } from './colors';

const photoClass = 'robotx-card-photo';
const titleClass = 'robotx-card-title';

interface CardPhotoProps {
  src: string;
  alt: string;
  href: string;
  sizes: string;
  sx?: SxProps<Theme>;
}

export function cardHoverSx(scale: number): SxObject {
  const tint = {
    [`& .${photoClass} img`]: { filter: 'brightness(1.05)' },
    [`& .${titleClass}`]: { color: robotxColors.paleGold },
  };
  const zoom = { [`& .${photoClass} img`]: { transform: `scale(${scale})` } };
  return {
    [motion.allowed]: {
      [`& .${photoClass} img`]: { transition: `transform ${motion.zoom} ${motion.ease}, filter ${motion.zoom} ${motion.ease}` },
      [`& .${titleClass}`]: { transition: `color ${motion.fast}` },
      '&:has(a:focus-visible)': zoom,
    },
    [motion.hover]: { '&:hover': tint },
    [motion.hoverMotion]: { '&:hover': zoom },
    '&:has(a:focus-visible)': tint,
  };
}

export function CardTitleLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Box
      component={Link}
      href={href}
      className={titleClass}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        borderRadius: '4px',
        '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '3px' },
      }}
    >
      {children}
    </Box>
  );
}

export default function CardPhoto({ src, alt, href, sizes, sx }: CardPhotoProps) {
  return (
    <Box
      className={photoClass}
      sx={[{ position: 'relative', borderRadius: '14px', overflow: 'hidden', isolation: 'isolate' }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: 'cover' }} />
      <Box component={Link} href={href} tabIndex={-1} aria-hidden="true" sx={{ position: 'absolute', inset: 0 }} />
    </Box>
  );
}
