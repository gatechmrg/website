import { Box, Container, Grid, Typography } from "@mui/material";

export default function Vessel() {

    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <img width="100%" src="/projects/microtransat/microtransat-vessel.webp"
                        style={{borderRadius: 16}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mx={3} mt={{xs: 3, md: 0}}>
                            <Box maxWidth={600} mx={{xs: 'auto', md: 'none'}}>
                                <Box>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        Our goal is to be the first collegiate team to send an autonomous
                                        sub-2.4m vessel across the Atlantic Ocean. 
                                        Our team has completed mission conceptualization, and we are
                                        currently working on prototyping.
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        Our vessel will consist of a monohull design sporting 
                                        wingsail propulsion, powered by solar cells with LiFePO4 batteries. 
                                        Some challenges we will face are design and implementation 
                                        of our power system, communications, hull fabrication, 
                                        wingsail and rudder fabrication, guidance and navigation, among others.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}