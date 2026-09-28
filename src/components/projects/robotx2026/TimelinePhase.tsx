import type { ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { robotxColors } from './colors';

export type MediaSide = 'left' | 'right';

interface TimelinePhaseProps {
  id: string;
  label: string;
  title: string;
  dates: string;
  paragraphs: string[];
  media: ReactNode;
  mediaSide: MediaSide;
  background: string;
  first?: boolean;
}

export default function TimelinePhase({ id, label, title, dates, paragraphs, media, mediaSide, background, first = false }: TimelinePhaseProps) {
  const titleId = `${id}-title`;
  const mediaLeft = mediaSide === 'left';
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={titleId}
      sx={{ bgcolor: background, pt: first ? { xs: '28px', md: '40px' } : { xs: '16px', md: '24px' }, pb: { xs: '56px', md: '88px' } }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'minmax(0, 1fr)',
            md: mediaLeft ? 'minmax(0, 11fr) minmax(0, 9fr)' : 'minmax(0, 9fr) minmax(0, 11fr)',
          },
          gap: { xs: '24px', md: '64px' },
          alignItems: 'center',
        }}
      >
        <Box sx={{ order: { xs: 0, md: mediaLeft ? 0 : 1 }, minWidth: 0 }}>{media}</Box>
        <Box sx={{ order: { xs: 1, md: mediaLeft ? 1 : 0 }, display: 'flex', flexDirection: 'column', gap: { xs: '10px', md: '14px' }, minWidth: 0 }}>
          <Typography sx={{ m: 0, fontSize: 15, fontWeight: 500, color: robotxColors.paleGold }}>{label}</Typography>
          <Typography
            id={titleId}
            component="h2"
            sx={{ m: 0, fontSize: { xs: 28, md: 40 }, fontWeight: 400, letterSpacing: { md: '-0.5px' }, lineHeight: 1.2 }}
          >
            {title}
          </Typography>
          <Typography sx={{ m: 0, fontSize: 16, color: robotxColors.bodySecondary }}>{dates}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '14px', md: '16px' }, mt: { xs: '4px', md: '8px' } }}>
            {paragraphs.map(paragraph => (
              <Typography key={paragraph} sx={{ m: 0, fontSize: { xs: 16, md: 18 }, lineHeight: 1.65, color: robotxColors.bodySecondary }}>
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
