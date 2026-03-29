import { Container, Box, Typography, Stack } from "@mui/material";
import Link from "next/link";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export default function Main() {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Box mb={6}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
                    Sponsor Us
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                    Corporate sponsorships help us compete at the highest level. We recognize contributions at four different tier levels. 
                    We also offer two ways for companies to support the Marine Robotics Group.
                </Typography>
            </Box>

            <Box mb={6}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                    Sponsorship Tiers
                </Typography>
                <Stack spacing={2}>
                    {[
                        { label: 'Platinum', color: '#E5E4E2', amount: '$5,000+' },
                        { label: 'Gold',     color: '#B3A369', amount: '$2,500+' },
                        { label: 'Silver',   color: '#C0C0C0', amount: '$1,000+' },
                        { label: 'Bronze',   color: '#CD7F32', amount: '$500+'   },
                    ].map(tier => (
                        <Box key={tier.label} sx={{
                            p: 3,
                            bgcolor: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderLeft: '4px solid',
                            borderLeftColor: tier.color,
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <Box display="flex" alignItems="center" gap={2}>
                                <WorkspacePremiumIcon sx={{ fontSize: '2rem', color: tier.color }} />
                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                                    {tier.label}
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                {tier.amount}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Box>

            <Stack spacing={3}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                    Ways to Sponsor
                </Typography>
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
                        <AttachMoneyIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                            Cash Sponsorship
                        </Typography>
                    </Box>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            We are currently working out the details for cash sponsorship.
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
                        <CardGiftcardIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                            Gifts in Kind
                        </Typography>
                    </Box>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            We also welcome gifts in kind — hardware, tools, software licenses, or other
                            materials that directly support our work. If your company has resources that
                            could benefit our team, we'd love to hear from you.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            Receipts for gifts in kind can be provided for tax purposes. Please note that high
                            value gifts may require additional documentation to determine fair market value, such
                            as a third-party appraisal or detailed product information.
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}