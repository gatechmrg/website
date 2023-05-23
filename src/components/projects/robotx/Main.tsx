import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Competition from "./Competition";
import USV from "./USV";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <Competition />
            <USV />
        </Box>
    )
}