import { Box, Grid, Paper, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";
import { Scrollama, Step} from 'react-scrollama'
import stickybits from 'stickybits'
import { GreenPrimaryButton } from "../misc/buttons";
import Link from "next/link";

stickybits('sticky-root')

export default function Projects() {

    const onProgress = (e:any) => {
        console.log(e)
    }

    return (
        <>
        <Box>
            <Box id="sticky-root" sx={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0)), url(/home/blue-sky.png)',
                    backgroundSize: 'cover',
                    height: 'calc(100vh + 120px)',
                    top: -120,
                    position: 'sticky'
                }}>
                <Box position="absolute" bottom={0}
                    height="50%" width="100%" 
                    sx={{backgroundImage: 'url(/home/ocean.png)', backgroundSize: 'cover'}} />
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
                        <Box position="relative" height="100vh" mx={3}>
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
                </Scrollama>
            </Box>
        </Box>
        <Box height="200vh" />
        </>
    )
}