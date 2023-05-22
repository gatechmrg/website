import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import About from "./About";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <About />
            {/* <Box mt={-20} /> */}
        </Box>
    )
}