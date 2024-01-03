import { Box, Container, Grid, List, ListItem, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import { StandardLine } from "../../misc/line";
import { PrimaryLink } from "../../misc/links";

export default function Mechanical() {

    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box mt={12}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{borderRadius: 3}}>
                    <Grid container>
                        <Grid item xs={0} sm={2} md={3} lg={4}>
                            {!small && 
                            <Box sx={{height: '100%', borderRadius: '12px 0 0 12px', overflow: 'hidden'}} className="sketchfab-embed-wrapper"> 
                                <iframe height="100%" width="100%" title="Robobat2024" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/182befec1e9742c98429603179811cca/embed"> </iframe> <p style={{fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A"}}> <a href="https://sketchfab.com/3d-models/robobat2024-182befec1e9742c98429603179811cca?utm_medium=embed&utm_campaign=share-popup&utm_content=182befec1e9742c98429603179811cca" target="_blank" rel="nofollow" style={{fontWeight: "bold", color: "#1CAAD9"}}> Robobat2024 </a> by <a href="https://sketchfab.com/mroglan?utm_medium=embed&utm_campaign=share-popup&utm_content=182befec1e9742c98429603179811cca" target="_blank" rel="nofollow" style={{fontWeight: "bold", color: "#1CAAD9"}}> mroglan </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=182befec1e9742c98429603179811cca" target="_blank" rel="nofollow" style={{fontWeight: "bold", color: "#1CAAD9"}}>Sketchfab</a></p>
                            </Box> }
                        </Grid>
                        <Grid item flex={1}>
                            <Box px={3} pt={3} pb={1}>
                                <Box>
                                    <Typography variant="h3" fontWeight={300}>
                                        Mechanical Design
                                    </Typography>
                                </Box>
                                <Box>
                                    <StandardLine width={200} height={5} borderRadius={5} />
                                </Box>
                                <Box maxWidth={600} mt={3}>
                                    <List sx={{listStyleType: 'disc', pl: 4}}>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                Two closed-cell foam pontoons milled, with multiple layers of 
                                                epoxy and fiberglass added
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                6-motor H drive configuration, with custom-made motor mounts
                                                3-d printed
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                Plexiglass bellypan, allowing for a flexible arrangement of 
                                                electrical components
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                2-motor raquetball shooter inspired by the traditional 
                                                flywheel shooter
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box mt={3}>
                                    <PrimaryLink href="https://gt-mrg.notion.site/Mechanical-Documentation-8f290c7fbf424ba198d8950bcf96c678"
                                        openInNewTab fontSize="1.2rem">
                                        Full Documentation
                                    </PrimaryLink>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    )
}