import type { ReactNode } from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { motion, robotxColors } from './colors';

export type LinkButtonVariant = 'outlined' | 'solid' | 'light';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: LinkButtonVariant;
  sx?: SxProps<Theme>;
}

interface VariantStyle {
  rest: SxProps<Theme>;
  active: Record<string, string>;
}

const variantStyles: Record<LinkButtonVariant, VariantStyle> = {
  outlined: {
    rest: {
      border: '1px solid rgba(179,163,105,0.55)',
      bgcolor: 'rgba(179,163,105,0.1)',
      color: robotxColors.paleGold,
      fontSize: 15,
      px: '20px',
      py: '10px',
    },
    active: {
      backgroundColor: robotxColors.gold,
      color: robotxColors.footerNavy,
      boxShadow: '0 0 0 4px rgba(179,163,105,0.14), 0 6px 18px rgba(179,163,105,0.18)',
    },
  },
  solid: {
    rest: {
      border: `1px solid ${robotxColors.gold}`,
      bgcolor: robotxColors.gold,
      color: robotxColors.footerNavy,
      fontSize: { xs: 15, md: 16 },
      px: '22px',
      py: '12px',
    },
    active: {
      backgroundColor: '#C2B27A',
      borderColor: '#C2B27A',
      boxShadow: '0 8px 22px rgba(179,163,105,0.35)',
    },
  },
  light: {
    rest: {
      border: '1px solid rgba(255,255,255,0.6)',
      bgcolor: 'rgba(0,24,72,0.25)',
      color: '#ffffff',
      fontSize: { xs: 15, md: 16 },
      px: '22px',
      py: '12px',
    },
    active: {
      backgroundColor: 'rgba(255,255,255,0.12)',
      borderColor: '#ffffff',
    },
  },
};

const lift = { transform: 'translateY(-1px)' };

export default function LinkButton({ href, children, variant = 'outlined', sx }: LinkButtonProps) {
  return (
    <Box
      component={Link}
      href={href}
      sx={[
        {
          alignSelf: 'flex-start',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 44,
          borderRadius: '999px',
          fontWeight: 500,
          lineHeight: 1.4,
          textDecoration: 'none',
          textAlign: 'center',
          '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '3px', ...variantStyles[variant].active },
          [motion.hover]: { '&:hover': variantStyles[variant].active },
          [motion.allowed]: {
            transition: `background-color ${motion.fast}, color ${motion.fast}, border-color ${motion.fast}, box-shadow ${motion.fast}, transform ${motion.fast}`,
            '&:focus-visible': lift,
          },
          [motion.hoverMotion]: { '&:hover': lift, '&:active': { transform: 'translateY(0)' } },
        },
        variantStyles[variant].rest,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
