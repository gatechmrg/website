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
    )
}