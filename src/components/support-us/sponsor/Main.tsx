import { Container, Box, Typography, Stack } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';

const emailUser = "marinerobotics"
const emailDomain = "groups.gatech.edu"
const sponsorUser = emailUser
const sponsorDomain = emailDomain

const tiers = [
    {
        label: 'Platinum',
        color: '#E5E4E2',
        amount: '$10,000+',
        perks: [
            'Logo on website',
            'Access to resume book',
            'Sponsor highlight post on social media',
            'Logo on annual club T-shirt (large)',
            'Logo on ground station at competitions (large)',
            'Recruiting event',
            'Sponsor feature on website'
        ]
    },
    {
        label: 'Gold',
        color: '#B3A369',
        amount: '$5,000+',
        perks: [
            'Logo on website',
            'Access to resume book',
            'Sponsor highlight post on social media',
            'Logo on annual club T-shirt (medium)',
            'Logo on ground station at competitions (small)',
            'Recruiting event',
            null            
        ]
    },
    {
        label: 'Silver',
        color: '#C0C0C0',
        amount: '$1,000+',
        perks: [
            'Logo on website',
            'Access to resume book',
            'Sponsor highlight post on social media',
            'Logo on annual club T-shirt (small)',
            null,
            null,
            null
        ]
    },
    {
        label: 'Bronze',
        color: '#CD7F32',
        amount: '$200+',
        perks: [
            'Logo on website',
            'Access to resume book',
            'Sponsor shout-out on social media',
            null,
            null,
            null,
            null
        ]
    },
]

const perkLabels = [
    'Logo on website',
    'Access to resume book',
    'Sponsor highlight post on social media',
    'Logo on annual club T-shirt',
    'Logo on ground station at competitions',
    'Recruiting event',
    'Sponsor feature on website',
]

export default function Main() {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Box mb={6}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
                    Sponsor Us
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                    Corporate sponsorships help us compete at the highest level. We recognize contributions at four different tier levels.
                    We also offer three ways for companies to support the Marine Robotics Group.
                </Typography>
            </Box>

            <Box mb={6}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                    Sponsorship Tiers
                </Typography>

                {/* Tier summary cards */}
                <Stack spacing={2} mb={4}>
                    {tiers.map(tier => (
                        <Box key={tier.label} sx={{
                            p: 3,
                            bgcolor: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderLeft: '4px solid',
                            borderLeftColor: tier.color,
                            borderRadius: 2,
                        }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <WorkspacePremiumIcon sx={{ fontSize: '2rem', color: tier.color }} />
                                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                                        {tier.label}
                                    </Typography>
                                </Box>
                                <Typography variant="body1" sx={{ color: tier.color, fontWeight: 600 }}>
                                    {tier.amount}
                                </Typography>
                            </Box>
                            <Stack spacing={0.5}>
                                {perkLabels.map((perk, i) => (
                                    <Box key={perk} display="flex" alignItems="center" gap={1}>
                                        {tier.perks[i] ? (
                                            <CheckIcon sx={{ fontSize: '1rem', color: tier.color }} />
                                        ) : (
                                            <RemoveIcon sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.2)' }} />
                                        )}
                                        <Typography variant="body2" sx={{
                                            color: tier.perks[i] ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)',
                                        }}>
                                            {tier.perks[i] ?? perk}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Box>

            <Stack spacing={3}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 0, color: 'white' }}>
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
                            Monetary Sponsorship
                        </Typography>
                    </Box>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            We greatly appreciate monetary sponsorships, which help us cover costs for parts, travel, competition fees, and more.
                            If your company is interested in providing a monetary sponsorship, please reach out to us.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            Tax receipts can be provided for monetary sponsorships.
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
                            could benefit our team, we would love to hear from you.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            Receipts for gifts in kind can be provided for tax purposes. Please note that high
                            value gifts may require additional documentation to determine fair market value, such
                            as a third-party appraisal or detailed product information.
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
                        <VolunteerActivismIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                            Direct Support
                        </Typography>
                    </Box>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                            We also appreciate access to facilities, equipment, or expertise that can support our projects. 
                            If your company has resources that could benefit our team, we would love to hear from you.
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <Box display="flex" justifyContent="center" mt={2}>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,1)', lineHeight: 1.6 }}>
                    For sponsorship inquiries, please contact us at:{' '}
                    <span
                        onClick={() => window.location.href = `mailto:${emailUser}@${emailDomain}`}
                        style={{ color: 'rgba(255,255,255,1)', cursor: 'pointer' }}
                    >
                        {emailUser}&#64;{emailDomain}
                    </span>
                </Typography>
            </Box>
        </Container>
    );
}