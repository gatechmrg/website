import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { StandardLine } from "../misc/line";
import { useTheme } from '@mui/material/styles'

import TrainingImage from '../../../public/home/training.jpeg'
import BuildingImage from '../../../public/home/building.jpeg'
import TestingImage from '../../../public/home/testing.jpeg'
import ResponsiveImage from "../misc/ResponsiveImage";

export default function Exploration() {

    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('lg'))

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
                    <Grid container spacing={3}>
                        <Grid item lg={6} xs={12} order={1}>
                            <Box textAlign="center">
                                <ResponsiveImage xs={TrainingImage} alt="MRG Training"
                                    style={{borderRadius: 16}} />
                            </Box>
                        </Grid>
                        <Grid item lg={6} xs={12} order={small ? 0 : 2}>
                            <Box mx={3} mb={{xs: 3, lg: 0}}>
                                <Box maxWidth="md" mx="auto">
                                    <Box textAlign={{xs: 'center', lg: 'left'}}>
                                        <Typography variant="h3" fontWeight={300}>
                                            Learning
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <StandardLine width={190} height={5} borderRadius={3}
                                            centered={small} />
                                    </Box>
                                    <Box mt={3}>
                                        <Typography variant="h5" textAlign={{xs: 'center', lg: 'left'}}>
                                            MRG provides an opportunity to learn new skills and work with tools 
                                            for robotics, regardless of incoming skill level. We run a training
                                            program during the beginning of each semester.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mb={12}>
                    <Grid container spacing={3}>
                        <Grid item lg={6} xs={12}>
                            <Box mx={3} mb={{xs: 3, lg: 0}}>
                                <Box maxWidth="md" mx="auto">
                                    <Box textAlign={{xs: 'center', lg: 'left'}}>
                                        <Typography variant="h3" fontWeight={300}>
                                            Building
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <StandardLine width={170} height={5} borderRadius={3}
                                            centered={small} />
                                    </Box>
                                    <Box mt={3}>
                                        <Typography variant="h5" textAlign={{xs: 'center', lg: 'left'}}>
                                            MRG has the goal of iterating on and creating new  
                                            Autonomous Underwater Vehicles (AUVs)
                                            and Autonomous Surfaces Vehicle (ASVs).
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Box textAlign="center">
                                <ResponsiveImage xs={BuildingImage} alt="MRG Building"
                                    style={{borderRadius: 16}} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item lg={6} xs={12} order={1}>
                            <Box textAlign="center">
                                <ResponsiveImage xs={TestingImage} alt="MRG Testing"
                                    style={{borderRadius: 16}} />
                            </Box>
                        </Grid>
                        <Grid item lg={6} xs={12} order={small ? 0 : 2}>
                            <Box mx={3} mb={{xs: 3, lg: 0}}>
                                <Box mx="auto" maxWidth="md">
                                    <Box textAlign={{xs: 'center', lg: 'left'}}>
                                        <Typography variant="h3" fontWeight={300}>
                                            Testing
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <StandardLine width={160} height={5} borderRadius={3}
                                            centered={small} />
                                    </Box>
                                    <Box mt={3}>
                                        <Typography variant="h5" textAlign={{xs: 'center', lg: 'left'}}>
                                            MRG frequently tests robots at lakes near Georgia Tech 
                                            in preparation for various competitions and challenges.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}