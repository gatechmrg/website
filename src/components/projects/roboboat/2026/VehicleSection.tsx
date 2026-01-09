import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

export default function VehicleSection() {
  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography
        className="vehicle-title"
        variant="h4"
        sx={{ color: 'primary.light', fontWeight: 800, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        Vehicle
      </Typography>

      <Link href="/projects/roboboat/2026/vehicle" style={{ textDecoration: 'none', display: 'block', width: '100%' }} aria-label="Vehicle specs">
        <Box
          sx={{
            width: { xs: '90%', md: '70%' },
            mx: 'auto',
            cursor: 'pointer',
            borderRadius: 2,
            overflow: 'hidden',
            border: '2px solid rgba(255,255,255,0.1)',
            bgcolor: 'rgba(255,255,255,0.03)',
            transition: 'all 200ms ease-in-out',
            '&:hover .vehicle-image': {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: theme => `0 15px 35px ${theme.palette.primary.main}33`
            },
            '&:hover .vehicle-cta': {
              bgcolor: 'primary.main',
              color: 'white'
            }
          }}
        >
          <Box
            className="vehicle-image"
            sx={{ position: 'relative', width: '100%', height: { xs: '240px', md: '400px' }, transition: 'transform 200ms ease, box-shadow 200ms ease' }}
          >
            <Image src="/bb.png" alt="RoboBoat 2026 Vehicle" fill style={{ objectFit: 'contain' }} />
          </Box>

          <Typography
            className="vehicle-cta"
            role="button"
            sx={{ mt: 1, color: 'primary.light', fontWeight: 700, fontSize: { xs: '1rem', md: '1.25rem' }, letterSpacing: '0.5px', width: '100%', textAlign: 'center', display: 'block', px: 2, py: 0.5, borderRadius: 1, transition: 'all 160ms ease' }}
          >
            Click to View Vehicle Specs!
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
