import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

export default function UAV() {

    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        El Tigre
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <img width="100%" src="/projects/robotx/uav_new.jpg"
                        style={{borderRadius: 16}} alt="El Tigre poses at RobotX." />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mx={3} mt={{xs: 3, md: 0}}>
                            <Box maxWidth={600} mx={{xs: 'auto', md: 'none'}}>
                                <Box>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.02rem">
                                        The autonomous aerial vehicle is a custom built UAV with a DJI F550 Hexacopter frame, capable of carrying a payload of 1,200g.
                                        It’s 6 motors, flight controller, camera and companion computer are powered by a 5000mAh battery giving it an endurance of ~15min at 70% throttle.
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.02rem">
                                        In the RobotX 2024 competition, the UAV will participate in the “Search and Report” and “UAV Replenishment” missions.
                                        The search and report mission involves the detection and reporting of the GPS coordinates of two markers before returning to land autonomously,
                                        and the UAV replenishment mission involves autonomous pickup and replacement of small tin cans from one location to another.
                                    </Typography>
                                </Box>
                                {/* YouTube Video Box */}
                                <Box textAlign="center">
                                    <Typography variant="h5" mb={1}>
                                        Watch El Tigre in Action
                                    </Typography>
                                    <Box 
                                        sx={{ 
                                            position: 'relative', 
                                            paddingTop: '56.25%', // 16:9 Aspect Ratio
                                            height: 0, 
                                            overflow: 'hidden', 
                                            borderRadius: 0, 
                                        }}
                                    >
                                        <iframe 
                                            src="https://www.youtube.com/embed/RBAFhkYkhRQ" // Replace with your YouTube video ID
                                            allowFullScreen 
                                            style={{ 
                                                position: 'absolute', 
                                                top: 0, 
                                                left: 0, 
                                                width: '100%', 
                                                height: '100%' 
                                            }} 
                                            title="El Tigre Video"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}