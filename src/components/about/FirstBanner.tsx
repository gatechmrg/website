import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'

export default function FirstBanner() {

    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            <svg display="block" width="0px" height="0px" viewBox="0 0 1092 609" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="about-clip-path">
                        <path d="M0.5 8.50004C0.5 8.50004 206.48 -43.8461 339 122C424.5 229.002 409 122 564.5 259C707.77 385.225 766.984 283.875 881.5 433C994 579.5 1091.5 608.5 1091.5 608.5H0.5V8.50004Z" fill="#D9D9D9"/>
                    </clipPath>
                </defs>
            </svg>
            <Box sx={{
                backgroundImage: small ? 'none' : 'url(/about/people.JPG)',
                height: small ? 200 : 600,
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative'
            }}>
                <Box position="absolute" top={0} left={0} width="calc(50vw - 600px + 60px)" height={600} 
                    bgcolor="background.default" zIndex={1} />
                <Box overflow="hidden" height={small ? 200 : 600} bgcolor="background.default" sx={{
                    clipPath: 'url(#about-clip-path)'
                }} maxWidth="lg" mx="auto" display="grid" alignItems="center"
                position="relative" zIndex={2}>
                    <Typography sx={{marginTop: '0px', marginLeft: small ? 3 : 5}} 
                        variant={small ? 'h2' : 'h1'}>
                        About Us
                    </Typography>
                </Box>
            </Box>
        </>
    )
}