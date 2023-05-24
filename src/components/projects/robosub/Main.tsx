import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Competition from "./Competition";
import AUV from "./AUV";
import Mechanical from "./Mechanical";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <Competition />
            <AUV />
            <Mechanical />
        </Box>
    )
}