import { Box, Container, Typography } from '@mui/material';
import CardPhoto, { CardTitleLink, cardHoverSx } from './CardPhoto';
import LinkButton from './LinkButton';
import { robotxColors, sectionScrollMargin } from './colors';
import { robotx2026Page } from '../../../data/robotx2026';

const { heading, items } = robotx2026Page.vehicles;

export default function VehicleOverview() {
  return (
    <Box
      component="section"
      id="vehicles"
      aria-labelledby="robotx-vehicles-title"
      sx={{ bgcolor: robotxColors.deep, pt: { xs: '28px', md: '40px' }, pb: { xs: '48px', md: '72px' }, scrollMarginTop: sectionScrollMargin }}
    >
      <Container maxWidth="lg">
        <Typography
          id="robotx-vehicles-title"
          component="h2"
          sx={{ m: 0, mb: { xs: '32px', md: '36px' }, fontSize: { xs: 30, md: 44 }, fontWeight: 400, letterSpacing: { md: '-0.5px' }, lineHeight: 1.2 }}
        >
          {heading}
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))' }, gap: { xs: '32px', md: '32px' } }}>
          {items.map(vehicle => (
            <Box
              component="article"
              key={vehicle.href}
              sx={[{ display: 'flex', flexDirection: 'column', gap: { xs: '10px', md: '14px' } }, cardHoverSx(1.04)]}
            >
              <CardPhoto
                src={vehicle.image}
                alt={vehicle.alt}
                href={vehicle.href}
                sizes="(max-width: 599px) calc(100vw - 32px), (max-width: 1199px) 50vw, 576px"
                sx={{ height: { xs: 280, sm: 360, md: 500 } }}
              />
              <Typography component="h3" sx={{ m: 0, mt: { xs: '6px', md: '10px' }, fontSize: { xs: 22, md: 28 }, fontWeight: 500 }}>
                <CardTitleLink href={vehicle.href}>{vehicle.name}</CardTitleLink>
              </Typography>
              <Typography sx={{ m: 0, fontSize: { xs: 15, md: 17 }, lineHeight: 1.6, color: robotxColors.bodySecondary, maxWidth: 540, flexGrow: 1 }}>
                {vehicle.description}
              </Typography>
              <LinkButton href={vehicle.href} sx={{ mt: { xs: '4px', md: '6px' } }}>
                {vehicle.button}
              </LinkButton>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
