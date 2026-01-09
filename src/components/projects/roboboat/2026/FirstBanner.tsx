import { Box, Typography } from "@mui/material";

export default function FirstBanner2026() {
  return (
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
  );
}
