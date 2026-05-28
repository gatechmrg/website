import { Box, Container, Grid, List, ListItem, Typography, Button } from "@mui/material";
import { StandardLine } from "../../../misc/line";
import Link from "next/link";

export default function Software() {
    return (
        <>
            {/* ===== OFF-WHITE SECTION ===== */}
            <Box
                component="section"
                sx={{
                    width: '100%',
                    bgcolor: '#f0eee6',
                    color: '#001848',
                    position: 'relative',
                    overflow: 'hidden',
                    pt: 10,
                    pb: 10
                }}
            >
                {/* TOP STRIPE */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '10px',
                        bgcolor: '#d8d2c4'
                    }}
                />

                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="stretch">

                        {/* CONTENT (LEFT) */}
                        <Grid item xs={12} md={7}>
                            <Box sx={{ px: { xs: 0, md: 2 } }}>

                                <Typography
                                    variant="h3"
                                    fontWeight={400}
                                    sx={{ color: '#001848' }}
                                >
                                    Software Design
                                </Typography>

                                <StandardLine width={200} height={5} borderRadius={5} />

                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        pl: 3,
                                        mt: 3,
                                        color: '#001848'
                                    }}
                                >
                                    {[
                                        "Developed software in Python and C++ within the ROS 2 framework for modular and scalable system integration",
                                        "Leveraged the Gazebo simulation environment to enable rapid, parallel software development alongside hardware iteration",
                                        "Implemented robotic localization using Microstrain IMU and Water Linked DVL A50",
                                        "Utilized stereo vision and Sonoptix multibeam sonar for perception and mapping, incorporating YOLO-based object detection and point cloud processing"
                                    ].map((text, idx) => (
                                        <ListItem
                                            key={idx}
                                            sx={{
                                                display: 'list-item',
                                                py: 0.5,
                                                color: '#001848'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: '1.1rem',
                                                    lineHeight: 1.7,
                                                    color: '#001848'
                                                }}
                                            >
                                                {text}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>

                                <Box mt={4}>
                                    <Link href="/projects/robosub/ReadMore/SoftwareInfo" passHref>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: '#001848',
                                                color: '#f0eee6',
                                                textTransform: 'none',
                                                px: 3,
                                                py: 1.2,
                                                borderRadius: 2,
                                                fontSize: '1rem',
                                                boxShadow: 'none',
                                                '&:hover': {
                                                    bgcolor: '#000f33'
                                                }
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </Link>
                                </Box>

                            </Box>
                        </Grid>

                        {/* IMAGE (RIGHT) */}
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: { xs: 260, md: 420 },
                                    backgroundImage: 'url(/projects/robosub/software_cover.png)',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    borderRadius: 3,
                                    boxShadow: '0 10px 28px rgba(0,0,0,0.12)'
                                }}
                            />
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            {/* ===== BOTTOM LINE ===== */}
            <Box
                sx={{
                    width: '100%',
                    height: '10px',
                    bgcolor: '#d8d2c4'
                }}
            />

            {/* ===== TWO-TONE WAVE (LIGHT → DARK BLUE) ===== */}
            <Box sx={{ position: 'relative', lineHeight: 0 }}>

                {/* DARK BLUE BACKGROUND */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: '#003566',
                        zIndex: 0
                    }}
                />

                {/* LIGHT BLUE WAVE */}
                <svg
                    viewBox="0 0 1440 120"
                    width="100%"
                    height="80"
                    preserveAspectRatio="none"
                    style={{ display: 'block', position: 'relative', zIndex: 1 }}
                >
                    <path
                        d="
                            M0,40
                            C180,10 360,10 540,40
                            C720,70 900,70 1080,40
                            C1260,10 1350,10 1440,40
                            L1440,0 L0,0 Z
                        "
                        fill="#2b7cab"
                    />
                </svg>

            </Box>

            {/* ===== DARK BLUE SECTION ===== */}
            <Box
                sx={{
                    width: '100%',
                    height: 2,
                    bgcolor: '#003566'
                }}
            />
        </>
    );
}