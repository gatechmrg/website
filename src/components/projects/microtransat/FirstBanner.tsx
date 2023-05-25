import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'

export default function FirstBanner() {

    const theme = useTheme() 
    const small = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={{
            backgroundImage: 'url(/projects/microtransat/microtransat-map3.png)',
            height: 'min(800px, calc(100vh - 83px))',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
        }}>
            <Box height="100%" display="flex" flexDirection="column">
                <Box flex={1} />
                <Box textAlign="center" py={5} bgcolor="rgba(0,0,0,.5)">
                    <Typography variant="h1" fontWeight={600} color="#fff"
                    fontSize={small ? '5rem' : '8rem'}
                    sx={{textShadow: "1px 1px 3px #000"}}>
                        Microtransat
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}