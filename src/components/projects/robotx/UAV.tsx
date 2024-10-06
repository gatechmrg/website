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
                                        lineHeight={1.7} fontSize="1.2rem">
                                        El Tigre is our autonomous aerial vehicle built for RobotX 2022.
                                        The drone performed well in 2022, placing second in the RobotX Air 
                                        competition. We typically test the drone at Tech Green or other 
                                        outdoor spaces at Tech.
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        RobotX 2024 will likely still have a drone component, so we plan
                                        on improving the drone&#39;s autonomy, especially in regard to 
                                        collaborating with the USV.
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