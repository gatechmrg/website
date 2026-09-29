import { KeyboardEvent, useState } from 'react';
import Image from 'next/image';
import { Box, Container, Dialog, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion, robotxColors } from './colors';
import type { SxObject } from './colors';
import { robotx2026Timeline } from '../../../data/robotx2026';
import type { GalleryShape } from '../../../data/robotx2026';

const { heading, items: images } = robotx2026Timeline.gallery;

const shapes: Record<GalleryShape, SxObject> = {
  normal: {},
  wide: { gridColumn: 'span 2' },
  tall: { gridRow: 'span 2' },
  wideOnPhone: { gridColumn: { xs: 'span 2', md: 'span 1' } },
};

const tileZoom = { '& img': { transform: 'scale(1.04)' } };
const tileTint = { '& img': { filter: 'brightness(1.05)' } };

const navButton: SxObject = {
  width: 48,
  height: 48,
  color: '#ffffff',
  bgcolor: 'rgba(0,24,72,0.72)',
  border: '1px solid rgba(255,255,255,0.3)',
  '&:hover': { bgcolor: 'rgba(0,24,72,0.72)' },
  [motion.hover]: { '&:hover': { bgcolor: robotxColors.activeFill, borderColor: robotxColors.gold } },
  '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '3px' },
  [motion.allowed]: { transition: `background-color ${motion.fast}, border-color ${motion.fast}` },
};

export default function TimelineGallery({ background }: { background: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down('sm'));
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');

  const step = (delta: number) => setIndex(value => (value + delta + images.length) % images.length);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      step(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      step(-1);
    }
  };

  const current = images[index];

  return (
    <Box component="section" id="gallery" aria-labelledby="robotx-gallery-title" sx={{ bgcolor: background, pt: { xs: '16px', md: '24px' }, pb: { xs: '56px', md: '88px' } }}>
      <Container maxWidth="lg">
        <Typography
          id="robotx-gallery-title"
          component="h2"
          sx={{ m: 0, mb: { xs: '24px', md: '32px' }, fontSize: { xs: 30, md: 44 }, fontWeight: 400, letterSpacing: { md: '-0.5px' }, lineHeight: 1.2 }}
        >
          {heading}
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' },
            gridAutoRows: { xs: 132, sm: 220, md: 260 },
            gridAutoFlow: 'dense',
            gap: { xs: '12px', md: '16px' },
          }}
        >
          {images.map((image, position) => (
            <Box component="li" key={image.src} sx={[{ minWidth: 0 }, shapes[image.shape]]}>
              <Box
                component="button"
                type="button"
                aria-haspopup="dialog"
                onClick={() => { setIndex(position); setOpen(true); }}
                sx={{
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  p: 0,
                  border: 0,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  isolation: 'isolate',
                  cursor: 'zoom-in',
                  bgcolor: robotxColors.footerNavy,
                  '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '3px', ...tileTint },
                  [motion.hover]: { '&:hover': tileTint },
                  [motion.allowed]: {
                    '& img': { transition: `transform ${motion.zoom} ${motion.ease}, filter ${motion.zoom} ${motion.ease}` },
                    '&:focus-visible': tileZoom,
                  },
                  [motion.hoverMotion]: { '&:hover': tileZoom },
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 599px) 50vw, (max-width: 899px) 50vw, (max-width: 1199px) 34vw, 400px"
                  style={{ objectFit: 'cover', objectPosition: image.position ?? '50% 50%' }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        onKeyDown={handleKeyDown}
        fullScreen={phone}
        maxWidth={false}
        transitionDuration={reduced ? 0 : undefined}
        aria-labelledby="robotx-lightbox-caption"
        slotProps={{ backdrop: { sx: { bgcolor: 'rgba(0,12,36,0.92)' } } }}
        PaperProps={{
          sx: {
            bgcolor: { xs: robotxColors.footerNavy, sm: 'transparent' },
            backgroundImage: 'none',
            boxShadow: 'none',
            m: { xs: 0, sm: '24px' },
            width: { sm: 'min(1280px, calc(100vw - 48px))' },
            maxHeight: { sm: 'calc(100vh - 48px)' },
            overflow: 'hidden',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: { xs: '100%', sm: 'auto' }, p: { xs: '12px', sm: 0 }, gap: '12px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
            <Typography sx={{ m: 0, fontSize: 14, color: robotxColors.light }} aria-live="polite">
              {index + 1} of {images.length}
            </Typography>
            <IconButton aria-label="Close gallery" onClick={() => setOpen(false)} sx={navButton}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              position: 'relative',
              flex: { xs: 1, sm: 'none' },
              height: { sm: 'calc(100vh - 220px)' },
              minHeight: 200,
              borderRadius: '14px',
              overflow: 'hidden',
            }}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 599px) 100vw, 90vw"
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <IconButton aria-label="Previous image" onClick={() => step(-1)} sx={navButton}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography id="robotx-lightbox-caption" sx={{ m: 0, flex: 1, textAlign: 'center', fontSize: { xs: 15, md: 17 }, lineHeight: 1.5, color: '#ffffff' }}>
              {current.alt}
            </Typography>
            <IconButton aria-label="Next image" onClick={() => step(1)} sx={navButton}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
