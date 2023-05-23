import { Box, Container, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

export default function TeamRoster() {

    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        2024 Team Roster
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Box textAlign="center">
                    <Typography variant="h6" >
                        This could be you! Join Us!
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}