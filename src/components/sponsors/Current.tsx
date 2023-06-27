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
                            <img src="/sponsors/greenzie.webp" 
                                style={{maxWidth: 500, maxHeight: 500}}
                                title="Greenzie" alt="Greenzie" />
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