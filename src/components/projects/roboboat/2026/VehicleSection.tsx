import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const ModelViewer = dynamic(() => import('./ModelViewer'), { ssr: false });

export default function VehicleSection() {
  const handleInspectClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent navigating to vehicle page
    window.open('/models/roboboat.glb', '_blank'); // open model in new tab
  };

  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography
        variant="h4"
        sx={{ color: 'primary.light', fontWeight: 800, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        Vehicle
      </Typography>

      <Link
        href="/projects/roboboat/2026/vehicle"
        style={{ textDecoration: 'none', display: 'block', width: '100%' }}
        aria-label="Vehicle specs"
      >
        <Box
          sx={{
            width: { xs: '90%', md: '70%' },
            mx: 'auto',
            cursor: 'pointer',
            borderRadius: 2,
            overflow: 'hidden',
            border: '2px solid rgba(255,255,255,0.1)',
            bgcolor: 'rgba(255,255,255,0.03)',
            position: 'relative',
          }}
        >
          <Box className="vehicle-image" sx={{ width: '100%', height: { xs: '240px', md: '400px' } }}>
            <ModelViewer
              src="/models/roboboat.glb"
              alt="RoboBoat 2026 Vehicle"
              camera-controls
              auto-rotate
              interaction-prompt="none"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>

          {/* Corner Inspect Link */}
          <Box
            onClick={handleInspectClick}
            sx={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              px: 1.5,
              py: 0.5,
              bgcolor: 'rgba(0,0,0,0.65)',
              color: 'white',
              fontSize: '0.8rem',
              borderRadius: 1,
              fontWeight: 600,
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            Inspect more →
          </Box>

          <Typography
            sx={{
              mt: 1,
              color: 'primary.light',
              fontWeight: 700,
              fontSize: { xs: '1rem', md: '1.25rem' },
              letterSpacing: '0.5px',
              textAlign: 'center',
              py: 0.5,
            }}
          >
            Interactive 3D Vehicle Model
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
