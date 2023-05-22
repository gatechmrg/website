import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

export default function Competition() {

    return (
        <Box mt={6}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        The Competition
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <img width="100%" src="/projects/roboboat/roboboat-watershooter.png"
                        style={{borderRadius: 16}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mx={3} maxWidth="md">
                            <Typography variant="h5" textAlign={{xs: 'center', md: 'left'}}
                                lineHeight={1.4}>
                            The RoboBoat Competition challenges students to build and program
                            autonomous surface vehicles. 
                            The robot must complete a series of tasks autonomously, including obstacle field
                            avoidance, docking, ball shooting, water shooting, and more!
                            We performed well at RoboBoat 2023, and we&#39;re looking forward 
                            to improving our vehicle for 2024.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}