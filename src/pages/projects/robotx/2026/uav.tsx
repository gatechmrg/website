import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function AerialVehicle() {
  return (
    <DetailPage title="Aerial Vehicle" image="/projects/robotx2026/uav.webp" imageAlt="Modified Holybro X650 aerial vehicle and its onboard electronics">
      <Typography component="h2" variant="h5">Modified Holybro X650</Typography>
      {/* Preliminary TDR, II.C.1, excerpts. */}
      <Typography>
        The aerial vehicle serves as the aerial extension of the surface vehicle platform, complementing the surface vehicle with an elevated sensing perspective and aerial payload delivery capability suited for the RobotX competition.
      </Typography>
      <Typography>
        The onboard electronics mirrors the USV architecture wherever practical to maximize hardware and software reuse across the two platforms.
      </Typography>
      {/* TODO: Add finalized payload delivery details and flight testing results. */}
    </DetailPage>
  );
}
