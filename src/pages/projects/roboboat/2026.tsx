import Head from "next/head";
import Header from "../../../components/nav/Header";
import Footer from "../../../components/nav/Footer";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import DescriptionIcon from '@mui/icons-material/Description';
import TimelineIcon from '@mui/icons-material/Timeline';
import InfoIcon from '@mui/icons-material/Info';

export default function RoboBoat2026() {
  const specs = [
    { label: "Platform", value: "BlueBoat Extended (UCRT)" },
    { label: "Compute", value: "NVIDIA Jetson Orin Nano" },
    { label: "Perception", value: "Dual OAK-D + Livox Mid-360 LiDAR" },
    { label: "Software", value: "ROS 2 Jazzy + ArduPilot" },
    { label: "Navigation", value: "GPS RTK + IMU Fusion" },
    { label: "Communication", value: "WiFi 802.11ah HaLow + 2.4GHz" },
  ];

  return (
    <>
      <Head>
        <title>RoboBoat 2026 | GT Marine Robotics Group</title>
        <meta 
          name="description" 
          content="Georgia Tech Marine Robotics Group's autonomous surface vehicle entry for RoboBoat 2026 competition." 
        />
      </Head>

      <div className="root-header-footer">
        <Header />

        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Hero Section */}
          <Box textAlign="center" mb={8}>
            <Typography 
              variant="h2"
              sx={{ color: 'primary.light', fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700, mb: 2, letterSpacing: '-0.02em' }}
            >
              RoboBoat 2026
            </Typography>
            <Typography 
              variant="h5"
              sx={{ color: 'rgba(255,255,255,0.85)', fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 400, mb: 1 }}
            >
              Autonomous Surface Vehicle Competition Entry
            </Typography>
            <Typography 
              variant="body1"
              sx={{ color: 'rgba(255,255,255,0.6)', fontSize: { xs: '0.95rem', md: '1rem' }, maxWidth: '700px', mx: 'auto' }}
            >
              Georgia Institute of Technology Marine Robotics Group
            </Typography>
          </Box>

          {/* Vehicle Section */}
          <Box
            component={Link}
            href="/projects/roboboat/2026/vehicle"
            aria-label="Go to full vehicle specifications page"
            sx={{
              display: 'block',
              textAlign: 'center',
              mb: 6,
              cursor: 'pointer',
              width: { xs: '90%', md: '70%' },
              mx: 'auto',
              borderRadius: 2,
              overflow: 'hidden',
              border: '2px solid rgba(255,255,255,0.1)',
              bgcolor: 'rgba(255,255,255,0.03)',
              transition: 'all 200ms ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme => `0 15px 35px ${theme.palette.primary.main}33`,
                borderColor: 'primary.main'
              }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'primary.light',
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' },
                transition: 'color 200ms, text-shadow 200ms',
                '&:hover': {
                  color: 'primary.main',
                  textShadow: '0 0 10px rgba(144, 202, 249, 0.6)'
                }
              }}
            >
              Vehicle
            </Typography>

            <Box sx={{ position: 'relative', width: '100%', height: { xs: '240px', md: '400px' } }}>
              <Image src="/bb.png" alt="RoboBoat 2026 Vehicle" fill style={{ objectFit: 'contain' }} />
            </Box>

            <Typography sx={{ mt: 1, color: 'primary.light', fontWeight: 700, fontSize: { xs: '1rem', md: '1.25rem' }, letterSpacing: '0.5px' }}>
              Click to View Vehicle Specs!
            </Typography>
          </Box>

          {/* Quick Links Section */}
          <Grid container spacing={3} mb={6}>
            {/* Technical Design Report */}
            <Grid item xs={12} md={4}>
              <Box
                component="a"
                href="/projects/roboboat/2026/technical-design-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'block',
                  p: 3,
                  height: '100%',
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
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <DescriptionIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    Technical Design Report
                  </Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                  Detailed technical documentation covering system design, competition strategy, and testing methodology.
                </Typography>
              </Box>
            </Grid>

            {/* Development Timeline */}
            <Grid item xs={12} md={4}>
              <Box
                component={Link}
                href="/projects/roboboat/2026/timeline/"
                sx={{
                  display: 'block',
                  p: 3,
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderTop: '3px solid',
                  borderTopColor: 'primary.main',
                  borderRadius: 2,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.08)',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <TimelineIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    Development Timeline
                  </Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                  Key milestones and development progress from team formation through competition readiness.
                </Typography>
              </Box>
            </Grid>

            {/* Competition Results */}
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderTop: '3px solid rgba(255,255,255,0.3)',
                  opacity: 0.6
                }}
                elevation={0}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <InfoIcon sx={{ fontSize: '2rem', color: 'rgba(255,255,255,0.5)' }} />
                  <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                    Competition Results
                  </Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
                  Results and performance analysis will be available after the competition in June 2026.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* About Section */}
          <Paper
            sx={{
              p: 4,
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 3
            }}
            elevation={0}
          >
            <Typography variant="h5" sx={{ color: 'primary.light', fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 600, mb: 3 }}>
              About the Project
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1rem', lineHeight: 1.8, mb: 2 }}>
              Our RoboBoat 2026 entry leverages the BlueBoat Extended platform developed for the Unmanned Collaborative 
              Research Testbed (UCRT) framework. This competition serves as a strategic development pathway toward the 
              RobotX Maritime Challenge, providing an ideal proving ground for perception and obstacle avoidance capabilities 
              that form the foundation for multi-domain collaboration between unmanned surface, aerial, and underwater vehicles.
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1rem', lineHeight: 1.8 }}>
              The platform integrates foundation model-based perception (Segment Anything Model), heterogeneous sensing 
              with dual cameras and LiDAR, and a frontseat/backseat architecture separating safety-critical control from 
              mission-specific autonomy. Team members trained through the Stinger Tug program bring hands-on experience 
              in mechanical design, electronics integration, and ROS 2 software development.
            </Typography>
          </Paper>
        </Container>

        <Footer />
      </div>
    </>
  );
}
