import { Box, Container, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";
import { pastSponsors } from '../../data/sponsors';
import Image from 'next/image';

const logoSet = pastSponsors;

export default function Acknowledgements() {
  return (
    <Box mt={4}>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <Container maxWidth="lg">
        {/* Title */}
        <Box textAlign="center">
          <Typography
            sx={{
              color: '#FFFFFF',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              fontSize: 'clamp(1.5rem, 4vw, 3.75rem)',
            }}
          >
            Acknowledgements
          </Typography>
        </Box>

        <Box mt={1} mb={1}>
          <StandardLine width={200} height={5} centered borderRadius={3} />
        </Box>

        <Box px={2} py={1} textAlign="center">
          <Box display="flex" alignItems="center" gap={2} mb={3}>
            <Box sx={{ flex: 1, height: '1px', bgcolor: '#ffffff', opacity: 0.4 }} />
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                fontSize: 'clamp(1.2rem, 3vw, 3.5rem)',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              Past Sponsors and Supporters
            </Typography>
            <Box sx={{ flex: 1, height: '1px', bgcolor: '#ffffff', opacity: 0.4 }} />
          </Box>

          <Box display="flex" justifyContent="center" mb={4}>
            <Typography
              variant="body1"
              sx={{ color: '#FFFFFF', maxWidth: 800, textAlign: 'center' }}
            >
              We are grateful for the support of our past sponsors and supporters, who have
              helped us get to where we are today.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Marquee lives outside Container to avoid layout push.
          overflow + contain prevent it from widening the page. */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          contain: 'inline-size',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          pt: 1,
          pb: 6,
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            animation: 'marquee-scroll 18s linear infinite',
          }}
        >
          {[0, 1].map((copyIndex) => (
            <Box
              key={copyIndex}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                px: { xs: '1.25rem', sm: '1.75rem', md: '2.5rem' },
              }}
              aria-hidden={copyIndex === 1 ? true : undefined}
            >
              {logoSet.map((sponsor) => (
                <Box
                  key={sponsor.name}
                  sx={{
                    position: 'relative',
                    width: { xs: 80, sm: 110, md: 140 },
                    height: { xs: 35, sm: 48, md: 60 },
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    style={{
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.75,
                    }}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
