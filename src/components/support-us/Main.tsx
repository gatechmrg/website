import { Container, Box, Typography, Stack } from "@mui/material";
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import Header from "../nav/Header";

const options = [
    {
        label: "Individual",
        description: "I'm an individual looking to support the team.",
        href: "/support-us/individual",
        icon: <PersonIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />,
    },
    {
        label: "Company",
        description: "We're a company looking to sponsor the team.",
        href: "/support-us/sponsor",
        icon: <BusinessIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />,
    },
]

export default function Main() {
    return (
        <>
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Box textAlign="center" mb={6}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
                        Support Us
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.1rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}
                    >
                        Are you an individual or a company looking to support our adventures in autonomous robotics?
                    </Typography>
                </Box>

                <Stack spacing={3} alignItems="center">
                    {options.map(o => (
                        <Link
                            key={o.label}
                            href={o.href}
                            style={{ textDecoration: 'none', width: '100%', maxWidth: '500px' }}
                        >
                            <Box sx={{
                                display: 'block',
                                p: 3,
                                bgcolor: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderTop: '3px solid',
                                borderTopColor: 'primary.main',
                                borderRadius: 2,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.08)',
                                    transform: 'translateY(-4px)',
                                }
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    {o.icon}
                                    <Box>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                                            {o.label}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mt: 0.5 }}>
                                            {o.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    ))}
                </Stack>
            </Container>
        </>
    );
}