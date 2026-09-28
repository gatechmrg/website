import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function Safety() {
  return (
    <DetailPage title="Safety">
      <Typography component="h2" variant="h5">Independent Safety Layers</Typography>
      {/* Preliminary TDR, II.B.2, excerpts. */}
      <Typography>
        The safety subsystem is designed as three independent layers, a hardware kill circuit, a dedicated manual control link, and a software halt, so that no single failure, hardware or software, can leave the vehicle able to move without the operator’s knowledge.
      </Typography>
      <Typography>
        An onboard e-stop button and a kill channel on the RC link each independently open a relay that removes power from the thrusters and their ESCs.
      </Typography>
      {/* TODO: Add finalized UAV failsafes and documented safety validation results. */}
    </DetailPage>
  );
}
