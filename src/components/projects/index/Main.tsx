import { Box, Container, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles'
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { StandardLine } from "../../misc/line";

const ProjectGrid = styled('div')(({theme}) => ({
    display: 'grid',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
        gridTemplate: `
            "p1 p2" auto
            "p3 p4" auto / 1fr 1fr 
        `
    },
    [theme.breakpoints.down('md')]: {
        gridTemplate: `
            "p1" "p2" "p3" "p4" 
        `
    }
}))

const hoverAnimation = {
    transition: 'transform 300ms',
    '&:hover': {
        transform: 'scale(1.1)'
    }
}

export default function Main() {

    const [screenWidth, setScreenWidth] = useState(0)

    const theme = useTheme()
    const lgScreen = useMediaQuery(theme.breakpoints.up('md'))

    useEffect(() => {
        setScreenWidth(window.innerWidth)
        window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    }, [])

    const bottomMargin = useMemo(() => {
        const w = screenWidth > 1200 ? 1200 : screenWidth
        if (w >= 900) {
            return ((w - 800) / 2) / 10
        } else {
            return 5
        }
    }, [screenWidth])

    console.log(bottomMargin)

    return (
        <Container maxWidth="lg">
            <Box mt={3} textAlign="center">
                <Typography variant="h2">
                    Ongoing Projects
                </Typography>
                <StandardLine width={200} height={5} centered borderRadius={5} />
            </Box>
            <Box mt={5} minHeight="calc(100vh - 83px)" display="grid" alignItems="center">
                <ProjectGrid>
                    <Box gridArea="p1">
                        <Box maxWidth={400} mx="auto" mb={bottomMargin}>
                            <Link href="/projects/microtransat">
                                <Paper elevation={3} sx={{width: '100%', height: 400, 
                                backgroundImage: 'url(/projects/microtransat.png)', backgroundSize: 'cover',
                                backgroundPosition: 'center', borderRadius: 3, ...hoverAnimation}}>
                                    <Box pt="300px">
                                        <Box height={100} bgcolor="rgba(0,0,0,.7)" display="grid"
                                            sx={{placeItems: 'center'}} borderRadius="0 0 12px 12px">
                                            <Typography variant="h3" color="#fff">
                                                Microtransat
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Link>
                        </Box>
                    </Box>
                    <Box gridArea="p2">
                        <Box maxWidth={400} mx="auto" mb={bottomMargin}>
                            <Link href="/projects/roboboat">
                                <Paper elevation={3} sx={{width: '100%', height: 400, 
                                backgroundImage: 'url(/projects/roboboat.jpg)', backgroundSize: 'cover',
                                backgroundPosition: 'center', borderRadius: 3, ...hoverAnimation}}>
                                    <Box pt="300px">
                                        <Box height={100} bgcolor="rgba(0,0,0,.7)" display="grid"
                                            sx={{placeItems: 'center'}} borderRadius="0 0 12px 12px">
                                            <Typography variant="h3" color="#fff">
                                                RoboBoat
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Link>
                        </Box>
                    </Box>
                    <Box gridArea="p3">
                        <Box maxWidth={400} mx="auto" mb={lgScreen ? 0 : bottomMargin}>
                            <Link href="/projects/robotx">
                                <Paper elevation={3} sx={{width: '100%', height: 400, 
                                backgroundImage: 'url(/projects/robotx.JPG)', backgroundSize: 'cover',
                                backgroundPosition: 'center', borderRadius: 3, ...hoverAnimation}}>
                                    <Box pt="300px">
                                        <Box height={100} bgcolor="rgba(0,0,0,.7)" display="grid"
                                            sx={{placeItems: 'center'}} borderRadius="0 0 12px 12px">
                                            <Typography variant="h3" color="#fff">
                                                RobotX
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Link>
                        </Box>
                    </Box>
                    <Box gridArea="p4">
                        <Box maxWidth={400} mx="auto" mb={lgScreen ? 0 : bottomMargin}>
                            <Link href="/projects/robosub">
                                <Paper elevation={3} sx={{width: '100%', height: 400, 
                                backgroundImage: 'url(/projects/robosub.png)', backgroundSize: 'cover',
                                backgroundPosition: 'center', borderRadius: 3, ...hoverAnimation}}>
                                    <Box pt="300px">
                                        <Box height={100} bgcolor="rgba(0,0,0,.7)" display="grid"
                                            sx={{placeItems: 'center'}} borderRadius="0 0 12px 12px">
                                            <Typography variant="h3" color="#fff">
                                                RoboSub
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Link>
                        </Box>
                    </Box>
                </ProjectGrid>
            </Box>
        </Container>
    )
}