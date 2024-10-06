import { Box, Container, Typography } from "@mui/material";
import { GreenPrimaryButton } from "../../misc/buttons";
import { useRouter } from "next/router";
import { StandardLine } from "../../misc/line";


export default function TeamRoster() {

    const router = useRouter(); // for programmatic navigation

    const handleRedirect = () => {
        router.push('/team-roster'); // navigate to the team roster page
    };

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
                <Box mt={4} display="flex" justifyContent="center">
                        <GreenPrimaryButton variant="contained" color="primary" onClick={handleRedirect}>
                            View Full Roster Here
                        </GreenPrimaryButton>
                    </Box>
            </Container>
        </Box>
    )
}