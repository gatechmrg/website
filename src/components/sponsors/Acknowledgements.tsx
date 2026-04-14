import { Box, Container, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";

export default function Acknowledgements() {
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box textAlign="center">
          <Typography
              sx={{
              color: '#FFFFFF',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              fontSize: 'clamp(1.5rem, 4vw, 3.75rem)', // responsive scaling
              }}
          >
            Acknowledgements
          </Typography>
        </Box>

        <Box mt={1} mb={1}>
          <StandardLine width={200} height={5} centered borderRadius={3} />
        </Box>



        <Box px={2} py={1} textAlign="center">
          <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none" }}>
            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <Box sx={{ flex: 1, height: '1px', bgcolor: '#ffffff', opacity: 0.4 }} />
              <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  Past Sponsors and Supporters
              </Typography>
              <Box sx={{ flex: 1, height: '1px', bgcolor: '#ffffff', opacity: 0.4 }} />
            </Box>
            <Box display="flex" justifyContent="center" mb={2}>
                <Typography variant="body1" sx={{ color: '#FFFFFF', maxWidth: 800, textAlign: 'center' }}>
                    We are grateful for the support of our past sponsors and supporters, who have helped us get to where we are today.
                </Typography>
            </Box>
            <Typography component="li" variant="body1">
              Greenzie | Pattent | Altium | Dassault Systemes | Firefly Automatix
            </Typography>
          </Box>
        </Box>



        {/* Contact */}
        <Box maxWidth={600} textAlign="center" mx="auto">
        </Box>
      </Container>
    </Box>
  );
}