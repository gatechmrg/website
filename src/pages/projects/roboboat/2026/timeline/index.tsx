import Head from "next/head";
import Header from "../../../../../components/nav/Header";
import Footer from "../../../../../components/nav/Footer";
import { Box, Container, Typography, Button, Grid, Paper, Divider } from "@mui/material";
import Link from "next/link";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Tooltip } from "@mui/material"; 

export default function RoboBoat2026Timeline() {
  const sampleTimeline = [
    {
      date: "2025-08-01",
      title: "Team Recruitment and Onboarding",
      details:
        "Conducted fall recruiting to expand the RoboBoat team, onboard new members, and establish project roles and development expectations."
    },
    {
      date: "2025-10-31",
      title: "Platform Realignment and Program Launch",
      details:
        "Shifted primary development from the WAM-V platform to BlueBoat to maintain architectural alignment with RobotX. This decision enabled participation in RoboBoat despite the constrained schedule leading into the February competition."
    },
    {
      date: "2025-11-15",
      title: "Stinger Tug Training Completion",
      details:
        "Completed the Stinger Tug training program with on-water testing of member-built platforms, validating system assembly, controls, and operational readiness."
    },
    {
      date: "2026-02-01",
      title: "Competition Software Development",
      details:
        "Focused development on custom autonomy, perception, and mission-planning software packages tailored to RoboBoat competition tasks."
    }
  ];

  return (
    <>
      <Head>
        <title>RoboBoat 2026 Timeline | GT Marine Robotics Group</title>
        <meta
          name="description"
          content="Development timeline for RoboBoat 2026."
        />
      </Head>
      <div className="root-header-footer">
        <Header />
        <Container maxWidth="md" sx={{ py: 8 }}>
          {/* Header Section */}
          
        <Box textAlign="center" mb={6}>
        <Tooltip title="Click to return to RoboBoat 2026" arrow placement="bottom">
            <Link href="/projects/roboboat/2026" passHref>
            <Typography 
                component="a"
                variant="h2"
                sx={{ 
                color: 'primary.light',
                fontSize: { xs: '2rem', md: '2.75rem' }, 
                fontWeight: 700,
                mb: 2,
                letterSpacing: '-0.02em',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'color 0.2s ease, text-shadow 0.2s ease',
                '&:hover': {
                    color: 'primary.main',
                    textShadow: '0 0 12px rgba(144, 202, 249, 0.6)'
                },
                '&:focus-visible': {
                    outline: '2px solid',
                    outlineColor: 'primary.main',
                    outlineOffset: '4px'
                }
                }}
            >
                RoboBoat 2026 - Development Timeline
            </Typography>
            </Link>
        </Tooltip>

        <Typography 
            variant="h5" 
            sx={{ 
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 400,
            maxWidth: '600px',
            mx: 'auto'
            }}
        >
            Development Timeline & Key Milestones
        </Typography>
        </Box>


          {/* Timeline */}
          <Box sx={{ position: 'relative', pl: { xs: 3, md: 4 } }}>
            {/* Vertical Line */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                bgcolor: 'primary.main',
                opacity: 0.3
              }}
            />

            <Grid container spacing={4} direction="column">
              {sampleTimeline.map((item, index) => (
                <Grid item key={item.date}>
                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '-6px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      border: '3px solid',
                      borderColor: 'background.default',
                      zIndex: 1
                    }}
                  />

                  <Paper 
                    sx={{ 
                      p: 3,
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      borderLeft: '3px solid',
                      borderLeftColor: 'primary.main',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateX(4px)'
                      }
                    }} 
                    elevation={0}
                  >
                    {/* Date Badge */}
                    <Box 
                      sx={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 0.75,
                        mb: 2,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      <CalendarMonthIcon sx={{ fontSize: '1rem', color: 'primary.light' }} />
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </Typography>
                    </Box>

                    {/* Title */}
                    <Link 
                      href={`/projects/roboboat/2026/blog#${
                        item.title
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, '-')
                          .replace(/(^-|-$)/g, '')
                      }`} 
                      passHref
                    >
                      <Typography 
                        component="a"
                        variant="h6" 
                        sx={{ 
                          color: 'primary.main',
                          fontSize: { xs: '1.15rem', md: '1.3rem' },
                          fontWeight: 600,
                          mb: 1.5,
                          lineHeight: 1.3,
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          transition: 'color 0.2s',
                          '&:hover': {
                            color: 'primary.light',
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Link>

                    {/* Details */}
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.75)',
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        lineHeight: 1.7,
                        letterSpacing: '0.01em'
                      }}
                    >
                      {item.details}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          
        {/* Navigation Buttons */}
        <Box textAlign="center" mt={8} mb={4}>
          <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
            <Link href="/projects/roboboat/2026/blog" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  borderRadius: 2,
                  letterSpacing: '0.5px',
                  textTransform: 'none',
                  color: 'white',
                }}
              >
                RoboBoat 2026 Blog Page
              </Button>
            </Link>
            <Link href="/projects/roboboat/2026" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  borderRadius: 2,
                  letterSpacing: '0.5px',
                  textTransform: 'none',
                  color: 'white',
                }}
              >
                Back to RoboBoat 2026
              </Button>
            </Link>
          </Box>
        </Box>
        </Container>
        <Footer />
      </div>
    </>
  );
}