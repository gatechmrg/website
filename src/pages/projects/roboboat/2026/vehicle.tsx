import Head from "next/head";
import Header from "../../../../components/nav/Header";
import Footer from "../../../../components/nav/Footer";
import { Container, Box, Typography, Grid, Paper } from "@mui/material";
import Link from "next/link";

export default function RoboBoat2026Vehicle() {
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
        <title>RoboBoat 2026 — Vehicle Specifications | GT Marine Robotics Group</title>
        <meta name="description" content="RoboBoat 2026 vehicle specifications." />
      </Head>

      <div className="root-header-footer">
        <Header />

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h3">RoboBoat 2026 — Vehicle Specifications</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              Key hardware and software components used on the vehicle.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {specs.map((spec, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  sx={{
                    p: 2.5,
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    borderLeft: '3px solid',
                    borderLeftColor: 'primary.main',
                  }}
                  elevation={0}
                >
                  <Typography variant="caption" sx={{ color: 'primary.light', textTransform: 'uppercase', fontWeight: 600 }}>
                    {spec.label}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', mt: 0.5 }}>
                    {spec.value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box mt={6} textAlign="center">
            <Link href="/projects/roboboat/2026/" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'primary.main', cursor: 'pointer' }}>Back to RoboBoat 2026</Typography>
            </Link>
          </Box>
        </Container>

        <Footer />
      </div>
    </>
  );
}
