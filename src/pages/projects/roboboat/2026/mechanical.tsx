import Head from "next/head";
import Header from "../../../../components/nav/Header";
import Footer from "../../../../components/nav/Footer";
import { Container, Typography } from "@mui/material";

export default function MechanicalSubsystems() {
  return (
    <>
      <Head>
        <title>Mechanical Subsystems | RoboBoat 2026</title>
      </Head>
      <div className="root-header-footer">
        <Header />
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h3" sx={{ color: 'primary.light', mb: 4 }}>
            Mechanical Subsystems
          </Typography>
          {/* Add content here */}
        </Container>
        <Footer />
      </div>
    </>
  );
}
