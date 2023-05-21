import { Box, Container, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'

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
            <Box height={500} sx={{
                backgroundColor: 'hsl(166, 98%, 94%)',
                height: 600,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative'
            }}>
                <Box position="absolute" top={0} left={0} width="calc(50vw - 600px)" height={200}
                    bgcolor="background.default" />
                <Box maxWidth="lg" mx="auto" sx={{position: 'relative'}}>
                    <Box position="absolute" top={0} left={0} bgcolor="background.default"
                        width="100%" height={200}
                        sx={{clipPath: 'url(#about-clip-path2)'}} />
                    <Box mx={small ? 0 : 5} position="absolute" top={0} left={0} width="100%">
                        <Box position="absolute" top={small ? 0 : -200} left={small ? '24px' : 0}
                            width={small ? 'min(80%,400px)' : 700} height={small ? 300 : 500}
                            zIndex={10}>
                            <img src="/about/sean-carrying.jpg" width="100%" height="100%"
                            style={{borderRadius: 10}} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}