import { Box, Paper, Typography } from "@mui/material";

interface Props {
    width: number;
    imgWidth: number
    imgSrc: string;
    name: string;
    title: string;
    study?: string;
}

export default function Profile({width, imgWidth, imgSrc, name, title, study}:Props) {

    return (
        <Box width={width} mx="auto">
            <Box pt={`${imgWidth / 2}px`}>
                <Paper elevation={3} sx={{position: 'relative', borderRadius: 5}}>
                    <Box position="relative" left="50%" top={`${-imgWidth/2}px`}>
                        <img src={imgSrc} width={imgWidth} height={imgWidth} 
                            style={{borderRadius: '50%', transform: 'translateX(-51%)'}}
                            alt={name} />
                    </Box>
                    <Box mt={`${-imgWidth / 2}px`} />
                    <Box mt={2} textAlign="center">
                        <Typography variant="h4">
                            {name}
                        </Typography>
                    </Box>
                    <Box mt={2} textAlign="center">
                        <Typography variant="body1" fontSize="1.25rem">
                            {title}
                        </Typography>
                    </Box>
                    <Box mt={2} pb={3} textAlign="center">
                        <Typography variant="body1" fontSize="1.25rem"
                            color="rgba(0,0,0,.7)">
                            {study}
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}