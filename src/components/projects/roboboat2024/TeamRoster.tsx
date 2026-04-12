import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

const roster = [
    'Shawn Coutinho', 'Joshua Diao', 'Sean Fish', 'Santiago Fiz',
    'Zachary Greenberg', 'Yiming Guo', 'Jorge Ortiz Solano', 'Ryan Otsuka',
    'Manuel Roglan', 'Aaron Wu'
]

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
                <Box>
                    <Grid container spacing={3}>
                        {roster.map(person => (
                            <Grid item key={person} lg={3} md={6} xs={12}>
                                <Box textAlign="center">
                                    <Typography variant="h6">
                                        {person}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))} 
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}