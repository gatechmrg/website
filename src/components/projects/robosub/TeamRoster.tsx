import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

const roster = [
    'Shawn Coutinho', 'Sean Fish', 'Mitchell Turton', 'John Beeson',
    'Zachary Greenberg', 'Agatta Betancourth Pollett', 'Erin Beazley', 'Matthew Woodward',
    'Nicholas Lai', 'Aaron Wu'
]

export default function TeamRoster() {

    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        2025 Team Roster
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Box textAlign="center">
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