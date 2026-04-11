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
                // backgroundColor: '#001848', // dark navy blue '
                // backgroundColor: '#3a86ff',
                backgroundColor: '#205375',  // new mid blue
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
                            <img src="/about/team2025.webp" height="100%"
                            style={{borderRadius: 10, boxShadow: '0 4px 25px rgba(0, 0, 0, 0.25)'}} alt="The MRG Team (2025)" />
                        </Box>
                    </Box>
                    <Box height={350}/>
                    <Box maxWidth="100%" pb={5} mx={small ? 3 : 5} sx={{color: 'white'}}>
                        <Paper elevation={3} sx={{bgcolor: '#EAE4D3'}} >
                            <Box p={3}   mx = "auto" maxWidth={1800} alignSelf= "center" display="flex" flexDirection="column" alignItems="center">
                                {/* <Box mb={3}>
                                    <StandardLine width={200} height={5} borderRadius={5} />
                                </Box> */}
                                <Box>
                                    <Typography variant="body1" fontSize="1.25rem" color="#001848">
                                        The Marine Robotics Group at Georgia Tech is a student-led team pushing the boundaries of autonomous maritime technology. Established in 2005, MRG has two decades of experience developing vehicle autonomy in challenging domains, including air, sea-surface, and subsea. The team primarily focuses on behavior and platform development for competition with parallel research interests in multi-agent autonomy and sensor fusion. 
                                    </Typography>
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="body1" fontSize="1.25rem" color="#001848">
<<<<<<< HEAD
                                        MRG operates with the generous support of the Aerospace System Design Lab (ASDL) and is partially partnered with Georgia Tech’s “AquaBots: Maritime Robotics” Vertically Integrated Project program. Student academic backgrounds include Mechanical Engineering, Computer Engineering, Electrical Engineering, Computer Science, Aerospace Engineering, Physics, Chemical Engineering, and Industrial Engineering. Backgrounds are encouraged to collaborate to address the multidisciplinary challenges of robotics development. 
=======
                                        MRG operates with the generous support of the Aerospace System Design Laboratory (ASDL) and is also partnered with Georgia Tech’s “AquaBots: Maritime Robotics” Vertically Integrated Project program. Student academic backgrounds include Mechanical Engineering, Computer Engineering, Electrical Engineering, Computer Science, Aerospace Engineering, Physics, Chemical Engineering, and Industrial Engineering. Backgrounds are encouraged to collaborate to address the multidisciplinary challenges of robotics development. 
>>>>>>> 227f2c241ad47a7b623ea3627d33c6e3f58120e9
                                    </Typography>
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="body1" fontSize="1.25rem" color="#001848">
                                        MRG actively competes in RobotX, RoboBoat, RoboSub, and the Microtransat Challenge. The team shares infrastructure and development resources across projects to advance an interoperable development framework.
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
                                    <Profile width={330} imgWidth={250} imgSrc="/about/erin_beazley.jpg"
                                        name="Erin Beazley" title="President" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/ariana_litchford.jpg"
                                        name="Ariana Litchford" title="Operations Chair" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/armando_rl.jpg"
                                        name="Armando R" title="Treasurer" />
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
                                    <Profile width={330} imgWidth={250} imgSrc="/about/shrey_patel.png"
                                        name="Shrey Patel" title="RobotX" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/john_beeson.jpg"
                                        name="John Beeson" title="RoboSub" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/carson_ray.jpg"
                                        name="Carson Ray" title="Microtransat" />
                                </Box>
                            </Grid>

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
                                    <Profile width={330} imgWidth={250} imgSrc="/about/olivia_taylor.jpg"
                                        name="Olivia Taylor" title="Mechanical" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/em_paul.jpg"  // I could have found a better image of nick but I found this funny :) - Mitchell
                                        name="Em Paul" title="Electrical" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/mitchell_turton.jpg"
                                        name="Mitchell Turton" title="Software" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/jason_hsaio.jpeg"
                                        name="Jason Hsaio" title="Firmware" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> 227f2c241ad47a7b623ea3627d33c6e3f58120e9
