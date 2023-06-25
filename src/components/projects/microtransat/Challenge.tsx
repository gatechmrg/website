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
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/F39G02bMFhE&autoplay=1&mute=1"
                    frameBorder={0} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:64px/1.5 sans-serif;color:hsl(166, 100%, 35%);text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/F39G02bMFhE?autoplay=1&mute=1><img src=https://i3.ytimg.com/vi/F39G02bMFhE/maxresdefault.jpg alt='The Microtransat Challenge'><span>▶</span></a>"
                    allowFullScreen></iframe>
                </Box>
            </Box>
        </Box>
    )
}