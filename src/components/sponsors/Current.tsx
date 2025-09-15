import { Box, Container, Typography } from "@mui/material";
import { StandardLine } from "../misc/line";

export default function Current() {
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box textAlign="center">
          <Typography variant="h2">Current Sponsors</Typography>
        </Box>

        <Box mt={1} mb={1}>
          <StandardLine width={200} height={5} centered borderRadius={3} />
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" my={1}>
          <Box
            component="img"
            src="/sponsors/sponsors_vectorized.svg"
            alt="Current Sponsors"
            sx={{
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              display: "block",
              mx: "auto",
            }}
          />
        </Box>

        <Box mt={1} mb={3}>
          <StandardLine width={200} height={5} centered borderRadius={3} />
        </Box>

        {/* Contact */}
        <Box maxWidth={600} textAlign="center" mx="auto">
          <Typography variant="body1" fontSize="1.1rem">
            If you are interested in sponsoring our organization, please email us at
          </Typography>
          <Typography variant="body1" fontSize="1.1rem">
            marinerobotics@groups.gatech.edu
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
