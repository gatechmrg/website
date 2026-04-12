import Head from "next/head";
import Header from "../../../components/nav/Header";
import Footer from "../../../components/nav/Footer";
import Main from "../../../components/projects/roboboat2026/Main";

import { Container } from "@mui/material";

export default function RoboBoat2026() {
  return (
    <>
      <Head>
        <title>RoboBoat 2026 | GT Marine Robotics Group</title>
        <meta
          name="description"
          content="Georgia Tech Marine Robotics Group's autonomous surface vehicle entry for RoboBoat 2026 competition."
        />
      </Head>

      <div className="root-header-footer">
        <Header />

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Main />
        </Container>

        <Footer />
      </div>
    </>
  );
}