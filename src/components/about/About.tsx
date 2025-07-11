import { Box, Container, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import { StandardLine } from "../misc/line";
import Profile from "./Profile";

export default function About() {

    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    // const floatingStyle1 = {
    //     animation: 'float 5s ease-in-out infinite',
    //     '@keyframes float': {
    //         '0%': { transform: 'translateY(-4px)' },
    //         '50%': { transform: 'translateY(1px)' },
    //         '100%': { transform: 'translateY(-4px)' }
    //     }
    // };

//     const floatingStyle1 = {
//   animation: 'float 6s ease-in-out infinite',
//   '@keyframes float': {
//     '0%':   { transform: 'translateY(0px)' },
//     '25%':  { transform: 'translateY(-8px)' },
//     '50%':  { transform: 'translateY(-12px)' },
//     '75%':  { transform: 'translateY(-8px)' },
//     '100%': { transform: 'translateY(0px)' },
//   }
// };

const floatingStyle1 = {
  animation: 'float 6s ease-in-out infinite',
  '@keyframes float': {
    '0%':   { transform: 'translateY(0px)' },
    '25%':  { transform: 'translateY(-2px)' },
    '50%':  { transform: 'translateY(-4px)' },
    '75%':  { transform: 'translateY(-2px)' },
    '100%': { transform: 'translateY(0px)' },
  }
};

    
    const floatingStyle2 = {
  animation: 'float 25s ease-in-out infinite',
  '@keyframes float': {
    '0%':   { transform: 'translateY(0px)' },
    '12.5%': { transform: 'translateY(-4px)' },
    '25%':  { transform: 'translateY(-8px)' },
    '37.5%': { transform: 'translateY(-4px)' },
    '50%':  { transform: 'translateY(0px)' },
    '62.5%': { transform: 'translateY(4px)' },
    '75%':  { transform: 'translateY(8px)' },
    '87.5%': { transform: 'translateY(4px)' },
    '100%': { transform: 'translateY(0px)' },
  }
};


    // const floatingStyle2 = {
    //     animation: 'float 10s ease-in-out infinite',
    //     '@keyframes float': {
    //         '0%': { transform: 'translateY(0px)' },
    //         '50%': { transform: 'translateY(-10px)' },
    //         '100%': { transform: 'translateY(0px)' }
    //     }
    // };

//     const floatingStyle = {
//   animation: 'float 8s ease-in-out infinite',
//   '@keyframes float': {
//     '0%': { transform: 'translate(0px, 0px)' },
//     '25%': { transform: 'translate(-4px, -6px)' },
//     '50%': { transform: 'translate(0px, -8px)' },
//     '75%': { transform: 'translate(4px, -6px)' },
//     '100%': { transform: 'translate(0px, 0px)' }
//   }
// };



    return (
        <Box>
            <svg display="block" width="0px" height="0px" viewBox="0 0 1091 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="about-clip-path2">
                        <path>
                            <animate
                                attributeName="d"
                                dur="6s"
                                repeatCount="indefinite"
                                values="
                                    M0 197.421C0 197.421 197.98 280.644 338.5 160.075C424 124.868 408.5 160.075 564 114.998C707.27 73.4651 766.484 106.813 881 57.7456C993.5 9.54202 1091 0 1091 0H0V197.421Z;
                                    M0 197.421C0 197.421 197.98 220 338.5 140C424 110 408.5 170 564 130C707.27 90 766.484 120 881 80C993.5 40 1091 0 1091 0H0V197.421Z;
                                    M0 197.421C0 197.421 197.98 280.644 338.5 160.075C424 124.868 408.5 160.075 564 114.998C707.27 73.4651 766.484 106.813 881 57.7456C993.5 9.54202 1091 0 1091 0H0V197.421Z
                                "
                            />
                        </path>
                    </clipPath>
                </defs>
            </svg>
            {/* <svg display="block" width="0px" height="0px" viewBox="0 0 2000 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="about-clip-path3">
                        <path>
                            <animate
                                attributeName="d"
                                dur="5s"
                                repeatCount="indefinite"
                                values="
                                    M2000 2.57927C2000 2.57927 1622.4 -14.6444 1379.47 39.9247C1222.73 75.132 1251.15 39.9247 966.086 85.0024C703.446 126.535 594.896 93.1871 384.968 142.254C178.735 190.458 0 200 0 200H2000V2.57927Z;
                                    M2000 2.57927C2000 2.57927 1622.4 20 1379.47 60C1222.73 100 1251.15 20 966.086 100C703.446 160 594.896 120 384.968 180C178.735 200 0 200 0 200H2000V2.57927Z;
                                    M2000 2.57927C2000 2.57927 1622.4 -14.6444 1379.47 39.9247C1222.73 75.132 1251.15 39.9247 966.086 85.0024C703.446 126.535 594.896 93.1871 384.968 142.254C178.735 190.458 0 200 0 200H2000V2.57927Z
                                "
                            />
                        </path>
                    </clipPath>
                </defs>
            </svg> */}


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
                {/* <Box position="absolute" top="calc(100% - 200px)" left={0} width="100%" height={200}
                    bgcolor="background.default" sx={{clipPath: 'url(#about-clip-path3)'}} /> */}

                <Box position="absolute" top="calc(100% - 200px)" left={0} width="100%" height={200}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    }}
                >
                    <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                    </defs>
                    <g>
                    <use xlinkHref="#gentle-wave" x="0" y="0" fill="#003566" />
                    <use xlinkHref="#gentle-wave" x="352" y="0" fill="#003566" />
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        from="0,0"
                        to="-352,0"
                        dur="25s"
                        repeatCount="indefinite"
                    />
                    </g>
                </svg>
                </Box>

                <Box maxWidth="lg" mx="auto" sx={{position: 'relative'}}>
                    <Box position="absolute" top={0} left={0} bgcolor="background.default"
                        width="100%" height={200}
                        sx={{clipPath: 'url(#about-clip-path2)'}} />
                    <Box mx={small ? 0 : 5} position="absolute" top={0} left={0} width="100%">
                        <Box position="absolute" top={small ? 0 : -200} left={small ? '24px' : 0}
                            width={small ? 'min(80%,400px)' : 700} height={small ? 300 : 500}
                            zIndex={10} >
                            {/* sx={floatingStyle1} */}
                            <img src="/about/team2025.webp" width="100%" height="100%"
                            style={{borderRadius: 10, boxShadow: '0 4px 25px rgba(0, 0, 0, 0.25)'}} alt="The MRG Team (2025)" />
                        </Box>
                    </Box>
                    <Box height={350} />
                    <Box maxWidth="md" pb={5} mx={small ? 3 : 5}>
                        <Box sx={floatingStyle2}>
                            <Paper elevation={3}>
                                <Box p={3}>
                                    {/* <Box mb={3}>
                                        <StandardLine width={200} height={5} borderRadius={5} />
                                    </Box> */}
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
                                    <Profile width={330} imgWidth={250} imgSrc="/about/Erin Beazley.jpeg"
                                        name="Erin Beazley" title="President" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/William McConnell.jpeg"
                                        name="William McConnell" title="Operations Chair" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/Alexander Dumas.jpeg"
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
                                    <Profile width={330} imgWidth={250} imgSrc="/about/Shawn Coutinho.jpeg"
                                        name="Shawn Coutinho" title="RoboSub" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/Carson Ray.jpg"
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
                                    <Profile width={330} imgWidth={250} imgSrc="/about/Matthew Zhou.jpeg"
                                        name="Matthew Zhou" title="Mechanical" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/Nicholas Lai.webp"  // I could have found a better image of nick but I found this funny :) - Mitchell
                                        name="Nicholas Lai" title="Electrical" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box m={3}>
                                    <Profile width={330} imgWidth={250} imgSrc="/about/Mitchell Turton.jpeg"
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