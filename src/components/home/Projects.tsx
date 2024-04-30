import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { StandardLine } from "../misc/line";
import { Scrollama, Step} from 'react-scrollama'
import { GreenPrimaryButton } from "../misc/buttons";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { useTheme } from '@mui/material/styles'
import { calcMicrotransatOffset, calcRobSubOffset, calcRoboBoatOffset, calcWamvOffset } from "./vehicleScrollFuncs";

export default function Projects() {

    const [waterOffset, setWaterOffset] = useState(0)

    const [microOffset, setMicroOffset] = useState(0)
    const [roboBoatOffset, setRoboBoatOffset] = useState(0)
    const [wamvOffset, setWamvOffset] = useState(0)
    const [roboSubOffset, setRoboSubOffset] = useState(0)

    const theme = useTheme()

    const xs = useMediaQuery(theme.breakpoints.only('xs'))
    const sm = useMediaQuery(theme.breakpoints.only('sm'))
    const md = useMediaQuery(theme.breakpoints.only('md'))
    const lg = useMediaQuery(theme.breakpoints.only('lg'))
    const xl = useMediaQuery(theme.breakpoints.only('xl'))

    const breakpoint = [xs, sm, md, lg, xl]

    const onProgress = (e:any) => {

        const scroll = (e.data + e.progress) / 4

        setMicroOffset(calcMicrotransatOffset(scroll, breakpoint.indexOf(true)))
        setRoboBoatOffset(calcRoboBoatOffset(scroll, breakpoint.indexOf(true)))
        setWamvOffset(calcWamvOffset(scroll, breakpoint.indexOf(true))) 
        setRoboSubOffset(calcRobSubOffset(scroll, breakpoint.indexOf(true)))

        if (e.data === 2 && e.progress > .7) {
            setWaterOffset((e.progress - .7) * 100)
        } else if (e.data === 3) {
            setWaterOffset((e.progress + .3) * 100)
        } else if (waterOffset) {
            setWaterOffset(0)
        } 
    }

    return (
        <Box position="relative">
            <Box id="sticky-root" sx={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0)), url(/home/blue-sky.png)',
                    backgroundSize: 'cover',
                    height: 'calc(50vh + 120px)',
                    top: -120,
                    position: 'sticky'
                }}>
                <Box position="absolute" bottom={`${-50 + waterOffset}vh`}
                    height="50vh" width="100%" zIndex={2}
                    sx={{backgroundImage: 'url(/home/ocean.png)', backgroundSize: 'cover'}} />
                <Box position="absolute"  zIndex={1}
                    top={`calc(100% + ${-waterOffset + 50}vh)`}
                    height={` ${waterOffset + 1}vh`} 
                    width="100%"
                    sx={{backgroundImage: 'url(/home/under-ocean5.png)', backgroundSize: '100% 150vh'}} />
                <Box position="absolute" zIndex={3}
                    top={`calc(100% + ${-waterOffset + 50}vh - 50px)`}
                    width="100%" height={100}
                    sx={{backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,.1), rgba(255,255,255,0))'}}
                />
                <Box position="absolute" zIndex={3} width="100%" height="200%" overflow="hidden">
                    <Box position="absolute" bottom="40%" zIndex={3}
                        height={300} width={200} left={`${microOffset}vw`}
                        sx={{backgroundImage: 'url(/home/microtransat.webp)', backgroundSize: '100% 100%',
                            transform: 'translateX(-100%)'}} />
                    <Box position="absolute" bottom={`calc(40% + ${waterOffset}vh)`} zIndex={3}
                        height={200} width={400} left={`${roboBoatOffset}vw`}
                        sx={{backgroundImage: 'url(/home/roboboat2.webp)', backgroundSize: '100% 100%',
                            transform: 'translateX(-100%)'}} />
                    <Box position="absolute" bottom={`calc(40% + ${waterOffset}vh)`} zIndex={3}
                        height={400} width={800} left={`${wamvOffset}vw`}
                        sx={{backgroundImage: 'url(/home/wamv.webp)', backgroundSize: '100% 100%',
                            transform: 'translateX(-100%)'}} />
                    <Box position="absolute" bottom={`${roboSubOffset - 50}vh`} zIndex={3}
                        height={400} width={400} 
                        left={breakpoint.indexOf(true) >= 3 ? "min(25vw, calc(100vw - 1050px))" : "50vw"}
                        sx={{backgroundImage: 'url(/home/robosub.webp)', backgroundSize: '100% 100%',
                            transform: 'translate(-50%, 100%)'}} />
                </Box>
                <Box pt={12} />
                <Box>
                    <Box textAlign="center">
                        <Typography variant="h2">
                            Ongoing Projects
                        </Typography>
                    </Box>
                    <Box mt={2} pb={6}>
                        <StandardLine width={200} height={5} centered borderRadius={3} />
                    </Box>
                </Box>
            </Box>
            <Box>
                <Scrollama debug onStepProgress={onProgress} offset={1}>
                    <Step data={0}>
                        <Box position="relative" height="100vh" mt="-10vh" mx={3}>
                            <Grid container justifyContent="center">
                                <Grid item flex={{lg: 1, md: 0}} />
                                <Grid item xl={6}>
                                    <Box maxWidth={800} mx="auto">
                                        <Paper elevation={3}>
                                            <Box p={3}>
                                                <Box>
                                                    <Typography variant="h4">
                                                        Microtransat
                                                    </Typography>
                                                </Box>
                                                <StandardLine width={200} height={5} borderRadius={3} />
                                                <Box mt={2}>
                                                    <Typography variant="body1" fontSize="1.2rem"
                                                        lineHeight={1.7}>
                                                        For this challenge, we are constructing a small non-motor-propelled 
                                                        boat which will cross the Atlantic Ocean autonomously. 
                                                        We aim to be the first collegiate team to successfully 
                                                        attempt this challenge, and we are currently working
                                                        on prototyping our vessel.
                                                    </Typography>
                                                </Box>
                                                <Box mt={3}>
                                                    <Link href="/projects/microtransat">
                                                        <GreenPrimaryButton sx={{minWidth: 200}}>
                                                            Learn More
                                                        </GreenPrimaryButton>
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Step>
                    <Step data={1}>
                        <Box position="relative" height="100vh" mx={3}>
                            <Grid container justifyContent="center">
                                <Grid item flex={{lg: 1, md: 0}} />
                                <Grid item xl={6}>
                                    <Box maxWidth={800} mx="auto">
                                        <Paper elevation={3}>
                                            <Box p={3}>
                                                <Box>
                                                    <Typography variant="h4">
                                                        RoboBoat
                                                    </Typography>
                                                </Box>
                                                <StandardLine width={160} height={5} borderRadius={3} />
                                                <Box mt={2}>
                                                    <Typography variant="body1" fontSize="1.2rem"
                                                        lineHeight={1.7}>
                                                        For this competition, we build and program a 
                                                        surface vehicle
                                                        to complete a series of tasks autonomously. The 
                                                        competition takes place annually, and we placed
                                                        3<sup>rd</sup> last time around in Sarasota, FL.
                                                    </Typography>
                                                </Box>
                                                <Box mt={3}>
                                                    <Link href="/projects/roboboat">
                                                        <GreenPrimaryButton sx={{minWidth: 200}}>
                                                            Learn More
                                                        </GreenPrimaryButton>
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Step>
                    <Step data={2}>
                        <Box position="relative" height={breakpoint[2] || breakpoint[1]
                            || breakpoint[0] ? '200vh' : '100vh'} mx={3}>
                            <Grid container justifyContent="center">
                                <Grid item flex={{lg: 1, md: 0}} />
                                <Grid item xl={6}>
                                    <Box maxWidth={800} mx="auto">
                                        <Paper elevation={3}>
                                            <Box p={3}>
                                                <Box>
                                                    <Typography variant="h4">
                                                        RobotX
                                                    </Typography>
                                                </Box>
                                                <StandardLine width={120} height={5} borderRadius={3} />
                                                <Box mt={2}>
                                                    <Typography variant="body1" fontSize="1.2rem"
                                                        lineHeight={1.7}>
                                                        For this competition, we develop the autonomy and 
                                                        propulsion for a 16-foot pontoon boat. We also create
                                                        an autonomous drone which the surface vehicle collaborates
                                                        with to complete tasks. The competition is biannual and was
                                                        last held in Sydney, Australia.
                                                    </Typography>
                                                </Box>
                                                <Box mt={3}>
                                                    <Link href="/projects/robotx">
                                                        <GreenPrimaryButton sx={{minWidth: 200}}>
                                                            Learn More
                                                        </GreenPrimaryButton>
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Step>
                    <Step data={3}>
                        <Box position="relative" height="100vh" mx={3}>
                            <Grid container justifyContent="center">
                                <Grid item flex={{lg: 1, md: 0}} />
                                <Grid item xl={6}>
                                    <Box maxWidth={800} mx="auto">
                                        <Paper elevation={3}>
                                            <Box p={3}>
                                                <Box>
                                                    <Typography variant="h4">
                                                        RoboSub
                                                    </Typography>
                                                </Box>
                                                <StandardLine width={140} height={5} borderRadius={3} />
                                                <Box mt={2}>
                                                    <Typography variant="body1" fontSize="1.2rem"
                                                        lineHeight={1.7}>
                                                        For this competition, we build and program an 
                                                        underwater vehicle to complete a series of tasks 
                                                        autonomously. The competition takes place annually,
                                                        and we planning on entering it in 2024 after a four 
                                                        year hiatus.
                                                    </Typography>
                                                </Box>
                                                <Box mt={3}>
                                                    <Link href="/projects/robosub">
                                                        <GreenPrimaryButton sx={{minWidth: 200}}>
                                                            Learn More
                                                        </GreenPrimaryButton>
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Step>
                </Scrollama>
            </Box>
        </Box>
    )
}