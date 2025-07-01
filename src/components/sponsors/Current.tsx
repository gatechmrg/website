import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";

export default function Current() {

    return (
        <Box mt={6}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        Current Sponsors
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Box>
                    <Grid container spacing={8} alignItems="center"
                        justifyContent="center">
                        <Grid item>
                            <img src="/sponsors/asdl.webp" 
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="ASDL" alt="ASDL" />
                        </Grid>
                        <Grid item>
                            <img src="/sponsors/sga.webp" 
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="SGA" alt="SGA" />
                        </Grid>
                        <Grid item>
                            <img src="/sponsors/altium.webp" 
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="Altium" alt="Altium" />
                        </Grid>
                        <Grid item>
                            <img src="/sponsors/firefly_automatix.webp"
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="Firefly Automatix" alt="Firefly Automatix" />
                        </Grid>
                        <Grid item>
                            <img src="/sponsors/bluetrail.webp"
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="Blue Trail Engineering" alt="Blue Trail Engineering" />
                        </Grid>
                        <Grid item>
                            <img src="/sponsors/dassault.png"
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="Dassault Systems" alt="Dassault Systems" />
                        </Grid>
                        <Grid item>
                            <img src="/sponsors/tdk-lambda-1.png"
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="TDK Lambda" alt="TDK Lambda" />
                        </Grid>
                        <Grid item>
                            <img src="/sponsors/theia.jpg"
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="Theia Technologies" alt="Theia Technologies" />
                        </Grid>
                        <Grid item>
                            <img src="/sponsors/vectornav.jpg"
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="Vectornav" alt="Vectornav" />
                        </Grid>
                        <Grid item>
                            <img src="/sponsors/waterlinked_logo.png"
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="WaterLinked" alt="WaterLinkedgot " />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={10} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Box maxWidth={620} textAlign="center" mx="auto">
                    <Typography variant="body1" fontSize="1.2rem">
                        If you are interested in sponsoring our organization, please
                        email us at
                    </Typography>
                    <Typography variant="body1" fontSize="1.2rem">
                        marinerobotics@groups.gatech.edu
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}