import { Box, Container, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";
import { PrimaryLink } from "../../misc/links";

export default function Electrical() {

    return (
        <Box mt={12}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{borderRadius: 3}}>
                    <Grid container>
                        <Grid item xs={0} sm={2} md={3} lg={4}>
                            <Box width="100%" height="100%" sx={{
                                backgroundImage: 'url(/projects/robotx/electrical.PNG)',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }} borderRadius="12px 0 0 12px" />
                        </Grid>
                        <Grid item flex={1}>
                            <Box px={3} pt={3} pb={1}>
                                <Box>
                                    <Typography variant="h3" fontWeight={300}>
                                        Electrical Design
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
                                                12V battery powering the computer, sensors, and motors
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                Arduino Due microcontroller bridging communication between the
                                                software and the motors
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                4 Pulse Width Modulation modules to control individual speed
                                                of each motor
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box mt={3}>
                                    <PrimaryLink href="https://gt-mrg.notion.site/Electrical-Documentation-43c7df589466459295f4c68a32e4bd03"
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