import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function Safety() {
  return (
    <DetailPage title="Safety and Failsafes" description="Multi-layer redundant safety architecture, PRESto hardware cutoff, isolated manual control, and automated flight failsafes.">
      <Typography component="h2" variant="h5">USV Three-Layer Redundant Safety Architecture</Typography>
      <Typography>
        The surface vehicle implements three independent layers of defense to guarantee that no single software bug, network drop, or hardware failure can leave the vessel powered or moving without operator knowledge:
      </Typography>
      <ul>
        <li><strong>Hardware Propulsion Cutoff (PRESto):</strong> The custom Peripheral, Radio, and E-Stop (PRESto) circuit board interfaces directly with a large physical onboard emergency stop button and an independent wireless RC kill channel. Activating either input immediately de-energizes a hardware relay, isolating all electrical power to the thrusters and their Electronic Speed Controllers (ESCs).</li>
        <li><strong>Segregated Manual Control Link:</strong> Teleoperation is hosted over a dedicated <strong>RFD900 / RC</strong> radio link that is physically segregated from the primary Wi-Fi/telemetry network. This guarantees that network congestion, video streaming overhead, or OCS computer crashes cannot lock the safety operator out of manual vessel control.</li>
        <li><strong>Software Failsafes & Heartbeats:</strong> ArduRover continuously monitors software heartbeats from the companion computer and OCS. Missing heartbeats or geofence boundary infractions instantly command zero thrust and revert vehicle state to safe standby.</li>
      </ul>

      <Typography component="h2" variant="h5">UAV Safety Layers and Flight Failsafes</Typography>
      <Typography>
        The aerial vehicle mirrors the multi-layer philosophy adapted to flight dynamics:
      </Typography>
      <ul>
        <li><strong>Dedicated Pilot Override:</strong> The remote safety pilot maintains immediate control authority over an independent RC link with an instant motor disarm / throttle cut switch.</li>
        <li><strong>Autonomous Return-to-Launch (RTL):</strong> ArduCopter firmware monitors the command telemetry link and onboard 6S battery voltage. Upon telemetry timeout or reaching critical voltage thresholds, the drone automatically aborts mission tasks and executes an autonomous RTL and landing.</li>
        <li><strong>Software Geofences:</strong> Strict lateral boundaries and maximum altitude ceilings are enforced at the flight controller level, preventing the UAV from straying into unauthorized airspace even during sensor degradation.</li>
      </ul>
    </DetailPage>
  );
}
