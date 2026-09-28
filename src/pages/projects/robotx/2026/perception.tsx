import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function Perception() {
  return (
    <DetailPage title="Perception and World Modeling">
      <Typography component="h2" variant="h5">Detection and Tracking</Typography>
      {/* Preliminary TDR, II.D.3, excerpts. */}
      <Typography>
        Our tracking system is our method for turning per-frame object detections from our sensors into full probabilistic estimates of persistent objects referred to as: tracks. Tracks have three values associated with them: existence probability score, class belief, and a spatial state (position and velocity).
      </Typography>
      <Typography>
        Our tracker currently consumes three distinct measurement types each with their own noise model: lidar cluster centroids, camera bearings, and cross camera stereo detections.
      </Typography>
      {/* TODO: Add finalized visual/spatial perception descriptions and a labeled tracking output example. */}
    </DetailPage>
  );
}
