import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { sponsorTiers } from '../../../data/sponsors';
import LinkButton from './LinkButton';
import { motion, robotxColors, sectionScrollMargin } from './colors';
import { robotx2026Page } from '../../../data/robotx2026';

const featuredSponsors = sponsorTiers
  .filter((tier) => tier.label === 'Platinum Sponsors' || tier.label === 'Gold Sponsors')
  .flatMap((tier) => tier.sponsors);

const sponsorShadow = '0 8px 20px rgba(0,12,36,0.35)';

const sponsorLift = { transform: 'translateY(-2px)' };

const { heading, photo, roster, contactPrefix, email, sponsors } = robotx2026Page.team;

export default function TeamResources() {
  return (
    <Box
      component="section"
      id="team"
      aria-labelledby="robotx-team-title"
      sx={{ bgcolor: robotxColors.navy, pt: { xs: '16px', md: '24px' }, pb: { xs: '40px', md: '72px' }, scrollMarginTop: sectionScrollMargin }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: '620px minmax(0, 1fr)' },
          gridTemplateAreas: { xs: '"title" "image" "details"', md: '"image title" "image details"' },
          gridTemplateRows: { md: 'auto 1fr' },
          columnGap: { md: '72px' },
          rowGap: { xs: '18px', md: '22px' },
          alignItems: 'start',
        }}
      >
        <Typography
          id="robotx-team-title"
          component="h2"
          sx={{ gridArea: 'title', m: 0, fontSize: { xs: 30, md: 44 }, fontWeight: 400, letterSpacing: { md: '-0.5px' }, lineHeight: 1.2 }}
        >
          {heading}
        </Typography>
        <Box sx={{ gridArea: 'image', position: 'relative', height: { xs: 230, sm: 380, md: 420 }, borderRadius: '14px', overflow: 'hidden' }}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 899px) calc(100vw - 32px), 620px"
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{ gridArea: 'details', display: 'flex', flexDirection: 'column', gap: { xs: '18px', md: '22px' }, minWidth: 0 }}>
          <Box
            component="ul"
            sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: { xs: '16px', md: '24px' }, rowGap: '14px' }}
          >
            {roster.map((member, index) => (
              <Box component="li" key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <Box component="span" sx={{ fontSize: { xs: 15, md: 16 } }}>{member.name}</Box>
                <Box component="span" sx={{ fontSize: { xs: 13, md: 14 }, color: robotxColors.bodySecondary }}>{member.role}</Box>
              </Box>
            ))}
          </Box>
          <Typography sx={{ m: 0, fontSize: { xs: 15, md: 16 }, lineHeight: 1.5, color: robotxColors.bodySecondary }}>
            {contactPrefix}{' '}
            <Box
              component="a"
              href={`mailto:${email}`}
              sx={{ color: robotxColors.gold, textDecoration: 'underline', textUnderlineOffset: '3px', overflowWrap: 'anywhere', '&:hover': { color: '#d6c78f' } }}
            >
              {email}
            </Box>
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: { xs: '8px', md: '10px' }, mt: { md: '10px' } }}>
            {featuredSponsors.map((sponsor) => (
              <Box
                key={sponsor.name}
                component={Link}
                href={sponsors.href}
                aria-label={`${sponsor.name}, see all sponsors`}
                sx={{
                  display: 'block',
                  position: 'relative',
                  height: { xs: 48, md: 52 },
                  bgcolor: '#ffffff',
                  borderRadius: '8px',
                  p: { xs: '6px', md: '8px' },
                  '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '3px', boxShadow: sponsorShadow },
                  [motion.hover]: { '&:hover': { boxShadow: sponsorShadow } },
                  [motion.allowed]: { transition: `box-shadow ${motion.fast}, transform ${motion.fast}`, '&:focus-visible': sponsorLift },
                  [motion.hoverMotion]: { '&:hover': sponsorLift },
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src={sponsor.logo} alt={sponsor.name} fill sizes="(max-width: 899px) 30vw, 150px" style={{ objectFit: 'contain' }} />
                </Box>
              </Box>
            ))}
          </Box>
          <LinkButton href={sponsors.href}>{sponsors.label}</LinkButton>
        </Box>
      </Container>
    </Box>
  );
}
