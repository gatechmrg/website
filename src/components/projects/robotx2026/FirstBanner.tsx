import { getImageProps } from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import LinkButton from './LinkButton';
import { robotxColors } from './colors';
import { driftClasses, slideClasses, swellClasses, waveMotionSx } from './waveMotion';
import { robotx2026Page } from '../../../data/robotx2026';

const { hero } = robotx2026Page;

const phoneOnly = { display: { xs: 'inline', md: 'none' } };
const desktopOnly = { display: { xs: 'none', md: 'inline' } };

function HeroPicture() {
  const common = { alt: hero.alt, fill: true, sizes: '100vw', priority: true };
  const { props: { srcSet: wideSrcSet } } = getImageProps({ ...common, src: hero.image });
  const { props: { srcSet: tallSrcSet, ...imgProps } } = getImageProps({ ...common, src: hero.phoneImage });

  return (
    <Box
      component="picture"
      sx={{
        position: 'absolute',
        inset: 0,
        '& img': { objectFit: 'cover', objectPosition: { xs: '50% 70%', md: '50% 100%' } },
      }}
    >
      <source media="(min-width: 900px)" srcSet={wideSrcSet} sizes="100vw" />
      <source media="(max-width: 899.98px)" srcSet={tallSrcSet} sizes="100vw" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...imgProps} srcSet={tallSrcSet} alt={hero.alt} />
    </Box>
  );
}

const heroWaves = {
  narrow: {
    viewBox: '0 0 390 110',
    height: 110,
    display: { xs: 'block', sm: 'none' },
    fills: [
      'M0,54 C80,36 170,72 260,58 C320,48 360,42 390,48 L390,110 L0,110 Z',
      'M0,74 C90,62 180,90 270,78 C330,70 365,66 390,70 L390,110 L0,110 Z',
      'M0,94 C90,86 190,104 280,96 C335,92 368,90 390,92 L390,110 L0,110 Z',
    ],
    contours: [
      'M-60,56.6 L0,50 C90,40 190,64 280,54 C335,48 368,46 390,48 L450,53.5',
      'M-60,68.6 L0,62 C90,52 190,76 280,66 C335,60 368,58 390,60 L450,65.5',
      'M-60,84.6 L0,78 C90,68 190,92 280,82 C335,76 368,74 390,76 L450,81.5',
    ],
  },
  wide: {
    viewBox: '0 0 1440 160',
    height: 160,
    display: { xs: 'none', sm: 'block' },
    fills: [
      'M0,80 C240,50 480,110 720,88 C960,66 1200,40 1440,70 L1440,160 L0,160 Z',
      'M0,108 C260,86 500,132 760,112 C1000,94 1220,80 1440,100 L1440,160 L0,160 Z',
      'M0,136 C220,120 460,154 720,142 C980,130 1220,120 1440,134 L1440,160 L0,160 Z',
    ],
    contours: [
      'M-120,90.8 L0,82 C220,66 460,100 720,88 C980,76 1220,66 1440,80 L1560,87.7',
      'M-120,108.8 L0,100 C220,84 460,118 720,106 C980,94 1220,84 1440,98 L1560,105.7',
      'M-120,126.8 L0,118 C220,102 460,136 720,124 C980,112 1220,102 1440,116 L1560,123.7',
    ],
  },
} as const;

const heroFillOpacities = [0.3, 0.55, 1];
const heroContourOpacities = [0.14, 0.22, 0.32];

function HeroWave() {
  return (
    <>
      {(['narrow', 'wide'] as const).map((span) => {
        const wave = heroWaves[span];
        return (
          <Box
            key={span}
            component="svg"
            viewBox={wave.viewBox}
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
            sx={[
              { position: 'absolute', left: 0, right: 0, bottom: '-1px', width: '100%', height: wave.height, display: wave.display },
              waveMotionSx(0, span),
            ]}
          >
            {wave.fills.map((d, index) => (
              <g key={d} className={swellClasses[index]}>
                <path d={d} fill={robotxColors.deep} fillOpacity={heroFillOpacities[index]} />
              </g>
            ))}
            <g fill="none" stroke={robotxColors.gold}>
              {wave.contours.map((d, index) => (
                <g key={d} className={slideClasses[index]}>
                  <g className={driftClasses[index]}>
                    <path d={d} strokeOpacity={heroContourOpacities[index]} vectorEffect="non-scaling-stroke" />
                  </g>
                </g>
              ))}
            </g>
          </Box>
        );
      })}
    </>
  );
}

export default function FirstBanner2026() {
  return (
    <Box
      component="section"
      aria-labelledby="robotx-title"
      sx={{ position: 'relative', height: { xs: 780, md: 860 }, overflow: 'hidden', bgcolor: robotxColors.deep }}
    >
      <HeroPicture />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(0,24,72,0.88) 0%, rgba(0,24,72,0.6) 36%, rgba(0,24,72,0) 55%)',
            md: 'linear-gradient(90deg, rgba(0,24,72,0.82) 0%, rgba(0,24,72,0.55) 30%, rgba(0,24,72,0) 52%)',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 160,
          background: 'linear-gradient(180deg, rgba(0,40,79,0) 0%, rgba(0,40,79,0.35) 100%)',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', pt: { xs: '48px', md: '160px' } }}>
        <Box sx={{ maxWidth: { md: 500 }, display: 'flex', flexDirection: 'column', gap: { xs: '12px', md: '20px' } }}>
          <Typography
            id="robotx-title"
            component="h1"
            sx={{
              m: 0,
              fontSize: { xs: 52, sm: 72, md: 92 },
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: { xs: '-1px', md: '-1.5px' },
              whiteSpace: { sm: 'nowrap' },
              textShadow: '0 2px 12px rgba(0,0,0,0.35)',
            }}
          >
            {hero.title}
          </Typography>
          <Typography sx={{ m: 0, fontSize: { xs: 16, md: 20 }, color: robotxColors.light }}>
            {hero.subtitle}
          </Typography>
          <Typography sx={{ m: 0, mt: { xs: '2px', md: '6px' }, fontSize: { xs: 17, md: 22 }, lineHeight: 1.5, fontWeight: 300 }}>
            <Box component="span" sx={phoneOnly}>{hero.phoneLede}</Box>
            <Box component="span" sx={desktopOnly}>{hero.lede}</Box>
          </Typography>
          <Box sx={{ display: 'flex', gap: { xs: '10px', md: '14px' }, mt: { xs: '6px', md: '10px' } }}>
            {hero.buttons.map((button, index) => (
              <LinkButton
                key={button.href}
                href={button.href}
                variant={index === 0 ? 'solid' : 'light'}
                sx={{ flexGrow: { xs: 1, md: 0 }, whiteSpace: 'nowrap', px: { xs: '16px', md: '22px' } }}
              >
                {button.phoneLabel ? (
                  <>
                    <Box component="span" sx={phoneOnly}>{button.phoneLabel}</Box>
                    <Box component="span" sx={desktopOnly}>{button.label}</Box>
                  </>
                ) : button.label}
              </LinkButton>
            ))}
          </Box>
        </Box>
      </Container>
      <HeroWave />
    </Box>
  );
}
