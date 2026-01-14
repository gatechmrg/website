import Head from "next/head";
import Header from "../../../../components/nav/Header";
import Footer from "../../../../components/nav/Footer";
import { Container, Typography } from "@mui/material";

export default function SoftwareDesign() {
  return (
    <>
      <Head>
        <title>Software Design | RoboBoat 2026</title>
      </Head>
      <div className="root-header-footer">
        <Header />
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h3" sx={{ color: 'primary.light', mb: 4 }}>
            Software Design
          </Typography>
          {/* Add content here */}
        </Container>
        <Footer />
      </div>
    </>
  );
}
