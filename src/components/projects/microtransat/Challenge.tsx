import { Box, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

export default function Challenge() {

    return (
        <Box mt={6}>
            <Box textAlign="center">
                <Typography variant="h2">
                    The Challenge
                </Typography>
            </Box>
            <Box mt={2} mb={5}>
                <StandardLine width={200} height={5} centered borderRadius={3} />
            </Box>
            <Box mt={2} mx={3}>
                <Box maxWidth={{xs: '100%', md: "calc(80vw - 83px)"}}
                    maxHeight="80vh"sx={{aspectRatio: '16/9'}}
                    mx="auto">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/F39G02bMFhE"
                    frameBorder={0} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen></iframe>
                </Box>
            </Box>
        </Box>
    )
}