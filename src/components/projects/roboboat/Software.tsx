import { Box, Container, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import { StandardLine } from "../../misc/line";
import { PrimaryLink } from "../../misc/links";

export default function Software() {

    return (
        <Box mt={12}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{borderRadius: 3}}>
                    <Grid container>
                        <Grid item xs={0} sm={2} md={3} lg={4}>
                            <Box width="100%" height="100%" sx={{
                                backgroundImage: 'url(/projects/roboboat/software_cover.JPG)',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }} borderRadius="12px 0 0 12px" />
                        </Grid>
                        <Grid item flex={1}>
                            <Box px={3} pt={3} pb={1}>
                                <Box>
                                    <Typography variant="h3" fontWeight={300}>
                                        Software Design
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
                                                Code written in Python and C++ under the ROS 2 framework
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                GPS and IMU used for localization 
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                Two cameras and one LiDAR responsible for perception
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                Mapping capabilities with A*, RRT, and other path planners
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{display: 'list-item'}}>
                                            <Typography variant="body1" lineHeight={1.7}
                                                fontSize="1.2rem">
                                                Motor controller, supporting various 
                                                motor configurations such as X and H drive
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box mt={3}>
                                    <PrimaryLink href="https://github.com/gt-marine-robotics-group/Virtuoso"
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