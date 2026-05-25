import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../../misc/line";

const roster = [
    'Olivia Taylor', 'Sean Fish', 'Mitchell Turton', 'John Beeson',
    'Matthew Woodward', 'Em Paul', 'Mahika Maini', 'Nathan Xie', 'Ariana Litchford', 
    'Jason Hsiao', 'Armando Rolon-Loperena', 'Thomas Devlin', 'Giana Claros', 'Allie Bulot',
    'Thalia Papageorgiou', 'James Pope', 'Sophia Ho', 'Sasanka Polisetti', 'Kieran Abbott', 
    'Peyton Lee', 'Liam Wansang', 'Nick Lai', 'Paul Kupronis', 'Nahreen Shamon Ayala'
];

export default function TeamRoster() {

    return (
        <>
            {/* ===== ROSTER SECTION ===== */}
            <Box mt={12}>
                <Container maxWidth="xl">
                    <Box textAlign="center">
                        <Typography variant="h2">
                            2026 Team Roster
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

            {/* ===== BLUE FOOTER SPACE ===== */}
            <Box
                sx={{
                    width: '100%',
                    height: 120,
                    bgcolor: '#003566'
                }}
            />
        </>
    );
}