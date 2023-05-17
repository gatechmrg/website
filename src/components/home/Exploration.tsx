import { Box, Container, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";

export default function Exploration() {

    return (
        <Box mt={6}>
            <Box textAlign="center">
                <Typography variant="h2">
                    Student-led Exploration
                </Typography>
            </Box>
            <Box mt={2}>
                <StandardLine width={200} height={5} centered borderRadius={3} />
            </Box>
            <Container maxWidth="md">
                <Box textAlign="center" mt={3}>
                    <Typography variant="h5">
                        The furthest reaches of human exploration are pioneered by robots. 
                        At the Marine Robotics Group, students likewise partake in the development of 
                        autonomous maritime robots.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}