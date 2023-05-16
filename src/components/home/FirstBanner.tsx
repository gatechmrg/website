import { Box } from "@mui/material";

export default function FirstBanner() {

    return (
        <Box sx={{
            backgroundImage: 'url(/landing_banner_4x.jpg)',
            height: 800,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
        }}>

        </Box>
    )
}