import { Box, Container, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";
import { PrimaryLink } from "../../misc/links";

export default function Mechanical() {

    return (
        <Box mt={12}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{borderRadius: 3}}>
                    <Grid container>
                        <Grid item xs={0} sm={2} md={3} lg={4}>
                            <Box width="100%" height="100%" sx={{
                                backgroundImage: 'url(/projects/robosub/mechanical_cover.png)',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }} borderRadius="12px 0 0 12px" />
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
                                                X-Drive thruster configuration for maneuverability and sway
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                Cast acrylic hull with polycarbonate guide rails to efficiently mount subsystems and facilitate future development
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                Custom printed mounting solutions with attention to weight balance and bouyancy
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                In-progress development of autonomous torpedos with on-board visual processing and control 
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