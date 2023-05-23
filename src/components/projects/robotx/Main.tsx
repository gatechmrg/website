import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Competition from "./Competition";
import USV from "./USV";
import UAV from "./UAV";
import Mechanical from "./Mechanical";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <Competition />
            <USV />
            <UAV />
            <Mechanical />
        </Box>
    )
}