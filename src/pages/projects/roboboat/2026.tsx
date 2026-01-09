import Head from "next/head";
import Header from "../../../components/nav/Header";
import Footer from "../../../components/nav/Footer";
import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import Link from "next/link";
import { GreenPrimaryButton } from "../../../components/misc/buttons";
import DescriptionIcon from '@mui/icons-material/Description';
import TimelineIcon from '@mui/icons-material/Timeline';
import BuildIcon from '@mui/icons-material/Build';
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
          {/* Hero Section with Vehicle Image Placeholder */}
          <Box textAlign="center" mb={8}>
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'primary.light',
                fontSize: { xs: '2.5rem', md: '3.5rem' }, 
                fontWeight: 700,
                mb: 2,
                letterSpacing: '-0.02em'
              }}
            >
              RoboBoat 2026
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 400,
                mb: 1
              }}
            >
              Autonomous Surface Vehicle Competition Entry
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: { xs: '0.95rem', md: '1rem' },
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              Georgia Institute of Technology Marine Robotics Group
            </Typography>
          </Box>

          {/* Vehicle Image Placeholder */}
          <Box 
            sx={{ 
              mb: 6,
              borderRadius: 3,
              overflow: 'hidden',
              border: '2px solid',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              position: 'relative',
              height: { xs: '300px', md: '450px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Replace this Box with <img> when you have the actual image */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
              }}
            >
              <BuildIcon sx={{ fontSize: '4rem', color: 'rgba(255, 255, 255, 0.2)' }} />
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '1.1rem' }}>
                Vehicle Image Coming Soon
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.875rem' }}>
                BlueBoat Extended Platform
              </Typography>
            </Box>
            {/* When you have an image, replace the above with:
            <img 
              src="/path-to-your-image.jpg" 
              alt="RoboBoat 2026 Vehicle"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            */}
          </Box>

          {/* Quick Links Section */}
          <Grid container spacing={3} mb={6}>
            <Grid item xs={12} md={4}>
              <Link 
                href="/projects/roboboat/2026/technical-design-report.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none' }}
              >
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderTop: '3px solid',
                    borderTopColor: 'primary.main',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-4px)',
                    }
                  }}
                  elevation={0}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <DescriptionIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Technical Design Report
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                    Detailed technical documentation covering system design, competition strategy, and testing methodology.
                  </Typography>
                </Paper>
              </Link>
            </Grid>

            <Grid item xs={12} md={4}>
              <Link 
                href="/projects/roboboat/2026/timeline/" 
                style={{ textDecoration: 'none' }}
              >
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderTop: '3px solid',
                    borderTopColor: 'primary.main',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-4px)',
                    }
                  }}
                  elevation={0}
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
                </Paper>
              </Link>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  borderTop: '3px solid',
                  borderTopColor: 'rgba(255, 255, 255, 0.3)',
                  opacity: 0.6
                }}
                elevation={0}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <InfoIcon sx={{ fontSize: '2rem', color: 'rgba(255, 255, 255, 0.5)' }} />
                  <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                    Competition Results
                  </Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.95rem' }}>
                  Results and performance analysis will be available after the competition in June 2026.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Vehicle Specifications */}
          <Box mb={6}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'primary.light',
                fontSize: { xs: '1.75rem', md: '2rem' }, 
                fontWeight: 600,
                mb: 4,
                textAlign: 'center'
              }}
            >
              Vehicle Specifications
            </Typography>
            <Grid container spacing={2}>
              {specs.map((spec, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    sx={{
                      p: 2.5,
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      borderLeft: '3px solid',
                      borderLeftColor: 'primary.main',
                    }}
                    elevation={0}
                  >
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: 'primary.light',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {spec.label}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 500,
                        mt: 0.5
                      }}
                    >
                      {spec.value}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* About Section */}
          <Paper
            sx={{
              p: 4,
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: 3
            }}
            elevation={0}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'primary.light',
                fontSize: { xs: '1.5rem', md: '1.75rem' }, 
                fontWeight: 600,
                mb: 3
              }}
            >
              About the Project
            </Typography>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '1rem',
                lineHeight: 1.8,
                mb: 2
              }}
            >
              Our RoboBoat 2026 entry leverages the BlueBoat Extended platform developed for the Unmanned Collaborative 
              Research Testbed (UCRT) framework. This competition serves as a strategic development pathway toward the 
              RobotX Maritime Challenge, providing an ideal proving ground for perception and obstacle avoidance capabilities 
              that form the foundation for multi-domain collaboration between unmanned surface, aerial, and underwater vehicles.
            </Typography>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '1rem',
                lineHeight: 1.8
              }}
            >
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