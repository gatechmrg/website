import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Competition from "./Competition";
import AUV from "./AUV";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <Competition />
            <AUV />
        </Box>
    )
}