import { Box, Grid, Typography, IconButton, Tooltip, Button } from "@mui/material";
import { PrimaryLink } from "../misc/links";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

const user = "marinerobotics"
const domain = "groups.gatech.edu"

const socialLinks = [
    {
        label: "YouTube",
        href: "https://www.youtube.com/@gatechMRG",
        icon: <YouTubeIcon fontSize="large" />,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/gatechmrg/",
        icon: <InstagramIcon fontSize="large" />,
    },
    {
        label: "GitHub",
        href: "https://github.com/gt-marine-robotics-group",
        icon: <GitHubIcon fontSize="large" />,
    },
    {
        label: "Notion",
        href: "https://gt-mrg.notion.site/GT-MRG-Team-Home-473529159696471bb0dac927b7ebe360",
        icon: <MenuBookIcon fontSize="large" />,
    },
    {
        label: "Location",
        href: "https://goo.gl/maps/eTw7mVBfbWXGP9GE9?coh=178572&entry=tt",
        icon: <PlaceIcon fontSize="large" />,
    },
]

export default function Footer() {
    return (
        <Box>
            <Box sx={{ position: 'relative', width: '100%', height: 80, overflow: 'hidden' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g>
                        <use xlinkHref="#gentle-wave" x="0" y="0" fill="#001848" />
                        <use xlinkHref="#gentle-wave" x="352" y="0" fill="#001848" />
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            from="0,0"
                            to="-352,0"
                            dur="14s"
                            repeatCount="indefinite"
                        />
                    </g>
                </svg>
            </Box>

            <Box overflow="hidden" zIndex={10} bgcolor="#001848" pt={5} pb={2} px={13}
                sx={{ clipPath: 'url(#footer-clip-path)' }}>

                <Box display="flex" justifyContent="center" gap={1} mb={4} flexWrap="wrap">
                    <Box width="100%" display="flex" justifyContent="center" mb={2}>
                        <Button
                            component="a"
                            href="/support-us"
                            variant="outlined"
                            sx={{
                                bgcolor: '#B3A369',
                                color: '#FFFFFF',
                                borderRadius: '5px',
                                px: 4,
                                py: 1,
                                fontSize: '1rem',
                                '&:hover': {
                                    bgcolor: '#857437'
                                }
                            }}>
                            Support or Sponsor Us!
                        </Button>
                    </Box>
                    {socialLinks.map(({ label, href, icon }) => (
                        <Tooltip title={label} key={label}>
                            <IconButton
                                component="a"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: '#fff', '&:hover': { color: '#90caf9' } }}
                            >
                                {icon}
                            </IconButton>
                        </Tooltip>
                    ))}
                    <Tooltip title="Email Us">
                        <IconButton
                            onClick={() => window.location.href = `mailto:${user}@${domain}`}
                            sx={{ color: '#fff', '&:hover': { color: '#90caf9' } }}
                        >
                            <EmailIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Box mb={3}>
                    <Grid container justifyContent="center" gap={1}>
                        <Grid item>
                            <Typography variant="body1">
                                &#169; 2023-2026 MRG
                            </Typography>
                        </Grid>
                        <Grid item>
                            <PrimaryLink href="https://github.com/gatechmrg/website/issues" openInNewTab>
                                Report an Issue
                            </PrimaryLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}