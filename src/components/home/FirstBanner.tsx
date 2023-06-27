import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { GreenPrimaryButton } from "../misc/buttons";
import { useTheme } from '@mui/material/styles'
import Link from "next/link";

export default function FirstBanner() {

    const theme = useTheme()
    const lg = useMediaQuery(theme.breakpoints.up('md'))
    const sm = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box sx={{
            backgroundImage: sm ? 'url(/home/landing_banner_small.webp)' : lg ? 'url(/home/landing_banner_4x.webp)' : '',
            height: 800,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
        }}>
            <img src={sm ? '/home/landing_banner_small.webp' : lg ? '/home/landing_banner_4x.webp' : ''}
                style={{display: 'none'}} width={0} height={0} alt="Dummy background image to prioritize loading" />
            <Grid container wrap="nowrap" height="100%">
                <Grid item xl={6} lg={4} md={2} />
                <Grid item flex={1}>
                    <Box mt={20} textAlign={{xs: 'center', xl: 'left'}}>
                        <Box display="inline-block" >
                            <Typography variant="h1" fontWeight={600} color="#fff"
                            sx={{textShadow: "1px 1px 3px #000"}}>
                                Robots set sail!
                            </Typography>
                            <Typography variant="h6" fontWeight={500} color="#fff"
                            sx={{textShadow: "1px 1px 3px #000"}}>
                                Tackling the challenges of sending autonomous machines into the blue.
                            </Typography>
                            <Box mt={2} textAlign="center">
                                <Link href="/join-us">
                                    <GreenPrimaryButton sx={{minWidth: 200}}>
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