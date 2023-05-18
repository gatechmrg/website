import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { StandardLine } from "../misc/line";
import { useTheme } from '@mui/material/styles'

export default function Exploration() {

    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box mt={6}>
            <Box textAlign="center">
                <Typography variant="h2">
                    Student-led Exploration
                </Typography>
            </Box>
            <Box mt={2}>
                <StandardLine width={200} height={5} centered borderRadius={3} />
            </Box>
            <Container maxWidth="md">
                <Box textAlign="center" mt={3} mb={12}>
                    <Typography variant="h5">
                        The furthest reaches of human exploration are pioneered by robots. 
                        At the Marine Robotics Group at Georgia Tech, 
                        students likewise partake in the development of 
                        autonomous maritime robots.
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Box mb={12}>
                    <Grid container>
                        <Grid item md={6} order={1}>
                            <Box>
                                <img src="/home/training.jpeg" width="100%"
                                    style={{borderRadius: 16}} />
                            </Box>
                        </Grid>
                        <Grid item md={6} order={small ? 0 : 2}>
                            <Box mx={3} mb={{xs: 3, md: 0}}>
                                <Box textAlign={{xs: 'center', md: 'left'}}>
                                    <Typography variant="h3" fontWeight={300}>
                                        Learning
                                    </Typography>
                                </Box>
                                <Box>
                                    <StandardLine width={190} height={5} borderRadius={3}
                                        centered={small} />
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="h5" textAlign={{xs: 'center', md: 'left'}}>
                                        MRG provides an opportunity to learn new skills and work with tools 
                                        for robotics, regardless of incoming skill level. We run a training
                                        program during the beginning of each semester.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mb={12}>
                    <Grid container>
                        <Grid item md={6}>
                            <Box mx={3} mb={{xs: 3, md: 0}}>
                                <Box textAlign={{xs: 'center', md: 'left'}}>
                                    <Typography variant="h3" fontWeight={300}>
                                        Building
                                    </Typography>
                                </Box>
                                <Box>
                                    <StandardLine width={170} height={5} borderRadius={3}
                                        centered={small} />
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="h5" textAlign={{xs: 'center', md: 'left'}}>
                                        MRG has the goal of iterating on and creating new  
                                        Autonomous Underwater Vehicles (AUVs)
                                        and Autonomous Surfaces Vehicle (ASVs).
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Box>
                                <img src="/home/building.jpeg" width="100%"
                                    style={{borderRadius: 16}} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item md={6} order={1}>
                            <Box>
                                <img src="/home/testing.jpeg" width="100%"
                                    style={{borderRadius: 16}} />
                            </Box>
                        </Grid>
                        <Grid item md={6} order={small ? 0 : 2}>
                            <Box mx={3} mb={{xs: 3, md: 0}}>
                                <Box textAlign={{xs: 'center', md: 'left'}}>
                                    <Typography variant="h3" fontWeight={300}>
                                        Testing
                                    </Typography>
                                </Box>
                                <Box>
                                    <StandardLine width={160} height={5} borderRadius={3}
                                        centered={small} />
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="h5" textAlign={{xs: 'center', md: 'left'}}>
                                        MRG frequently tests robots at lakes near Georgia Tech 
                                        in preparation for various competitions and challenges.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}