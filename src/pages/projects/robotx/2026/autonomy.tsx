import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function Autonomy() {
  return (
    <DetailPage title="Autonomy" description="Composable behavior tree architecture, dynamic incident handling, and cross-domain task execution for RobotX 2026.">
      <Typography component="h2" variant="h5">BehaviorTree.CPP Architecture</Typography>
      <Typography>
        The autonomous decision-making system transitions from traditional finite-state machines (FSMs) and Python-based pytrees to <strong>BehaviorTree.CPP</strong>. Control flow is encoded directly in a modular tree structure of primitive behaviors ticked by parent nodes. This decouples subtrees from one another, reducing modification complexity to an O(1) insertion or deletion and keeping cyclomatic complexity at CC = 1 (compared to CC = 14 for an equivalent 6-state fault-tolerant FSM). Mission trees are authored in clean XML and visualized live during field operations using <strong>Groot2</strong>.
      </Typography>

      <Typography component="h2" variant="h5">Dynamic Re-Tasking and Incident Preemption</Typography>
      <Typography>
        Competition incident signals are monitored by a high-priority reactive control node that ticks on every cycle above the mission executor. When RoboCommand triggers an incident, active mission execution immediately halts. Once cleared, the mission resumes. To ensure seamless resumption without repeating completed maneuvers, every task subtree enforces a strict design invariant: it must verify its own completion progress against current sensor and state data before executing actions.
      </Typography>

      <Typography component="h2" variant="h5">Multi-Vehicle Cross-Domain Authority</Typography>
      <Typography>
        Mission-management authority resides primarily on the USV, which orchestrates overall run strategy and dispatches aerial reconnaissance sorties to the UAV. Both vehicles share a common UTM reference frame, exchanging pre-fused target detections and state telemetry over a bandwidth-optimized ROS 2 and Zenoh wireless bridge.
      </Typography>
    </DetailPage>
  );
}
