import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { StandardLine } from "../misc/line";
import { useTheme } from '@mui/material/styles'

export default function Exploration() {

    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box mt={0} sx={{backgroundColor: 'background', padding: '2rem', color: "text.primary" }}> 
            <Box textAlign="center">
                <Typography variant="h2" mt={8}>
                    Student-led Exploration
                </Typography>
            </Box>
            <Box mt={2}>
                <StandardLine width={200} height={5} centered borderRadius={3} />
            </Box>
            <Container maxWidth="md">
                <Box textAlign="center" mt={3} mb={12}>
                    <Typography variant="h6" fontWeight={400}>
                        At the Marine Robotics Group at Georgia Tech, students 
                        design, build, and test autonomous underwater vehicles 
                        to reliably operate in complex underwater environments. 
                        We build students and robots that will be the future of 
                        maritime exploration.
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {/* Learning */}
                    <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                            <img src="/home/stinger_test.webp" width="100%"  style={{borderRadius: 16, height: 220, objectFit: "cover" }} alt="MRG training in the lab" />
                            <Typography variant="h4" fontWeight={400} mt={2}>
                            Learning
                            </Typography>
                            <StandardLine width={80} height={5} borderRadius={3} centered />
                            <Typography variant="body1" fontWeight={300} mt={2}>
                                MRG creates the opportunity to work with industry-standard
                                tools used in robotics, regardless of incoming skill level. 
                                We run a training program each semester for students 
                                to become familiar with these skills.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Building */}
                    <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                        <img src="/home/building.webp" width="100%" style={{borderRadius: 16, height: 220, objectFit: "cover" }} alt="Members fiberglassing pontoons" />
                        <Typography variant="h4" fontWeight={400} mt={2}>
                        Building
                        </Typography>
                        <StandardLine width={80} height={5} borderRadius={3} centered />
                        <Typography variant="body1" fontWeight={300} mt={2}>
                        MRG creates new and iterates on Uncrewed Surface Vehicles (USVs), 
                        Uncrewed Underwater Vehicles (UUVs), and Uncrewed Aerial Vehicles 
                        (UAVs). We are able to fabricate parts with an in-house laser cutter,
                        3D printers, and mill, as well as through accessig Georgia Tech's 
                        facilities.
                        </Typography>
                    </Box>
                    </Grid>

                    {/* Testing */}
                    <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                        <img src="/home/testing.webp" width="100%" style={{borderRadius: 16, height: 220, objectFit: "cover" }} alt="Members testing a robot at a local lake" />
                        <Typography variant="h4" fontWeight={400} mt={2}>
                        Testing
                        </Typography>
                        <StandardLine width={80} height={5} borderRadius={3} centered />
                        <Typography variant="body1" fontWeight={300} mt={2}>
                        MRG frequently tests robots at lakes near Georgia Tech 
                        and at the Campus Recreational Center on campus
                        in preparation for various competitions and challenges.
                        This is an opportunity to bridge the gap between simulation
                        and reality.
                        </Typography>
                    </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}