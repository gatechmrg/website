import { Box, Container, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";
import { sponsorTiers } from '../../data/sponsors';

export default function Current() {
    return (
        <Box mt={0} sx={{
            background: 'linear-gradient(to bottom, white 80%, #003566 98%)',
            bgcolor: 'white',
            mx: -3,
            px: 3,
            pt: 4,
            pb: 8,
        }}>
            <Container maxWidth="lg">
                <Box textAlign="center">
                    <Typography variant="h2" sx={{ color: '#003566' }}>Current Sponsors</Typography>
                </Box>
                <Box mt={1} mb={4}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>

                {sponsorTiers.map((tier) => (
                    <Box key={tier.label} mb={6}>
                        <Box display="flex" alignItems="center" gap={2} mb={3}>
                            <Box sx={{ flex: 1, height: '1px', bgcolor: tier.color, opacity: 0.4 }} />
                            <Typography variant="h5" sx={{ color: tier.color, fontWeight: 600, whiteSpace: 'nowrap' }}>
                                {tier.label}
                            </Typography>
                            <Box sx={{ flex: 1, height: '1px', bgcolor: tier.color, opacity: 0.4 }} />
                        </Box>

                        <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="stretch" gap={4}>
                            {tier.sponsors.map((sponsor) => (
                                tier.label === 'Platinum' ? (
                                    <Box key={sponsor.name} sx={{
                                        p: 3,
                                        bgcolor: 'rgba(0,0,0,0.03)',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderTop: '3px solid #000000',
                                        borderRadius: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 2,
                                        width: 280,
                                    }}>
                                        <Box
                                            component="img"
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            sx={{ maxHeight: 80, maxWidth: 200, width: 'auto', height: 'auto', objectFit: 'contain', opacity: 0.85 }}
                                        />
                                        <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.5)', textAlign: 'center' }}>
                                            {sponsor.description}
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Box
                                        key={sponsor.name}
                                        component="img"
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        sx={{
                                            height: tier.label === 'Gold'   ? 60
                                                  : tier.label === 'Silver' ? 50
                                                  : 40,
                                            width: 'auto',
                                            opacity: 0.85,
                                            filter: 'brightness(1.1)',
                                            transition: 'opacity 0.2s',
                                            '&:hover': { opacity: 1 },
                                        }}
                                    />
                                )
                            ))}
                        </Box>
                    </Box>
                ))}

                <Box mt={1} mb={3}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
            </Container>
        </Box>
    );
}