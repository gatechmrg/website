import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Competition from "./Competition";
import USV from "./USV";
import Mechanical from "./Mechanical";
import Electrical from "./Electrical";
import Software from "./Software";
import TeamRoster from "./TeamRoster";

export default function Main() {

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <FirstBanner />
            <Competition />
            <USV />
            <Mechanical />
            <Electrical />
            <Software />
            <TeamRoster />
        </Box>
    )
}