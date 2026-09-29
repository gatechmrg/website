import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function SensorGimbal() {
  return (
    <DetailPage
      title="Stabilized Sensor Gimbal"
      description="Active 3-axis sensor stabilization, BaseCam CAN MCU brushless control, and long-range LiDAR/vision targeting."
      image="/projects/robotx2026/gimbal.webp"
      imageAlt="Custom three-axis sensor gimbal carrying a LiDAR and camera"
    >
      <Typography component="h2" variant="h5">Overcoming Underactuated Vessel Dynamics</Typography>
      <Typography>
        On an underactuated surface vehicle, position and heading cannot be controlled independently. With fixed sensors, constrained navigation maneuvers inevitably constrain sensor pointing. Furthermore, small vessels experience significant roll and pitch disturbances even in mild sea states. Our custom 3-axis stabilized gimbal mounted on the starboard quarter decouples sensor orientation from vessel heading, ensuring continuous situational awareness regardless of wave action or hull trajectory.
      </Typography>

      <Typography component="h2" variant="h5">Static Balance and Brushless Control</Typography>
      <Typography>
        The gimbal frame is a custom high-stiffness, low-mass design engineered to position the payload center of mass directly at the axes of rotation. This static balance eliminates gravitational moment offsets, drastically reducing motor holding current and rejecting mechanical resonance. Actuation is driven by brushless motors managed by a <strong>BaseCam CAN MCU</strong> gimbal controller paired with separated motor drivers, communicating with autonomy via the standard <strong>MAVLink Gimbal Protocol v2</strong> serial interface.
      </Typography>

      <Typography component="h2" variant="h5">Long-Range Sensor Selection</Typography>
      <Typography>
        While the hull carries fixed bow cameras and a central Livox Mid360 LiDAR, the Mid360 is practically limited to approximately 10&nbsp;m in open water. The gimbal houses a <strong>Livox Avia LiDAR</strong>, providing a concentrated 70° field of view, high 0.5° angular resolution, and effective range up to 450&nbsp;m, co-aligned with a <strong>Luxonis OAK-1</strong> high-resolution camera.
      </Typography>

      <Typography component="h2" variant="h5">Operational CONOPS Modes</Typography>
      <Typography>
        The gimbal autonomy pipeline operates across three distinct scanning behaviors:
      </Typography>
      <ul>
        <li><strong>Mode A (Relative Angle Scanning):</strong> Sweeps repetitive sector angles relative to the vessel heading to maintain forward and peripheral lookout during open transit.</li>
        <li><strong>Mode B (Region of Interest / ROI Scanning):</strong> Holds pointing fixed on specific geographic coordinates, allowing the USV to maneuver freely without losing sight of a target zone.</li>
        <li><strong>Mode C (Object of Interest Scanning):</strong> Actively locks onto and tracks an identified target (such as an entrance buoy, obstacle, or dock bay) using real-time closed-loop perception feedback.</li>
      </ul>
    </DetailPage>
  );
}
