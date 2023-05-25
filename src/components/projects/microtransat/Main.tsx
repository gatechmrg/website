import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Challenge from "./Challenge";
import Vessel from "./Vessel";
import Team from "./Team";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <Challenge />
            <Vessel />
            <Team />
        </Box>
    )
}