import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";

export default function USV() {

    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        The WAMblin Reck
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <img width="100%" src="/projects/robotx/usv_new.jpg"
                        style={{borderRadius: 16}} alt="The WAM-V docked during a lake test." />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mx={3} mt={{xs: 3, md: 0}}>
                            <Box maxWidth={600} mx={{xs: 'auto', md: 'none'}}>
                                <Box>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        The WAMBlin Reck is our autonomous surface vehicle used at RobotX 
                                        since 2016. Its name is inspired by the name of the chassis, the 
                                        WAM-V, and the name of Georgia Tech&#39;s mascot, the Ramblin&#39;
                                        Reck. We typically test the boat at Sweetwater Creek State Park, and 
                                        we are also planning on testing at Lake Lanier in the future.
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant="body1" textAlign={{xs: 'center', md: 'left'}}
                                        lineHeight={1.7} fontSize="1.2rem">
                                        We plan on improving the boat for RobotX 2024, with projects 
                                        including pontoon refurbishment, auxiliary system development,
                                        further autonomy improvements, and power/propulsions upgrades.
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