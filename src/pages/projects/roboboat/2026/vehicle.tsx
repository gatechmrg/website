import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../../../../components/nav/Header";
import Footer from "../../../../components/nav/Footer";
import { Container, Box, Typography, Grid, Paper, List, ListItem, ListItemButton, ListItemText, Tooltip } from "@mui/material";
import Link from "next/link";

const ModelViewer = dynamic(() => import('../../../../components/projects/roboboat/2026/ModelViewer'), { ssr: false });

export default function RoboBoat2026Vehicle() {
  const modelViewerRef = useRef<any>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [cameraOrbit, setCameraOrbit] = useState("45deg 75deg 3m");
  const [cameraTarget, setCameraTarget] = useState("0m 0.15m 0m");

  // Component data with camera positions for 3D model
  const components = [
    { 
      id: "compute",
      label: "Compute", 
      value: "NVIDIA Jetson Orin Nano",
      description: "16GB RAM, 8-core ARM CPU, 100 TOPS AI performance",
      cameraOrbit: "45deg 75deg 2.5m",
      cameraTarget: "0m 0.2m 0m"
    },
    { 
      id: "perception-camera",
      label: "Stereo Cameras", 
      value: "Dual OAK-D",
      description: "RGB-D stereo vision for object detection and depth estimation",
      cameraOrbit: "135deg 90deg 2m",
      cameraTarget: "0m 0.2m 0.3m"
    },
    { 
      id: "perception-lidar",
      label: "LiDAR", 
      value: "Livox Mid-360",
      description: "360° solid-state LiDAR for obstacle detection and mapping",
      cameraOrbit: "90deg 75deg 1m",
      cameraTarget: "0m 0m 0m"
    },
    { 
      id: "navigation",
      label: "Navigation", 
      value: "GPS RTK + IMU Fusion",
      description: "Centimeter-level positioning with inertial measurement",
      cameraOrbit: "180deg 85deg 2.2m",
      cameraTarget: "-1.0m -1m 0m"
    },
    { 
      id: "propulsion",
      label: "Propulsion", 
      value: "T200 Thrusters",
      description: "Differential thrust system for omnidirectional control",
      cameraOrbit: "270deg 90deg 1m",
      cameraTarget: "0m 0m 0m"
    },
    { 
      id: "communication",
      label: "Communication", 
      value: "WiFi 802.11ah HaLow + 2.4GHz",
      description: "Long-range mesh networking for command and control",
      cameraOrbit: "270deg 80deg 2.5m",
      cameraTarget: "0m 0.3m 0m"
    },
    { 
      id: "software",
      label: "Software Stack", 
      value: "ROS 2 Jazzy + ArduPilot",
      description: "Modular autonomy architecture with frontseat/backseat control",
      cameraOrbit: "45deg 75deg 3m",
      cameraTarget: "0m 0.15m 0m"
    },
    { 
      id: "platform",
      label: "Platform", 
      value: "BlueBoat Extended (UCRT)",
      description: "Reconfigurable catamaran with modular electronics bays",
      cameraOrbit: "20deg 70deg 3.5m",
      cameraTarget: "0m 0m 0m"
    },
  ];

  useEffect(() => {
    // This ensures the ref is available after mount
    if (modelViewerRef.current) {
      modelViewerRef.current.cameraOrbit = cameraOrbit;
      modelViewerRef.current.cameraTarget = cameraTarget;
    }
  }, [cameraOrbit, cameraTarget]);

  const handleComponentHover = (component: typeof components[0]) => {
    setSelectedComponent(component.id);
    setCameraOrbit(component.cameraOrbit);
    setCameraTarget(component.cameraTarget);
  };

  const handleComponentLeave = () => {
    setSelectedComponent(null);
    setCameraOrbit("45deg 75deg 3m");
    setCameraTarget("0m 0.15m 0m");
  };

  return (
    <>
      <Head>
        <title>RoboBoat 2026 — Vehicle Specifications | GT Marine Robotics Group</title>
        <meta name="description" content="Interactive 3D view of RoboBoat 2026 vehicle with detailed component specifications." />
      </Head>
      <div className="root-header-footer">
        <Header />
        <Container maxWidth="xl" sx={{ py: 6 }}>
          {/* Title */}
          <Box textAlign="center" mb={5}>
            <Tooltip title="Click to return to RoboBoat 2026" arrow placement="bottom">
              <Link href="/projects/roboboat/2026" passHref>
                <Typography
                  component="a"
                  variant="h3"
                  sx={{
                    color: 'primary.light',
                    cursor: 'pointer',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
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
                  Vehicle Specifications
                </Typography>
              </Link>
            </Tooltip>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                mt: 1,
                fontSize: { xs: '0.95rem', md: '1.05rem' }
              }}
            >
              Hover over components to explore the vehicle in 3D
            </Typography>
          </Box>

          {/* Main Content Grid */}
          <Grid container spacing={4}>
            {/* 3D Model Column */}
            <Grid item xs={12} lg={6}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  height: '100%',
                  minHeight: { xs: '300px', md: '450px' },
                  maxHeight: '550px',
                  position: 'sticky',
                  top: '100px'
                }}
                elevation={0}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'primary.light',
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  BlueBoat Extended Platform
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    height: 'calc(100% - 80px)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    bgcolor: 'rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <ModelViewer
                    ref={modelViewerRef}
                    src="/models/roboboat.glb"
                    alt="RoboBoat 2026 Vehicle"
                    camera-controls
                    camera-orbit={cameraOrbit}
                    camera-target={cameraTarget}
                    interaction-prompt="none"
                    interpolation-decay="200"
                    min-camera-orbit="auto auto 2m"
                    max-camera-orbit="auto auto 5m"
                    field-of-view="30deg"
                    auto-rotate={false}
                    style={{ width: '100%', height: '100%' }}
                  />
                </Box>
                <Typography
                  sx={{
                    mt: 2,
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '0.875rem',
                    textAlign: 'center'
                  }}
                >
                  Drag to rotate · Scroll to zoom · Hover components to focus
                </Typography>
              </Paper>
            </Grid>

            {/* Components List Column */}
            <Grid item xs={12} lg={6}>
              <Paper
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  overflow: 'hidden'
                }}
                elevation={0}
              >
                <Box sx={{ p: 3, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'primary.light',
                      fontWeight: 600,
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    System Components
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.9rem',
                      mt: 0.5
                    }}
                  >
                    {components.length} subsystems
                  </Typography>
                </Box>
                <List sx={{ p: 0 }}>
                  {components.map((component, index) => (
                    <ListItem 
                      key={component.id} 
                      disablePadding
                      sx={{
                        borderBottom: index < components.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                      }}
                    >
                      <ListItemButton
                        onMouseEnter={() => handleComponentHover(component)}
                        onMouseLeave={handleComponentLeave}
                        sx={{
                          py: 2.5,
                          px: 3,
                          transition: 'all 0.2s ease',
                          bgcolor: selectedComponent === component.id 
                            ? 'rgba(144, 202, 249, 0.08)' 
                            : 'transparent',
                          borderLeft: '3px solid',
                          borderLeftColor: selectedComponent === component.id 
                            ? 'primary.main' 
                            : 'transparent',
                          '&:hover': {
                            bgcolor: 'rgba(144, 202, 249, 0.05)',
                            borderLeftColor: 'primary.main',
                          }
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                color: 'white',
                                fontWeight: selectedComponent === component.id ? 600 : 500,
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                mb: 0.5,
                                transition: 'all 0.2s ease'
                              }}
                            >
                              {component.label}
                            </Typography>
                          }
                          secondary={
                            <Box>
                              <Typography
                                sx={{
                                  color: 'primary.light',
                                  fontSize: '0.9rem',
                                  fontWeight: 500,
                                  mb: 0.5
                                }}
                              >
                                {component.value}
                              </Typography>
                              <Typography
                                sx={{
                                  color: 'rgba(255, 255, 255, 0.6)',
                                  fontSize: '0.85rem',
                                  lineHeight: 1.5
                                }}
                              >
                                {component.description}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Paper>

              {/* Additional Info */}
              <Paper
                sx={{
                  mt: 3,
                  p: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 3
                }}
                elevation={0}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'primary.light',
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1.1rem'
                  }}
                >
                  Platform Features
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {[
                    "Modular electronics bays with standardized bulkhead connectors",
                    "Reversible competition modifications for research reuse",
                    "Foundation model-based perception with SAM integration",
                    "Frontseat/backseat architecture for safety and flexibility",
                    "Fleet-tested safety systems validated across 13+ deployments"
                  ].map((feature, index) => (
                    <Typography
                      component="li"
                      key={index}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.75)',
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                        mb: 1
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    </>
  );
}