import { Box, Container, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";
import { sponsorTiers } from '../../data/sponsors';
import { useState } from "react";
import Image from 'next/image';


const TARGET_AREA = 9600;
const MAX_W = 240;
const MAX_H = 120;

function NormalizedLogo({ src, alt, sx }: { src: string; alt: string; sx?: object }) {
    const [size, setSize] = useState({ width: MAX_W, height: MAX_H });

    function handleLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        const { naturalWidth: w, naturalHeight: h } = e.currentTarget;

        const resolvedW = w || e.currentTarget.getBoundingClientRect().width;
        const resolvedH = h || e.currentTarget.getBoundingClientRect().height;
        if (!resolvedW || !resolvedH) return;

        const scale = Math.sqrt(TARGET_AREA / (resolvedW * resolvedH));
        let finalW = resolvedW * scale;
        let finalH = resolvedH * scale;

        if (finalW > MAX_W) { finalW = MAX_W; finalH = (resolvedH / resolvedW) * MAX_W; }
        if (finalH > MAX_H) { finalH = MAX_H; finalW = (resolvedW / resolvedH) * MAX_H; }

        setSize({ width: finalW, height: finalH });
    }

    return (
        <Box sx={{ position: 'relative', width: size.width, height: size.height, ...sx }}>
            <Image
                src={src}
                alt={alt}
                fill
                onLoad={handleLoad}
                style={{ objectFit: 'contain', opacity: 0.85 }}
            />
        </Box>
    );
}

export default function Current() {
    return (
        <Box mt={0} sx={{
            background: 'linear-gradient(to bottom, white 80%, #003566 98%)',
            bgcolor: 'white',
            width: '100vw',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
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
                                        justifyContent: 'space-between',
                                        gap: 2,
                                        width: 280,
                                    }}>
                                        <NormalizedLogo
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            sx={{ filter: 'brightness(1.1)', transition: 'opacity 0.2s', '&:hover': { opacity: 1 } }}
                                        />
                                        <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.5)', textAlign: 'center' }}>
                                            {sponsor.description}
                                        </Typography>
                                    </Box>
                                ) : (
                                    <NormalizedLogo
                                        key={sponsor.name}
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        sx={{ filter: 'brightness(1.1)', transition: 'opacity 0.2s', '&:hover': { opacity: 1 } }}
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