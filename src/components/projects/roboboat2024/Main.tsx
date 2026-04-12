import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Competition from "./Competition";
import USV from "../roboboat2024/USV";
import Mechanical from "../roboboat2024/Mechanical";
import Electrical from "./Electrical";
import Software from "../roboboat2024/Software";
import TeamRoster from "../roboboat2024/TeamRoster";

export default function Main() {

    return (
        <Box>
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