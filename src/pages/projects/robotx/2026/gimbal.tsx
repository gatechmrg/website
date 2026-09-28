import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function SensorGimbal() {
  return (
    <DetailPage title="Stabilized Sensor Gimbal" image="/projects/robotx2026/gimbal.webp" imageAlt="Custom three-axis sensor gimbal carrying a LiDAR and camera">
      {/* Preliminary TDR, II.B.3, excerpts. */}
      <Typography>
        The gimbal subsystem consists of a 3-axis gimbal, gimbal control boards, Livox AVIA LiDAR, and OAK-1 camera.
      </Typography>
      <Typography>
        The gimbal structure is a custom design which prioritizes high stiffness, low mass, and the ability to position the payload center of mass.
      </Typography>
      {/* TODO: Add finalized stabilization and sensing test results. */}
    </DetailPage>
  );
}
