import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../../misc/line";

export default function VehicleOverview() {
    return (
        <Box mt={12} mb={6}>
            <Container maxWidth="xl">

                {/* TITLE */}
                <Box textAlign="center">
                    <Typography variant="h2">
                        Vehicle Overview
                    </Typography>
                </Box>

                {/* DIVIDER */}
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>

                {/* MAIN CONTENT */}
                <Grid container justifyContent="center">

                    {/* VIDEO */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Box
                            sx={{
                                position: "relative",
                                paddingTop: "56.25%",
                                borderRadius: 2,
                                overflow: "hidden"
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/x1FwMXsabCQ?si=NBAutcHPugjjSSHy"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    border: 0
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* TEXT */}
                    <Grid item xs={12} md={6}>
                        <Box mx={3} mt={{ xs: 3, md: 0 }}>

                            <Box maxWidth={600} mx={{ xs: "auto", md: "none" }}>

                                <Typography
                                    variant="body1"
                                    textAlign={{ xs: "center", md: "left" }}
                                    lineHeight={1.7}
                                    fontSize="1.2rem"
                                >
                                    The Marine Robotics Group is excited to return to Irvine for RoboSub 2026. Our current platform was developed from the ground up and made it&apos;s debut in 2025 with strong navigational abilities. 
                                    This year, our platform is smarter and more capable than every before with vision-based perception and a dropper subsystem. 
                                </Typography>

                                <Box mt={2}>
                                    <Typography
                                        variant="body1"
                                        textAlign={{ xs: "center", md: "left" }}
                                        lineHeight={1.7}
                                        fontSize="1.2rem"
                                    >
                                        Our sub has a cast acrylic hull with eight polycarbonate guide rods around it, where we can mount different subsystems
                                        and sensors—like the powertrain and other electronics. Inside, and extendable drawer-style setup makes it easy to access
                                        and work on the electrical components, which include in-house-developed PCBs, fuses, buck converters,
                                        and more. We also prioritize parallel software-hardware development and efficient water testing time by using a medium-fidelity simulation in Gazebo.
                                    </Typography>
                                </Box>

                            </Box>

                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}