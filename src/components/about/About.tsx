import { Box, Container, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import { StandardLine } from "../misc/line";
import Profile from "./Profile";

export default function About() {

    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box>
            <svg display="block" width="0px" height="0px" viewBox="0 0 1091 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="about-clip-path2">
                        <path d="M0 197.421C0 197.421 205.98 214.644 338.5 160.075C424 124.868 408.5 160.075 564 114.998C707.27 73.4651 766.484 106.813 881 57.7456C993.5 9.54202 1091 -3.65091e-07 1091 -3.65091e-07H0V197.421Z" fill="#D9D9D9"/>
                    </clipPath>
                </defs>
            </svg>
            <svg display="block" width="0px" height="0px" viewBox="0 0 2000 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="about-clip-path3">
                        <path d="M2000 2.57927C2000 2.57927 1622.4 -14.6444 1379.47 39.9247C1222.73 75.132 1251.15 39.9247 966.086 85.0024C703.446 126.535 594.896 93.1871 384.968 142.254C178.735 190.458 2.34842e-05 200 2.34842e-05 200H2000V2.57927Z" fill="#D9D9D9"/>
                    </clipPath>
                </defs>
            </svg>
            <Box sx={{
                backgroundColor: '#003566',
                // backgroundColor: '#3a86ff',
                // backgroundColor: '#ffffff',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative'
            }}>
                <Box position="absolute" top={0} left={0} width="calc(50vw - 600px)" height={200}
                    bgcolor="background.default" />
                <Box position="absolute" top="calc(100% - 200px)" left={0} width="100%" height={200}
                    bgcolor="background.default" sx={{clipPath: 'url(#about-clip-path3)'}} />
                <Box maxWidth="lg" mx="auto" sx={{position: 'relative'}}>
                    <Box position="absolute" top={0} left={0} bgcolor="background.default"
                        width="100%" height={200}
                        sx={{clipPath: 'url(#about-clip-path2)'}} />
                    <Box mx={small ? 0 : 5} position="absolute" top={0} left={0} width="100%">
                        <Box position="absolute" top={small ? 0 : -200} left={small ? '24px' : 0}
                            width={small ? 'min(80%,400px)' : 700} height={small ? 300 : 500}
                            zIndex={10}>
                            <img src="/about/team2025.webp" width="100%" height="100%"
                            style={{borderRadius: 10}} alt="The MRG Team (2025)" />
                        </Box>
                    </Box>
                    <Box height={350} />
                    <Box maxWidth="md" pb={5} mx={small ? 3 : 5}>
                        <Paper elevation={3}>
                            <Box p={3}>
                                <Box mb={3}>
                                    <StandardLine width={200} height={5} borderRadius={5} />
                                </Box>
                                <Box>
                                    <Typography variant="body1" fontSize="1.25rem">
                                        The Marine Robotics Group (MRG) at Georgia Tech is a student-led
                                        organization dedicated to the exploration and advancement of
                                        maritime technologies. This may include long range autonomy, 
                                        multi-robot collaboration, sensor development, and other areas 
                                        of research. Maritime technology is important for understanding
                                        our own planet and eventually others.
                                    </Typography>
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="body1" fontSize="1.25rem">
                                        We&#39;ve also been known as Georgia Tech Marine Robotics
                                        or Why Yes Team. Our organization is based out of the 
                                        Adaptive Design Prototyping and Testing (ADePT) Lab in the
                                        Aerospace Systems Design Laboratory (ASDL).
                                    </Typography>
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="body1" fontSize="1.25rem">
                                        Our activities include development of vehicles for a number of
                                        competitions and challenges. These include RoboBoat, RoboSub, 
                                        RobotX, and Microtransat.
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
            <Box mt={10} maxWidth="lg" mx="auto">
                <Box mx={small ? 6 : 8}>
                    <Box>
                        <Typography variant="h2">
                            Executive Leadership
                        </Typography>
                    </Box>
                    <Box>
                        <StandardLine width={200} height={5} borderRadius={5} />
                    </Box>
                    <Box mt={8} overflow="hidden">
                        <Grid container>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/mrg_icon.svg"
                                        name="Erin Beazley" title="President" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/mrg_icon.svg"
                                        name="William McConnell" title="Operations Chair" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/mrg_icon.svg"
                                        name="Alexander Dumas" title="Treasurer" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box mx={small ? 6 : 8}>
                    <Box>
                        <Typography variant="h2">
                            Project Leads
                        </Typography>
                    </Box>
                    <Box>
                        <StandardLine width={200} height={5} borderRadius={5} />
                    </Box>
                    <Box mt={8} overflow="hidden">
                        <Grid container justifyContent="center">
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/mrg_icon.svg"
                                        name="Shawn Coutinho" title="RoboSub" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/mrg_icon.svg"
                                        name="Carson Ray" title="Microtransat" />
                                </Box>
                            </Grid>
                            {/* <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/mrg_icon.svg"
                                        name="" title="RobotX" />
                                </Box>
                            </Grid> */}
                        </Grid>
                    </Box>
                </Box>
                <Box mx={small ? 6 : 8}>
                    <Box>
                        <Typography variant="h2">
                            Technical Leads
                        </Typography>
                    </Box>
                    <Box>
                        <StandardLine width={200} height={5} borderRadius={5} />
                    </Box>
                    <Box mt={8} overflow="hidden">
                        <Grid container justifyContent="center">
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/mrg_icon.svg"
                                        name="Matthew Zhou" title="Mechanical" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/mrg_icon.svg"
                                        name="Nicholas Lai" title="Electrical" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/mrg_icon.svg"
                                        name="Mitchell Turton" title="Software" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}