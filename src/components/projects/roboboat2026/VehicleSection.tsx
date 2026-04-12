import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ModelViewer = dynamic(() => import('./ModelViewer'), { ssr: false });

export default function VehicleSection() {
  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          color: 'primary.light',
          fontWeight: 800,
          mb: 1,
          fontSize: { xs: '1.5rem', md: '2rem' },
        }}
      >
        BlueBoat Extended
      </Typography>

      {/* Vehicle Page Link (ABOVE model) */}
      <Link href="/projects/roboboat/2026/vehicle" passHref style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mb: 3,
            fontWeight: 600,
            fontSize: { xs: '0.85rem', md: '0.95rem' },
            px: 1.5,
            py: 0.7,
            borderRadius: 2,
            letterSpacing: '0.5px',
            textTransform: 'none',
            color: 'white',
            minWidth: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
          }}
          endIcon={<ArrowForwardIcon sx={{ fontSize: '1.1em', color: 'white' }} />}
        >
          Click to View Vehicle Overview
        </Button>
      </Link>

      {/* Model Container (NO LINK WRAPPER) */}
      <Box
        sx={{
          width: { xs: '90%', md: '70%' },
          mx: 'auto',
          borderRadius: 2,
          overflow: 'hidden',
          border: '2px solid rgba(255,255,255,0.1)',
          bgcolor: 'rgba(255,255,255,0.03)',
        }}
      >
        <Box sx={{ width: '100%', height: { xs: 240, md: 400 } }}>
          <ModelViewer
            src="/projects/roboboat2026/blueboat.glb"
            alt="RoboBoat 2026 Vehicle"
            camera-controls
            autoRotate={true}
            interaction-prompt="none"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>

        <Typography
          sx={{
            mt: 1,
            color: 'primary.light',
            fontWeight: 700,
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            letterSpacing: '0.5px',
            py: 0.75,
          }}
        >
          Drag to rotate · Scroll to zoom
        </Typography>
      </Box>
    </Box>
  );
}
