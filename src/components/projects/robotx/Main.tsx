import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Competition from "./Competition";
import USV from "./USV";
import UAV from "./UAV";
import Mechanical from "./Mechanical";
import Electrical from "./Electrical";
import Software from "./Software";
import TeamRoster from "./TeamRoster";
import WeeklyReports from "./WeeklyReports";
import Notion from "./Notion";

export default function Main() {

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <FirstBanner />
            <Notion />
            <Competition />
            <USV />
            <UAV />
            <Mechanical />
            <Electrical />
            <Software />
            <TeamRoster />
            <WeeklyReports />
        </Box>
    )
}