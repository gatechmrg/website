import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import FlightClip from './FlightClip';
import LinkButton from './LinkButton';
import { robotxColors, sectionScrollMargin } from './colors';
import { robotx2026Page } from '../../../data/robotx2026';

const { heading, intro, latest, button, video, tiles } = robotx2026Page.testing;

const bodyText = { m: 0, lineHeight: 1.6, color: robotxColors.bodySecondary };

export default function TestingSection() {
  return (
    <Box
      component="section"
      id="testing"
      aria-labelledby="robotx-testing-title"
      sx={{ bgcolor: robotxColors.deep, pt: { xs: '16px', md: '24px' }, pb: { xs: '56px', md: '96px' }, scrollMarginTop: sectionScrollMargin }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: '440px minmax(0, 1fr)' }, gap: { md: '72px' }, alignItems: 'center' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '16px', md: '20px' } }}>
          <Typography id="robotx-testing-title" component="h2" sx={{ m: 0, fontSize: { xs: 30, md: 44 }, fontWeight: 400, letterSpacing: { md: '-0.5px' }, lineHeight: 1.2 }}>
            {heading}
          </Typography>
          <Typography sx={{ ...bodyText, fontSize: { xs: 16, md: 18 } }}>
            {intro}
          </Typography>
          <FlightClip
            {...video}
            sizes="calc(100vw - 32px)"
            sx={{ display: { xs: 'block', md: 'none' }, height: { xs: 210, sm: 360 }, mt: '4px' }}
          />
          <Typography sx={{ ...bodyText, fontSize: { xs: 15, md: 16 } }}>
            {latest}
          </Typography>
          <LinkButton
            href={button.href}
            variant="solid"
            sx={{ alignSelf: { xs: 'stretch', md: 'flex-start' }, mt: { md: '8px' } }}
          >
            {button.label}
          </LinkButton>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gridTemplateRows: '220px 220px',
            gap: '16px',
          }}
        >
          <FlightClip {...video} sizes="340px" sx={{ gridRow: 'span 2', height: '100%' }} />
          {tiles.map(tile => (
            <Box key={tile.src} sx={{ position: 'relative', borderRadius: '14px', overflow: 'hidden' }}>
              <Image src={tile.src} alt={tile.alt} fill sizes="340px" style={{ objectFit: 'cover' }} />
              {tile.caption && (
                <Box
                  component="span"
                  sx={{ position: 'absolute', left: 14, bottom: 12, fontSize: 14, color: '#ffffff', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                >
                  {tile.caption}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
