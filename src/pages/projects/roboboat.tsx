import Head from "next/head";
import Header from "../../components/nav/Header";
import Footer from "../../components/nav/Footer";
import { Container, Box, Typography, Stack } from "@mui/material";
import Link from "next/link";
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

export default function RoboBoat() {
  const entries = [
    { year: '2024', href: '/projects/roboboat/2024' },
    { year: '2026', href: '/projects/roboboat/2026' },
  ];

  return (
    <>
      <Head>
        <title>RoboBoat | GT Marine Robotics Group</title>
      </Head>
      <div className="root-header-footer">
        <Header />
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
              RoboBoat
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Select a RoboBoat entry to view year-specific pages and resources.
            </Typography>
          </Box>
          
          <Stack spacing={3} alignItems="center">
            {entries.map(e => (
              <Link 
                key={e.year} 
                href={e.href}
                style={{ textDecoration: 'none', width: '100%', maxWidth: '500px' }}
              >
                <Box sx={{
                  display: 'block',
                  p: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderTop: '3px solid',
                  borderTopColor: 'primary.main',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.08)',
                    transform: 'translateY(-4px)',
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <DirectionsBoatIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                      RoboBoat {e.year}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Stack>
        </Container>
        <Footer />
      </div>
    </>
  );
}