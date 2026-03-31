import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";
import { PrimaryLink } from "../misc/links";
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const user = "marinerobotics"
const domain = "groups.gatech.edu"

const handleEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = `mailto:${user}@${domain}`
}

const steps = [
    {
        number: "01",
        title: "Express Your Interest",
        icon: <AssignmentIcon sx={{ fontSize: 100, color: '#ffffff' }} />,
        content: (
            <Box>
                <Typography variant="body1" fontSize="1.25rem" display="inline">
                    Fill out our{' '}
                </Typography>
                <PrimaryLink
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=u5ghSHuuJUuLem1_Mvqgg9BZ29qxkplPkU60qhtfRO5URU9ESDlEVkFWWVVWTkxFSENGMDM0TVYxQyQlQCN0PWcu"
                    openInNewTab
                    fontSize="1.25rem">
                    interest form
                </PrimaryLink>
                <Typography variant="body1" fontSize="1.25rem" display="inline">
                    , and we will get back to you with more information. You can also meet us at the Fall and Winter Organization Fairs at Georgia Tech.
                </Typography>
                <Box mt={3}>
                    <Typography variant="body1" fontSize="1.25rem">
                        Feel free to{' '}
                        <a href="#" onClick={handleEmail} style={{ color: '#B3A369', cursor: 'pointer' }}>
                            email us
                        </a>
                        {' '}with any questions you may have!
                    </Typography>
                </Box>
            </Box>
        )
    },
    {
        number: "02",
        title: "Onboarding Project",
        icon: <BuildIcon sx={{ fontSize: 100, color: '#ffffff' }} />,
        content: (
            <Box>
                <Typography variant="body1" fontSize="1.25rem">
                    New members join a small onboarding group led by an experienced team mentor.
                    Together, you will build a <strong>Stinger tug</strong> — a hands-on project
                    designed to get you up to speed with our tools, workflows, and team culture.
                </Typography>
                <Box mt={3}>
                    <Typography variant="body1" fontSize="1.25rem">
                        This is a low-pressure environment to ask questions, learn the ropes,
                        and get to know your fellow new members before joining a full project team.
                    </Typography>
                </Box>
            </Box>
        )
    },
    {
        number: "03",
        title: "Full Membership",
        icon: <GroupsIcon sx={{ fontSize: 100, color: '#ffffff' }} />,
        content: (
            <Box>
                <Typography variant="body1" fontSize="1.25rem">
                    After completing the onboarding project, you will join our competition efforts
                    as a full member. From here you will take on real responsibilities —
                    designing, building, and testing systems that compete at the international level.
                </Typography>
                <Box mt={3}>
                    <Typography variant="body1" fontSize="1.25rem">
                        Full members are expected to attend regular meetings, contribute to their
                        subteam, and help mentor the next wave of new members.
                    </Typography>
                </Box>
            </Box>
        )
    },
]

export default function Main() {
    return (
        <Box my={12}>
            <Container maxWidth="xl">
                <Box mb={8} textAlign="center">
                    <Typography variant="h3" fontWeight={500}>
                        Join our crew!
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={1}>
                        <StandardLine width={200} height={5} borderRadius={5} />
                    </Box>
                    <Typography variant="body1" fontSize="1.25rem" mt={3}>
                        Here is how to get involved with the Marine Robotics Group.
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="stretch">
                    {steps.map((step, i) => (
                        <Box key={step.number}>
                            <Grid container spacing={4} alignItems="center">
                                <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Box
                                        sx={{
                                            width: 180,
                                            height: 180,
                                            borderRadius: '50%',
                                            border: '3px solid',
                                            borderColor: 'primary.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {step.icon}
                                    </Box>
                                    <Typography variant="h6" color="primary" mt={2} fontWeight={600}>
                                        Step {step.number}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Typography variant="h4" fontWeight={500} mb={1}>
                                        {step.title}
                                    </Typography>
                                    <StandardLine width={120} height={4} borderRadius={4} />
                                    <Box mt={3}>
                                        {step.content}
                                    </Box>
                                </Grid>
                            </Grid>

                            {i < steps.length - 1 && (
                                  <Box display="flex" justifyContent="center" py={1}>
                                      <KeyboardArrowDownIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                                  </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}