import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function SurfaceVehicle() {
  return (
    <DetailPage
      title="Surface Vehicle (USV)"
      description="BlueBoat-derived autonomous catamaran featuring frontseat-backseat compute, obstacle-aware navigation, and 2-DOF water shooting."
      image="/projects/robotx2026/usv-water.webp"
      imageAlt="RobotX surface vehicle equipped with sensors during on-water testing"
    >
      <Typography component="h2" variant="h5">Hull Mechanical Architecture and Structural Mounts</Typography>
      <Typography>
        The primary competition vessel is derived from the <strong>Blue Robotics BlueBoat</strong> catamaran. Leveraging proven hydrodynamic hull lines, buoyancy characteristics, and modular aluminum crossbars, the mechanical integration adds custom CNC-machined structural crossbars, waterproof penetrator plates, motor bracket dampeners, and a payload deck that houses task hardware, including the 2-DOF water shooter and sensor gimbal.
      </Typography>

      <Typography component="h2" variant="h5">Electrical Power and Compute Architecture</Typography>
      <Typography>
        The electrical system is divided into isolated propulsion and compute power buses to protect sensitive avionics from motor back-EMF and current spikes:
      </Typography>
      <ul>
        <li><strong>Power Regulation & Cutoff:</strong> High-capacity Lithium-ion (Li-ion) batteries feed isolated DC-DC buck regulators providing dedicated 12&nbsp;V and 5&nbsp;V rails. Propulsion current passes through the PRESto electromechanical cutoff relay for physical emergency shutoff.</li>
        <li><strong>Frontseat Low-Level Controller (Raspberry Pi + Navigator Hat):</strong> Runs ArduRover firmware dedicated to PWM thruster signaling, GPS/IMU sensor reading, manual RF control decoding, and hardware safety monitoring.</li>
        <li><strong>Backseat High-Compute Node (Nvidia Jetson Orin Nano):</strong> Executes high-bandwidth ROS 2 workloads, including YOLOv11 neural inference, JIPDA multi-sensor fusion, dual-map occupancy grid generation, and BehaviorTree.CPP autonomy.</li>
      </ul>

      <Typography component="h2" variant="h5">Navigation and Obstacle-Avoidant Path Planning</Typography>
      <Typography>
        The USV navigation system operates in layers above the ArduRover autopilot. A visibility graph planner using an A* search algorithm computes collision-free transit paths around mapped obstacles and prohibited task boundaries. The vehicle follows waypoints using direct target setpoints or velocity control with line-of-sight carrot-chasing to manage path tracking under wind and surface currents.
      </Typography>

      <Typography component="h2" variant="h5">Two-DOF Water Shooter Subsystem</Typography>
      <Typography>
        For the dock-based target engagement task, the USV mounts a two-degree-of-freedom water shooting system sized to continuously strike a target 2.0&nbsp;m away at an elevation of 1.5&nbsp;m. The subsystem consists of:
      </Typography>
      <ul>
        <li><strong>Yaw Steering:</strong> A waterproof servo mounted to the forward crossbar that steers the nozzle ±90° relative to the vessel centerline, allowing precise targeting while the vessel maintains dock-avoidance positioning.</li>
        <li><strong>Submersible Pump & Hydrodynamic Shroud:</strong> A 12&nbsp;V IP68 water pump mounted low on the hull inside a custom shroud that reduces drag and filters aquatic debris.</li>
        <li><strong>Pressure Control & Laminar Nozzle:</strong> A brushed motor controller regulates pump RPM to adjust stream distance, discharging through a 3D-printed nozzle optimized for laminar flow to resist wind dispersion.</li>
      </ul>
    </DetailPage>
  );
}
