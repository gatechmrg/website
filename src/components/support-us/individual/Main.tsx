import { Container, Box, Typography, Stack } from "@mui/material";
import Link from "next/link";
import EditNoteIcon from '@mui/icons-material/EditNote';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import Header from "../nav/Header";

export default function Main() {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Box mb={6}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
                    Support Us
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                    Individual donations help us purchase parts, attend competitions, and keep our robots in the water.
                    Every contribution makes a difference — thank you for your support!
                </Typography>
            </Box>

            <Stack spacing={3}>
                <Box sx={{
                    p: 4,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderTop: '3px solid',
                    borderTopColor: 'primary.main',
                    borderRadius: 2,
                }}>
                    <Box display="flex" alignItems="center" gap={2} mb={3}>
                        <EditNoteIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                            Donating by Check
                        </Typography>
                    </Box>

                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            We are currently working out the details to donate by check.
                        </Typography>
                    </Stack>
                </Box>

                <Box sx={{
                    p: 4,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderTop: '3px solid',
                    borderTopColor: 'primary.main',
                    borderRadius: 2,
                }}>
                    <Box display="flex" alignItems="center" gap={2} mb={3}>
                        <OpenInBrowserIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                            Donating by Web Portal
                        </Typography>
                    </Box>

                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            We are currently working out the details to donate by web portal.
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}