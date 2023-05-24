import { Box, Container, Grid, Typography } from "@mui/material";
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
                        <img width="100%" src="/projects/robosub/robosub-comp.png"
                        style={{borderRadius: 16}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mx={3} mt={{xs: 3, md: 0}}>
                            <Box maxWidth={600} mx={{xs: 'auto', md: 'none'}}>
                                <Box>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        The RoboSub competition challenges students to build and program
                                        autonomous underwater vehicles. This competition takes place anually,
                                        and it was last held at the University of Maryland.
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        The robot must complete a series of tasks autonomously, including 
                                        obstacle avoidance, pinger detection, breaching, and more! We last 
                                        participated in RoboSub in 2020, and we are looking forward to returning
                                        in 2024.
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