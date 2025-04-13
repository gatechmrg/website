import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Exploration from "./Exploration";
import Projects from "./Projects";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <Exploration />
            <Projects />
        </Box>
    )
}