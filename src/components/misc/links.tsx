import { Box, Grid, Typography, TypographyProps, SxProps, Theme } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

// Unified props interface for all link types
interface LinkProps {
  href: string;
  as?: string;
  openInNewTab?: boolean;
  children: ReactNode;
  variant?: TypographyProps['variant'];
  fontSize?: string;
  color?: TypographyProps['color'];
  sx?: SxProps<Theme>;
}

// === PrimaryLink ===
export function PrimaryLink({
  children,
  href,
  as,
  openInNewTab,
  color = 'primary.main',
  sx,
  ...typographyProps
}: LinkProps) {
  return (
    <Link href={href} as={as} target={openInNewTab ? '_blank' : undefined}>
      <Typography
        display="inline"
        color={color}
        sx={{
          transition: 'color 300ms',
          '&:hover': {
            color: 'primary.dark',
          },
          ...sx,
        }}
        {...typographyProps}
      >
        {children}
      </Typography>
    </Link>
  );
}

// === SecondaryLink ===
export function SecondaryLink({
  children,
  href,
  as,
  openInNewTab,
  color = 'text.primary',
  sx,
  ...typographyProps
}: LinkProps) {
  return (
    <Link href={href} as={as} target={openInNewTab ? '_blank' : undefined}>
      <Typography
        display="inline"
        color={color}
        sx={{
          transition: 'color 300ms',
          '&:hover': {
            color: 'primary.dark',
          },
          ...sx,
        }}
        {...typographyProps}
      >
        {children}
      </Typography>
    </Link>
  );
}

// === TextWithIconLink ===
interface TextWithIconLinkProps extends LinkProps {
  icon: ReactNode;
}

export function TextWithIconLink({
  children,
  href,
  as,
  openInNewTab,
  icon,
  sx,
  color = 'inherit',
  ...typographyProps
}: TextWithIconLinkProps) {
  return (
    <Link href={href} as={as} target={openInNewTab ? '_blank' : undefined}>
      <Box
        display="inline"
        sx={{
          color,
          transition: 'color 300ms',
          '&:hover': {
            color: 'primary.dark',
          },
          ...sx,
        }}
      >
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Box height="100%" display="grid" alignItems="center">
              {icon}
            </Box>
          </Grid>
          <Grid item>
            <Typography color="inherit" {...typographyProps}>
              {children}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
}
