import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function SurfaceVehicle() {
  return (
    <DetailPage title="Surface Vehicle" image="/projects/robotx2026/usv-water.webp" imageAlt="RobotX surface vehicle equipped with sensors during on-water testing">
      <Typography component="h2" variant="h5">BlueBoat Platform</Typography>
      {/* Preliminary TDR, II.B.1, excerpts. */}
      <Typography>
        The base vehicle is itself an extension on Blue Robotics’ BlueBoat USV. The base vehicle significantly improves the compute, networking, power, and sensing subsystems.
      </Typography>
      <Typography>
        By relying on established hardware, the team’s efforts can be focused on extensions required for the RobotX competition.
      </Typography>
      {/* TODO: Add finalized vehicle specifications, water shooter details, and relevant testing results. */}
    </DetailPage>
  );
}
