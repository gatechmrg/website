import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

export default function AUV() {

    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        AUV 2024
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <img width="100%" src="/projects/robosub/shawnsub.webp"
                        style={{borderRadius: 16}} alt="MRG's Plongeur being tested at the CRC" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mx={3} mt={{xs: 3, md: 0}}>
                            <Box maxWidth={600} mx={{xs: 'auto', md: 'none'}}>
                                <Box>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        We will be constructing a new vehicle for 2024, which
                                        does not yet have a name! Testing will take place in the CRC.
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        We plan on learning from our previous RoboSub vehicle (from 2019) as we tackle
                                        the building and programming of the new vehicle. Upcoming projects 
                                        include designing of main platform, actuator development, 
                                        perception development, navigation development, and electrical system 
                                        construction.
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