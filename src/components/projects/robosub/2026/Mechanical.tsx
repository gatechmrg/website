import { Box, Container, Grid, List, ListItem, Typography, Button } from "@mui/material";
import { StandardLine } from "../../../misc/line";

export default function Mechanical() {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',
                bgcolor: '#f0eee6',
                color: '#001848',
                position: 'relative',
                overflow: 'hidden',
                pt: 12,   // increased to account for top bars
                pb: 10
            }}
        >

        {/* TOP DUAL WAVE */}
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: 60,
                lineHeight: 0,
                zIndex: 1
            }}
        >

            {/* NAVY BACKGROUND */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: '#003566'
                }}
            />

            {/* LIGHT BLUE WAVE */}
            <svg
                viewBox="0 0 1440 80"
                width="100%"
                height="60"
                preserveAspectRatio="none"
                style={{ display: 'block', position: 'absolute', bottom: 0 }}
            >
                <path
                    d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
                    fill="#2b7cab"
                />
            </svg>
        </Box>

            {/* TOP STRIPE (BEIGE LINE) */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '60px', // 👈 pushed BELOW spacer
                    left: 0,
                    width: '100%',
                    height: '10px',
                    bgcolor: '#d8d2c4'
                }}
            />

            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="stretch">

                    {/* IMAGE */}
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                width: '100%',
                                height: { xs: 260, md: 420 },
                                backgroundImage: 'url(/projects/robosub/mechanical_cover.png)',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                borderRadius: 3,
                                boxShadow: '0 10px 28px rgba(0,0,0,0.12)'
                            }}
                        />
                    </Grid>

                    {/* CONTENT */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{ px: { xs: 0, md: 2 } }}>

                            <Typography
                                variant="h3"
                                fontWeight={400}
                                sx={{ color: '#001848' }}
                            >
                                Mechanical Design
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
                                    "X-Drive thruster configuration for maneuverability and sway",
                                    "Cast acrylic hull with polycarbonate guide rails to efficiently mount subsystems and facilitate future development",
                                    "Custom printed mounting solutions with attention to weight balance and buoyancy",
                                    "In-progress development of autonomous torpedos with on-board visual processing and control"
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

                            <Box mt={4}>
                                <Button
                                    href="https://gt-mrg.notion.site/Mechanical-Documentation-8f290c7fbf424ba198d8950bcf96c678"
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