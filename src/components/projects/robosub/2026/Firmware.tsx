import { Box, Container, Grid, List, ListItem, Typography, Button } from "@mui/material";
import { StandardLine } from "../../../misc/line";

export default function Firmware() {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',
                bgcolor: '#f0eee6',
                color: '#001848',
                position: 'relative',
                overflow: 'hidden',
                pt: 10,
                pb: 10
            }}
        >

            {/* TOP LINE */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '10px',
                    bgcolor: '#d8d2c4'
                }}
            />

            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">

                    {/* IMAGE (NOW LEFT) */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ order: { xs: 1, md: 1 } }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: { xs: 260, md: 460 },
                                backgroundImage: 'url(/projects/robosub/firmware.webp)',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                borderRadius: 3,
                                boxShadow: '0 10px 28px rgba(0,0,0,0.12)'
                            }}
                        />
                    </Grid>

                    {/* TEXT (NOW RIGHT) */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ order: { xs: 2, md: 2 } }}
                    >
                        <Box>

                            <Typography
                                variant="h3"
                                fontWeight={400}
                                sx={{ color: '#001848' }}
                            >
                                Firmware Design
                            </Typography>

                            <StandardLine width={200} height={5} borderRadius={5} />

                            <List
                                sx={{
                                    listStyleType: 'disc',
                                    pl: 3,
                                    mt: 3,
                                    color: '#001848'
                                }}
                            >
                                {[
                                    "Modular and Reconfigurable Firmware Codebase supporting multiple projects",
                                    "Robust Testing Framework with Python Testing Scripts to drive Protobuf inputs and Pico Probe",
                                    "Custom Hardware Abstraction Layer level control and interface with ProtoBuf for communication with computer",
                                    "Object Oriented Programming concepts for inheritance of different swappable modules"
                                ].map((text, idx) => (
                                    <ListItem
                                        key={idx}
                                        sx={{
                                            display: 'list-item',
                                            py: 0.5,
                                            color: '#001848'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '1.1rem',
                                                lineHeight: 1.7,
                                                color: '#001848'
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>

                            {/* CTA */}
                            <Box mt={4}>
                                <Button
                                    href="https://gt-mrg.notion.site/Electrical-Documentation-43c7df589466459295f4c68a32e4bd03"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#001848',
                                        color: '#f0eee6',
                                        textTransform: 'none',
                                        px: 3,
                                        py: 1.2,
                                        borderRadius: 2,
                                        fontSize: '1rem',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            bgcolor: '#000f33'
                                        }
                                    }}
                                >
                                    Full Documentation
                                </Button>
                            </Box>

                        </Box>
                    </Grid>

                </Grid>
            </Container>

            {/* BOTTOM LINE */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '10px',
                    bgcolor: '#d8d2c4'
                }}
            />

        </Box>
    );
}