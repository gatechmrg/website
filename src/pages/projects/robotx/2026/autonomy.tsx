import { Typography } from '@mui/material';
import DetailPage from '../../../../components/projects/robotx2026/DetailPage';

export default function Autonomy() {
  return (
    <DetailPage title="Autonomy">
      <Typography component="h2" variant="h5">Behavior Tree Architecture</Typography>
      {/* Preliminary TDR, II.F.1, excerpts. */}
      <Typography>
        Behavior trees encode control flow in the tree structure, where each subtree is ticked by its parent and then returns, similar to a function call. This independence in control significantly reduces the cost of reconfiguring the mission.
      </Typography>
      <Typography>
        For the mission to resume at the correct interval, each task subtree within the mission must check its own completion progress before acting, which we enforce as a design rule for all task subtrees.
      </Typography>
      {/* TODO: Add the finalized mission tree and a documented incident interruption/resumption example. */}
    </DetailPage>
  );
}
