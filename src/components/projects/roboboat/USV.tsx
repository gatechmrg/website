import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

export default function USV() {

    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        Crystal Clear
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <img width="100%" src="/projects/roboboat/crystal_clear2.jpg"
                        style={{borderRadius: 16}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mx={3} mt={{xs: 3, md: 0}}>
                            <Box maxWidth={600} mx={{xs: 'auto', md: 'none'}}>
                                <Box>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        Crystal Clear is our autonomous surface vehicle built for Roboboat 2023! 
                                        The name was inspired by the extensive use of plexiglass throughout the 
                                        boat. We typically test the boat at Sweetwater Creek State Park as often 
                                        as once a week.
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        We plan on improving the boat for RoboBoat 2024, with projects including
                                        hydrophone development, water shooter development, ball shooter refinement,
                                        projectile aiming software, SLAM development, and electrical system upgrades.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}