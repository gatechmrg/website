import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import SectionNav from "./SectionNav";
import VehicleOverview from "./VehicleOverview";
import SystemsOverview from "./SystemsOverview";
import TestingSection from "./TestingSection";
import TeamResources from "./TeamResources";
import TideDivider from "./TideDivider";
import { robotxColors } from "./colors";

export default function Main2026() {
  return (
    <Box component="main" id="robotx-content" sx={{ minWidth: 0 }}>
      <FirstBanner />
      <Box sx={{ display: 'flow-root', bgcolor: robotxColors.deep }}>
        <SectionNav topSentinelId="robotx-title" />
        <VehicleOverview />
        <TideDivider from={robotxColors.deep} to={robotxColors.navy} phase={1.7} />
        <SystemsOverview />
        <TideDivider from={robotxColors.navy} to={robotxColors.deep} variant="counterSwell" phase={8.9} />
        <TestingSection />
        <TideDivider from={robotxColors.deep} to={robotxColors.navy} phase={6.1} />
        <TeamResources />
      </Box>
    </Box>
  );
}
