import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function Perception() {
  return (
    <DetailPage title="Perception and World Modeling" description="Edge neural network inference, JIPDA multi-sensor fusion, and dual obstacle/semantic world maps.">
      <Typography component="h2" variant="h5">Edge Visual Perception (YOLOv11)</Typography>
      <Typography>
        Both the USV and UAV carry <strong>Luxonis OAK-D</strong> stereo cameras with integrated Vision Processing Units (VPUs) capable of running neural inference on-device, paired with an <strong>Nvidia Jetson Orin Nano</strong> for processing larger deep-learning models. While keypoint heatmap regression was evaluated in simulation, <strong>YOLOv11</strong> demonstrated significantly lower center-point localization error and higher classification confidence under maritime lighting conditions, outputting bounding boxes converted to camera bearing rays via a calibrated pinhole camera model.
      </Typography>

      <Typography component="h2" variant="h5">Probabilistic Multi-Sensor Tracking (JIPDA)</Typography>
      <Typography>
        Per-frame detections from diverse sensor modalities are fused into persistent tracks using the <strong>Joint Integrated Probabilistic Data Association (JIPDA)</strong> algorithm. The tracker integrates three distinct measurement types, each with its own calibrated noise model:
      </Typography>
      <ul>
        <li><strong>Camera Bearing Rays:</strong> Vision detections that constrain object direction without immediate range.</li>
        <li><strong>LiDAR Cluster Centroids:</strong> Dense 3D pointcloud clusters providing accurate range and Cartesian coordinates with minimal classification data.</li>
        <li><strong>Position-Resolved Stereo/UAV Detections:</strong> Pre-fused 3D detections generated when camera fields of view overlap or when the UAV performs onboard visual-inertial triangulation.</li>
      </ul>

      <Typography component="h2" variant="h5">Decoupled Classification via Dirichlet Posteriors</Typography>
      <Typography>
        Spatial track state (position and velocity tracked via Kalman filtering) and existence probability are maintained independently from object classification. Class belief is represented as a <strong>Dirichlet posterior</strong> over candidate classes, updated proportionally by association likelihoods across consecutive frames. This prevents classification ambiguity from discarding valid physical obstacles during collision avoidance.
      </Typography>

      <Typography component="h2" variant="h5">Dual-Map Representation</Typography>
      <Typography>
        World modeling separates environmental awareness into two specialized map layers:
      </Typography>
      <ul>
        <li><strong>Obstacle Map:</strong> A local real-time occupancy grid continuously updated by spatial LiDAR returns and high-confidence tracks, consumed directly by the A* visibility path planner.</li>
        <li><strong>Semantic Map:</strong> A persistent global UTM database that maintains competition assets (gates, colored buoys, docking bays, obstacles) alongside their accumulated classification beliefs, serving high-level task logic.</li>
      </ul>
    </DetailPage>
  );
}
