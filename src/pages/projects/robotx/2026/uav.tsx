import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function AerialVehicle() {
  return (
    <DetailPage
      title="Aerial Vehicle (UAV)"
      description="Modified Holybro X650 quadcopter featuring parallel hot-swap batteries, Ainstein radar altimetry, and passive magnetic payload release."
      image="/projects/robotx2026/uav.webp"
      imageAlt="Modified Holybro X650 aerial vehicle and its onboard electronics"
    >
      <Typography component="h2" variant="h5">Mechanical Airframe and Structural Payload Cradle</Typography>
      <Typography>
        The aerial platform utilizes a modified <strong>Holybro X650</strong> carbon-fiber quadcopter frame with high-stiffness arms, extended landing skids, and custom vibration-damping motor mounts. Beneath the airframe sits a 3D-printed cruciform payload cradle with port and starboard circular pockets sized to capture delivery tins by their outer diameter. Symmetrical positioning keeps lateral and longitudinal center-of-gravity shifts bounded during single- or dual-tin carrying, preserving trim authority in flight. Recessed grooves seat permanent neodymium magnets for passive, reliable retention without active latches or motorized mechanisms.
      </Typography>

      <Typography component="h2" variant="h5">Electrical Power Architecture and Hot-Swap Distribution</Typography>
      <Typography>
        The electrical system is energized by dual 6S 22.2&nbsp;V LiPo battery packs connected in parallel through an isolated diode power distribution board. This parallel configuration increases total flight endurance while allowing single battery replacements between sorties without cutting power to the companion computer or flight controller, preventing reboot cycles and expediting field testing iterations.
      </Typography>

      <Typography component="h2" variant="h5">Avionics, Flight Control, and Radar Altimetry</Typography>
      <Typography>
        Avionics and compute are tightly integrated into the central sealed electronics bay:
      </Typography>
      <ul>
        <li><strong>Flight Autopilot (Pixhawk + ArduCopter):</strong> Manages attitude control, trajectory tracking, motor PWM output, and automated RTL failsafes.</li>
        <li><strong>Edge AI Companion (Nvidia Jetson Orin Nano):</strong> Processes OAK-D stereo camera imagery, performs on-device object detection, and relays spatial coordinates over the Zenoh telemetry bridge.</li>
        <li><strong>Ainstein US-D1 Radar Altimeter:</strong> Bolted nadir on threaded standoffs beneath the belly plate, providing reliable altitude-above-water measurements where near-infrared LiDAR signals are absorbed or scattered away.</li>
      </ul>
    </DetailPage>
  );
}
