import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { StandardLine } from "../misc/line";
import { useTheme } from '@mui/material/styles'

export default function Exploration() {

    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box mt={0} sx={{backgroundColor: '#f5f5f5', padding: '2rem', color: "text.secondary" }}> 
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
                    <Typography variant="h6" fontWeight={400}>
                        The furthest reaches of human exploration are pioneered by robots. 
                        At the Marine Robotics Group at Georgia Tech, 
                        students likewise partake in the development of 
                        autonomous maritime robots.
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {/* Learning */}
                    <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                            <img src="/home/training.webp" width="100%"  style={{ borderRadius: 16 }} alt="MRG training in the lab" />
                            <Typography variant="h4" fontWeight={400} mt={2}>
                            Learning
                            </Typography>
                            <StandardLine width={80} height={5} borderRadius={3} centered />
                            <Typography variant="body1" fontWeight={300} mt={2}>
                            MRG provides an opportunity to learn new skills and work with tools 
                            for robotics, regardless of incoming skill level. We run a training
                            program during the beginning of each semester.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Building */}
                    <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                        <img src="/home/building.webp" width="100%" style={{ borderRadius: 16 }} alt="Members fiberglassing pontoons" />
                        <Typography variant="h4" fontWeight={400} mt={2}>
                        Building
                        </Typography>
                        <StandardLine width={80} height={5} borderRadius={3} centered />
                        <Typography variant="body1" fontWeight={300} mt={2}>
                        MRG has the goal of iterating on and creating new  
                        Autonomous Underwater Vehicles (AUVs)
                        and Autonomous Surfaces Vehicle (ASVs).
                        </Typography>
                    </Box>
                    </Grid>

                    {/* Testing */}
                    <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                        <img src="/home/testing.webp" width="100%" style={{ borderRadius: 16 }} alt="Members testing a robot at a local lake" />
                        <Typography variant="h4" fontWeight={400} mt={2}>
                        Testing
                        </Typography>
                        <StandardLine width={80} height={5} borderRadius={3} centered />
                        <Typography variant="body1" fontWeight={300} mt={2}>
                        MRG frequently tests robots at lakes near Georgia Tech 
                        and in the Campus Recreational Center on campus
                        in preparation for various competitions and challenges.
                        </Typography>
                    </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}