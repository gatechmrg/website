import { Box, Container, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";

export default function Current() {
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box textAlign="center">
          <Typography variant="h2">Previous Sponsors</Typography>
        </Box>

        <Box mt={1} mb={1}>
          <StandardLine width={200} height={5} centered borderRadius={3} />
        </Box>



        <Box px={2} py={1} textAlign="center">
          <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none" }}>
            <Typography component="li" variant="body1">
              Greenzie | Pattent | Altium | Dassault Systemes
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