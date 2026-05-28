import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../../../misc/line";

export default function Testing() {
    return (
        <Box mt={12} mb={6}>
            <Container maxWidth="xl">

                {/* TITLE */}
                <Box textAlign="center">
                    <Typography variant="h2">
                        Testing
                    </Typography>
                </Box>

                {/* DIVIDER */}
                <Box mt={2} mb={5}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>

                {/* MAIN CONTENT */}
                <Grid container justifyContent="center">


                    <Typography
                        variant="body1"
                        textAlign={{ xs: "center", md: "left" }}
                        lineHeight={1.7}
                        fontSize="1.2rem"
                        px={{ xs: 2, md: 3 }} 
                    >
                        Water testing time is essential to validating system integration and performance. Unfortunately, our pool access is limited, so 
                        our design and testing strategy is designed around making the most of this scare testing resource.
                    </Typography>

                    <Box mt={2}>
                        <Typography
                            variant="body1"
                            textAlign={{ xs: "center", md: "left" }}
                            lineHeight={1.7}
                            fontSize="1.2rem"
                            px={{ xs: 2, md: 3 }} 
                        >
                            All software is validated in simulation before ever touching the water. This resolves simple bugs, message-flow problems, and state-machine errors
                            without consuming limited pool time.
                        </Typography>
                    </Box>

                    <Box mt={2}>
                        <Typography
                            variant="body1"
                            textAlign={{ xs: "center", md: "left" }}
                            lineHeight={1.7}
                            fontSize="1.2rem"
                            px={{ xs: 2, md: 3 }} 
                        >
                            Before every water test, electrical, mechanical, and firmware systems are dry tested to ensure hardware-level performace.
                            Any faults can be readily repaired with lab equipment.
                        </Typography>
                    </Box>

                    <Box mt={2}>
                        <Typography
                            variant="body1"
                            textAlign={{ xs: "center", md: "left" }}
                            lineHeight={1.7}
                            fontSize="1.2rem"
                            px={{ xs: 2, md: 3 }} 
                        >
                            For the 2026 development cycle, water tests sequentially developed three goals. First, we verified sensor functionality and tuned sensor performance.
                            Next, we tuned the gains for each of our position and velocity controllers. Finally, we tested and revised the 
                            perception and autonomy for specific tasks with custom-built replica task equipment.
                        </Typography>
                    </Box>

                    {/* FULL WIDTH IMAGE */}
                    <Box
                        sx={{
                        width: "95%",
                        height: { xs: 220, md: 620 },
                        mt: { xs: 4, md: 6 },
                        mx: "auto",
                        borderRadius: 3,
                        backgroundImage: "url(/projects/robosub/water_tests.png)",
                        backgroundSize: '1340px auto',
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        }}
                    />

                    {/* FULL WIDTH IMAGE */}
                    <Box
                        sx={{
                        width: "95%",
                        height: { xs: 220, md: 620 },
                        mt: { xs: 4, md: 6 },
                        mx: "auto",
                        borderRadius: 3,
                        backgroundImage: "url(/projects/robosub/testing_plan.png)",
                        backgroundSize: '1340px auto',
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        }}
                    />

                </Grid>
            </Container>
        </Box>
    );
}