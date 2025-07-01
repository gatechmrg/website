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
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <img width="100%" src="/projects/roboboat/roboboat_comp.jpg"
                        style={{borderRadius: 16}} alt="MRG's robot attempting the watershooting
                        task at RoboBoat 2023." />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mx={3} mt={{xs: 3, md: 0}}>
                            <Box maxWidth={600} mx={{xs: 'auto', md: 'none'}}>
                                <Box>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                    The RoboBoat Competition challenges students to build and program
                                    autonomous surface vehicles. This competition takes place annually, and it
                                    was last held in March in Sarasota, Florida.
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                    The robot must complete a series of tasks autonomously, including obstacle field
                                    avoidance, docking, ball shooting, water shooting, and more!
                                    We performed well at RoboBoat 2023, and we&#39;re looking forward 
                                    to improving our vehicle for 2024.
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