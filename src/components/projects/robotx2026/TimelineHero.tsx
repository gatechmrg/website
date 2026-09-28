import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import LinkButton from './LinkButton';
import TideDivider from './TideDivider';
import { robotxColors } from './colors';
import { robotx2026Timeline } from '../../../data/robotx2026';

const { hero } = robotx2026Timeline;

export default function TimelineHero() {
  return (
    <Box
      component="section"
      aria-labelledby="robotx-timeline-title"
      sx={{ position: 'relative', minHeight: { xs: 360, md: 440 }, overflow: 'hidden', bgcolor: robotxColors.deep, display: 'flex' }}
    >
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: '50% 55%' }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(0,24,72,0.9) 0%, rgba(0,24,72,0.72) 60%, rgba(0,24,72,0.5) 100%)',
            md: 'linear-gradient(90deg, rgba(0,24,72,0.88) 0%, rgba(0,24,72,0.68) 42%, rgba(0,24,72,0.2) 75%)',
          },
        }}
      />
      <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
        <TideDivider from="rgba(0,40,79,0)" to={robotxColors.deep} phase={3.3} />
      </Box>
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', pt: { xs: '28px', md: '64px' }, pb: { xs: '96px', sm: '120px', md: '140px' } }}
      >
        <Box sx={{ maxWidth: { md: 620 }, display: 'flex', flexDirection: 'column', gap: { xs: '12px', md: '16px' } }}>
          <LinkButton href={hero.back.href} sx={{ mb: { xs: '6px', md: '10px' } }}>
            {hero.back.label}
          </LinkButton>
          <Typography sx={{ m: 0, fontSize: { xs: 15, md: 17 }, fontWeight: 500, color: robotxColors.light }}>
            {hero.eyebrow}
          </Typography>
          <Typography
            id="robotx-timeline-title"
            component="h1"
            sx={{
              m: 0,
              fontSize: { xs: 40, sm: 52, md: 64 },
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: { xs: '-0.5px', md: '-1px' },
              textShadow: '0 2px 12px rgba(0,0,0,0.35)',
            }}
          >
            {hero.title}
          </Typography>
          <Typography sx={{ m: 0, mt: { xs: '2px', md: '4px' }, fontSize: { xs: 16, md: 20 }, lineHeight: 1.55, fontWeight: 300 }}>
            {hero.intro}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
