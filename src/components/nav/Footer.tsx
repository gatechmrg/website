import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles'
import { PrimaryLink, SecondaryLink, TextWithIconLink } from "../misc/links";
import { StandardLine } from "../misc/line";
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

const FooterGrid = styled('div')(({theme}) => ({
    display: 'grid',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
        gridTemplate: `
            "h1 h2 h3 . et" auto
            "c1 c2 c3 . ec" auto / 300px 300px 300px 1fr auto
        `
    },
    [theme.breakpoints.down('xl')]: {
        gridTemplate: `
            "h1 h2 h3 . et" auto
            "c1 c2 c3 . ec" auto / 250px 250px 250px 1fr auto
        `
    },
    [theme.breakpoints.down('lg')]: {
        gridTemplate: `
            "h1 h2" auto
            "c1 c2" auto
            "h3 et" auto
            "c3 ec" auto / 300px 300px
        `
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplate: `
            "h1"
            "c1"
            "h2"
            "c2"
            "h3"
            "c3" 
            "et"
            "ec"
        `
    }
}))

export default function Footer() {

    return (
        <div>
            <svg width="0px" height="0px" viewBox="0 0 2048 1352" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="footer-clip-path">
                        <path d="M0.503418 84.5096C0.503418 84.5096 57 22.9958 216.5 3.49702C382.078 -16.7448 441.374 71.5 669 84.5092C922.5 98.9971 2047.5 84.5092 2047.5 84.5092V1351.5H0.503418V84.5096Z" fill="#AD9191"/>
                    </clipPath>
                </defs>
            </svg>
            <Box overflow="hidden" zIndex={10} bgcolor="hsl(166, 100%, 94%)" pt={5} px={13}
                sx={{
                    clipPath: 'url(#footer-clip-path)'
                }}>
                <Box mb={4}>
                    <Box display="inline-block" textAlign="left">
                        <Typography variant="h6">
                            Marine Robotics Group
                        </Typography>
                        <Typography variant="h6" display="inline">
                            at{' '}
                        </Typography>
                        <PrimaryLink href="https://gatech.edu" variant="h6"
                            openInNewTab>
                            Georgia Tech
                        </PrimaryLink>
                    </Box>
                </Box>
                <FooterGrid>
                    <Box gridArea="h1" mb={2}>
                        <Typography variant="h6">
                            Social Media
                        </Typography>
                        <Box mt={-1}>
                            <StandardLine width={80} height={3} borderRadius={0} />
                        </Box>
                    </Box>
                    <Box gridArea="h2">
                        <Typography variant="h6">
                            Competitions
                        </Typography>
                        <Box mt={-1}>
                            <StandardLine width={80} height={3} borderRadius={0} />
                        </Box>
                    </Box>
                    <Box gridArea="h3">
                        <Typography variant="h6">
                            Operations
                        </Typography>
                        <Box mt={-1}>
                            <StandardLine width={80} height={3} borderRadius={0} />
                        </Box>
                    </Box>
                    <Box gridArea="et">
                        <Typography variant="h6">
                            Get In Touch
                        </Typography>
                        <Box mt={-1}>
                            <StandardLine width={80} height={3} borderRadius={0} />
                        </Box>
                    </Box>
                    <Box gridArea="c1">
                        <Box mb={2}>
                            <SecondaryLink href="https://www.youtube.com/channel/UCiqAntXwDVWI06lwqC3OO-w/featured"
                                fontSize="1.2rem" openInNewTab>
                                Youtube
                            </SecondaryLink>
                        </Box>
                        <Box mb={5}>
                            <SecondaryLink href="https://www.instagram.com/gatechmrg/"
                                fontSize="1.2rem" openInNewTab>
                                Instagram
                            </SecondaryLink>
                        </Box>
                    </Box>
                    <Box gridArea="c2">
                        <Box mb={2}>
                            <SecondaryLink href="https://www.microtransat.org/"
                                fontSize="1.2rem" openInNewTab>
                                Microtransat
                            </SecondaryLink>
                        </Box>
                        <Box mb={2}>
                            <SecondaryLink href="https://robonation.org/programs/roboboat/"
                                fontSize="1.2rem" openInNewTab>
                                RoboBoat
                            </SecondaryLink>
                        </Box>
                        <Box mb={2}>
                            <SecondaryLink href="https://robotx.org/"
                                fontSize="1.2rem" openInNewTab>
                                RobotX
                            </SecondaryLink>
                        </Box>
                        <Box mb={5}>
                            <SecondaryLink href="https://robonation.org/programs/robosub/"
                                fontSize="1.2rem" openInNewTab>
                                RoboSub
                            </SecondaryLink>
                        </Box>
                    </Box>
                    <Box gridArea="c3">
                        <Box mb={2}>
                            <SecondaryLink href="https://teams.microsoft.com/l/team/19%3a145c8cc1e9e54d83a85307ca5a431838%40thread.tacv2/conversations?groupId=dadb59d0-92b1-4f99-914e-b4aa1b5f44ee&tenantId=482198bb-ae7b-4b25-8b7a-6d7f32faa083"
                                fontSize="1.2rem" openInNewTab>
                                Teams
                            </SecondaryLink>
                        </Box>
                        <Box mb={2}>
                            <SecondaryLink href="https://github.com/gt-marine-robotics-group"
                                fontSize="1.2rem" openInNewTab>
                                GitHub
                            </SecondaryLink>
                        </Box>
                        <Box mb={2}>
                            <SecondaryLink href="https://gt-mrg.notion.site/GT-MRG-Team-Home-473529159696471bb0dac927b7ebe360"
                                fontSize="1.2rem" openInNewTab>
                                Notion
                            </SecondaryLink>
                        </Box>
                        <Box mb={5}>
                            <SecondaryLink href="https://mrg-operations.vercel.app/"
                                fontSize="1.2rem" openInNewTab>
                                Inventory
                            </SecondaryLink>
                        </Box>
                    </Box>
                    <Box gridArea="ec">
                        <Box mb={2}>
                            <TextWithIconLink icon={<PlaceIcon fontSize="large" />}
                                href="https://goo.gl/maps/eTw7mVBfbWXGP9GE9?coh=178572&entry=tt"
                                fontSize="1.2rem" openInNewTab>
                                Weber 112
                            </TextWithIconLink>
                        </Box>
                        <Box mb={5}>
                            <TextWithIconLink icon={<EmailIcon fontSize="large" />}
                                href="mailto:marinerobotics@groups.gatech.edu"
                                fontSize="1.2rem">
                                Email Us
                            </TextWithIconLink>
                        </Box>
                    </Box>
                </FooterGrid>
                <Box mb={3}>
                    <Grid container>
                        <Grid item>
                            <Typography variant="body1">
                                &#169; 2023 MRG
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box ml={1}>
                                <PrimaryLink href="https://github.com/gatechmrg/website/issues"
                                    openInNewTab>
                                    Report an Issue
                                </PrimaryLink>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}