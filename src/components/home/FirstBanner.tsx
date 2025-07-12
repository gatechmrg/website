import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { GreenPrimaryButton } from "../misc/buttons";
import { useTheme } from '@mui/material/styles'
import Link from "next/link";
import {useState, useEffect} from "react";

export default function FirstBanner() {
    const theme = useTheme()
    const lg = useMediaQuery(theme.breakpoints.up('md'))
    const sm = useMediaQuery(theme.breakpoints.down('md'))
    
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    })

    return (
        <>
        <Box position={"relative"} width="100%" height="100vh" overflow="hidden" >
            {/* <img src={sm ? '/home/wamv_banner_small.webp' : lg ? '/home/wamv_banner_large.webp' : ''}
                style={{display: 'none'}} width={0} height={0} alt="Dummy background image to prioritize loading" /> */}
            {isClient && (
                <Box
                    component="video"
                    src="/home/hero-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                    }}
                />
            )}
            <Grid container wrap="nowrap" height="100%" justifyContent="center" >
                <Grid item xl={4} lg={2} md={1} />
                <Grid item flex={1}>
                    <Box mt={40} textAlign={{xs: 'center', xl: 'left'}} >
                        <Box display="inline-block" >
                            <Typography variant="h1" fontWeight={500} color="#fff"
                            sx={{textShadow: "1px 1px 3px #000"}}>
                                Robots set sail!
                            </Typography>
                            <Typography variant="h6" fontWeight={500} color="#fff"
                            sx={{textShadow: "1px 1px 3px #000"}}>
                                Tackling the challenges of sending autonomous machines into the blue.
                            </Typography>
                            <Box mt={2} textAlign="center" >
                                <Link href="/join-us">
                                    <GreenPrimaryButton sx={{minWidth: 150}}>
                                        Join Us
                                    </GreenPrimaryButton>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Box>
            {/* Multi-layer wave */}
            <Box sx={{ position: 'relative', width: '100%', height: 100, overflow: 'hidden', marginTop: '-100px' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                style={{ width: '100%', height: '100%', display: 'block' }}
            >
                <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
                </defs>
                <g>
                <use xlinkHref="#gentle-wave" x="0" y="0" fill="rgba(245,245,245, 0.9)" />
                <use xlinkHref="#gentle-wave" x="352" y="0" fill="rgba(245,245,245,0.9)" />
                <use xlinkHref="#gentle-wave" x="50" y="3" fill="rgba(245,245,245, 0.5)" />
                <use xlinkHref="#gentle-wave" x="402" y="3" fill="rgba(245,245,245, 0.5)" />
                <use xlinkHref="#gentle-wave" x="100" y="6" fill="rgba(245,245,245, 0.3)" />
                <use xlinkHref="#gentle-wave" x="452" y="6" fill="rgba(245,245,245, 0.3)" />
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    from="0,0"
                    to="-352,0"
                    dur="14s"
                    repeatCount="indefinite"
                />
                </g>
            </svg>
            </Box>

    </>
    )
}