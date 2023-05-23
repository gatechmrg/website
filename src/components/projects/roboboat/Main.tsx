import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Competition from "./Competition";
import USV from "./USV";
import Mechanical from "./Mechanical";
import Electrical from "./Electrical";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <Competition />
            <USV />
            <Mechanical />
            <Electrical />
        </Box>
    )
}