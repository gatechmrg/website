import { Paper, Typography } from '@mui/material';

export default function About2026() {
  return (
    <Paper sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 3 }} elevation={0}>
      <Typography variant="h5" sx={{ color: 'primary.light', fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 600, mb: 3 }}>About the Project</Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.8, mb: 2 }}>
        Our RoboBoat 2026 entry leverages the BlueBoat Extended platform developed for the Unmanned Collaborative Research Testbed (UCRT) framework. This competition serves as a strategic development pathway toward the RobotX Maritime Challenge, providing an ideal proving ground for perception and obstacle avoidance capabilities that form the foundation for multi-domain collaboration between unmanned surface, aerial, and underwater vehicles.
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.8 }}>
        The platform integrates foundation model-based perception (Segment Anything Model), heterogeneous sensing with dual cameras and LiDAR, and a frontseat/backseat architecture separating safety-critical control from mission-specific autonomy. Team members trained through the Stinger Tug program bring hands-on experience in mechanical design, electronics integration, and ROS 2 software development.
      </Typography>
    </Paper>
  );
}
