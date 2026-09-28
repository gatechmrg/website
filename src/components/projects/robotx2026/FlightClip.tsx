import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { motion, robotxColors } from './colors';

interface FlightClipProps {
  src: string;
  poster: string;
  caption: string;
  label: string;
  sizes: string;
  sx?: SxProps<Theme>;
}

const playTint = { '& .robotx-play': { bgcolor: robotxColors.gold, boxShadow: '0 0 0 6px rgba(179,163,105,0.18)' } };

const playZoom = {
  '& img': { transform: 'scale(1.04)' },
  '& .robotx-play': { transform: 'translate(-50%, -50%) scale(1.08)' },
};

export default function FlightClip({ src, poster, caption, label, sizes, sx }: FlightClipProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (playing) videoRef.current?.focus();
  }, [playing]);

  const frame: SxProps<Theme> = {
    isolation: 'isolate',
    position: 'relative',
    display: 'block',
    width: '100%',
    p: 0,
    border: 0,
    borderRadius: '14px',
    overflow: 'hidden',
    bgcolor: robotxColors.footerNavy,
  };

  if (playing) {
    return (
      <Box sx={[frame, ...(Array.isArray(sx) ? sx : [sx])]}>
        <Box
          component="video"
          ref={videoRef}
          controls
          autoPlay
          muted
          playsInline
          preload="none"
          poster={poster}
          aria-label={caption}
          sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain', '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '-2px' } }}
        >
          <source src={src} type="video/mp4" />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      component="button"
      type="button"
      aria-label={label}
      onClick={() => setPlaying(true)}
      sx={[
        frame,
        {
          cursor: 'pointer',
          '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '3px', ...playTint },
          [motion.hover]: { '&:hover': playTint },
          [motion.allowed]: {
            '& img': { transition: `transform ${motion.zoom} ${motion.ease}` },
            '& .robotx-play': { transition: `background-color ${motion.fast}, box-shadow ${motion.fast}, transform ${motion.fast} ${motion.ease}` },
            '&:focus-visible': playZoom,
          },
          [motion.hoverMotion]: { '&:hover': playZoom },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Image src={poster} alt="" fill sizes={sizes} style={{ objectFit: 'cover' }} />
      <Box
        component="span"
        className="robotx-play"
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: { xs: 60, md: 64 },
          height: { xs: 60, md: 64 },
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          bgcolor: 'rgba(0,24,72,0.72)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M8 5v14l11-7z" fill="#ffffff" />
        </svg>
      </Box>
      <Box
        component="span"
        sx={{ position: 'absolute', left: { xs: 14, md: 16 }, bottom: { xs: 12, md: 14 }, fontSize: { xs: 13, md: 14 }, color: '#ffffff', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
      >
        {caption}
      </Box>
    </Box>
  );
}
