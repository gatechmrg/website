import { Box, Container, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

export default function Team() {
    
    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        The Team
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Box maxWidth={800} mx="auto">
                    <img src="/projects/microtransat/microtransat-team.webp"
                        width="100%" height="auto" style={{borderRadius: 16}} />
                </Box>
                <Box maxWidth="sm" mx="auto" textAlign="center" mt={3}>
                    <Typography variant="body1" fontSize="1.2rem">
                        We are looking for new members who are interested in dedicating time
                        to starting and working through a long-term project.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}