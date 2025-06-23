import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";
import { PrimaryLink } from "../misc/links";

export default function Main() {

    return (
        <Box my={12}>
            <Container maxWidth="xl">
                <Paper elevation={3} sx={{borderRadius: 3}}>
                    <Grid container>
                        <Grid item xs={0} sm={2} md={3} lg={4}>
                            <Box width="100%" height="100%" sx={{
                                backgroundImage: 'url(/join-us/wamv.webp)',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }} borderRadius="12px 0 0 12px" />
                        </Grid>
                        <Grid item flex={1}>
                            <Box px={3} pt={3} pb={1}>
                                <Box>
                                    <Typography variant="h3" fontWeight={500}>
                                        Come Aboard!
                                    </Typography>
                                </Box>
                                <Box>
                                    <StandardLine width={200} height={5} borderRadius={5} />
                                </Box>
                                <Box maxWidth={600} mt={6}>
                                    <Box>
                                        <Typography variant="body1" fontSize="1.25rem" 
                                            display="inline">
                                            Fill out our{' '}
                                        </Typography>
                                        <PrimaryLink 
                                            href="https://forms.office.com/Pages/ResponsePage.aspx?id=u5ghSHuuJUuLem1_Mvqgg9BZ29qxkplPkU60qhtfRO5URU9ESDlEVkFWWVVWTkxFSENGMDM0TVYxQyQlQCN0PWcu"
                                            openInNewTab
                                            fontSize="1.25rem">
                                            interest form
                                        </PrimaryLink>
                                        <Typography variant="body1" fontSize="1.25rem" 
                                            display="inline">
                                            , and we will get back to you with more information.
                                        </Typography>
                                    </Box>
                                    <Box mt={3}>
                                        <Typography variant="body1" fontSize="1.25rem">
                                            You can also meet us at the Fall and Winter 
                                            Organization Fairs at Georgia Tech.
                                        </Typography>
                                    </Box>
                                    <Box mt={3}>
                                        <Typography variant="body1" fontSize="1.25rem">
                                            Feel free to email us (marinerobotics@groups.gatech.edu)
                                            with any questions you may have!
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    )
}