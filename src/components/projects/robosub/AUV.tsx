import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

export default function AUV() {

    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        AUV 2025
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                         <Box sx={{ position: "relative", paddingTop: "56.25%", borderRadius: 2, overflow: "hidden" }}>
                            <iframe
                                src="https://www.youtube.com/embed/3EeeeBVkHmo"
                                title="RoboSub Prequal Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    border: 0,
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mx={3} mt={{xs: 3, md: 0}}>
                            <Box maxWidth={600} mx={{xs: 'auto', md: 'none'}}>
                                <Box>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        A new vehicle, Take Two, will be making it's competition debut at RoboSub 2025 for MRG's first return since 2020.
                                        The platform focuses on simplicity and modularity, enabeling strong future development.
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                Take Two has a cast acrylic hull with eight polycarbonate guide rods around it, where we can mount different subsystems
                                 and sensors—like the powertrain and other electronics. Inside, and extendable drawer-style setup makes it easy to access
                                  and work on the electrical components, which include in-house-developed PCBs, fuses, buck converters, 
                                  and more. We also put a lot of effort into making sure mechanical and software teams 
                                  could work in parallel by using a medium-fidelity simulation in Gazebo. 
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