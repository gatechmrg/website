import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import Header from "../../components/nav/Header";
import Footer from "../../components/nav/Footer";
import Image from "next/image";

export default function TocaroPartnership() {
  return (
    <>
      <Head>
        <title>The Marine Robotics Group Partners with Tocaro Blue | GT MRG</title>
        <meta
          name="description"
          content="The Marine Robotics Group at Georgia Tech partners with Tocaro Blue to expand marine radar information processing."
        />
      </Head>

      <Header />

      <Container maxWidth="md" sx={{ my: 4 }}>
        {/* White background box */}
        <Box sx={{ bgcolor: "#ffffff", color: "#000000", p: 4, borderRadius: 2, boxShadow: 3 }}>
          {/* Article Title */}
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#001F54' }}>
            The Marine Robotics Group at Georgia Tech Partners with AI-Software Company Tocaro Blue to Expand Marine Radar Information Processing
          </Typography>

          {/* Article Content */}
          <Box sx={{ mt: 3, '& p': { mb: 2, lineHeight: 1.7 } }}>
            <Typography component="p">
              The Marine Robotics Group at Georgia Tech (MRG) and Tocaro Blue are working together to advance maritime autonomy with AI-supported radar signal processing. The partnership combines Tocaro Blue’s professional maritime radar processing software and development hardware with MRG’s reconfigurable autonomous surface vessel platforms and academic research expertise.
            </Typography>

            <Typography component="p">
              Tocaro Blue is a software company based in Pensacola, Florida that aims to expand the utilization of radar for maritime perception. Their mission is to “modernize legacy marine sensors with smart software,” and they believe that applying intelligent software to legacy marine sensors can unlock new capabilities in maritime perception and situational awareness.
            </Typography>

            {/* Image Placeholder */}
            <Box my={3} textAlign="center">
              <Image
                src="/media/tocaro_blue_boat.webp"
                alt="A Tocaro Blue ProteusCore-Equipped Vessel"
                width={800}
                height={450}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography variant="caption" display="block" mt={1}>
                A Tocaro Blue ProteusCore-Equipped Vessel (Credit: Tocaro Blue)
              </Typography>
            </Box>

            <Typography component="p">
              Their primary product is the ProteusCore software, which is a signal processing tool that can be implemented in existing perception technology stacks to include radar data. They also offer DevKit Evaluation Hardware, a rugged maritime computing solution pre-equipped with ProteusCore, for rapid deployment and near-term Sea Trailing.
            </Typography>

            <Typography component="p">
              MRG and Tocaro Blue share exciting goals to improve the accuracy and prevalence of maritime perception and autonomy. Supported by the Aerospace Systems Design Lab and Unmanned Collaborative Research Testbed, MRG’s existing work with Autonomous Surface Vehicles (ASVs) and sensor fusion for intelligent perception in autonomous vehicles aligns well with Tocaro Blue’s vision.
            </Typography>

            {/* Image Placeholder */}
            <Box my={3} textAlign="center">
              <Image
                src="/media/mitchell_on_lake_tocaro_blue-1.webp"
                alt="Undergraduate Researcher Mitchell Turton with MRG BlueBoat ASV"
                width={800}
                height={450}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography variant="caption" display="block" mt={1}>
                Undergraduate Researcher Mitchell Turton with MRG BlueBoat ASV at a Field Test
              </Typography>
            </Box>

            <Typography component="p">
              Following initial discussions in early Spring 2026, MRG and Tocaro Blue formalized a research partnership and sponsorship agreement. MRG is incredibly grateful for Tocaro Blue’s financial and research opportunity investment!
            </Typography>

            <Typography component="p">
              For the research project, MRG students Nicholas Lai (Electrical Engineering, Class of 2026) and Mitchell Turton (Computer Engineering, Class of 2027) have been working on characterizing uncertainty and bias in radar measurements collected in unique maritime environments, notably for the small vessels MRG develops to be tested in lake environments.
            </Typography>

            <Typography component="p">
              The team is analyzing parameters such as radar range accuracy, RF gain effects, and the influence of sea spray on measurement quality. Tocaro Blue has generously provided their ProteusCore DevKit, a Furuno 24” marine radar, and a Furuno GPS and compass to facilitate real-time development and testing.
            </Typography>

            <Typography component="p">
              So far, the MRG student team has created a procedure to solve for the model defining the range-dependent variance and bias for radar measurements. This approach uses Maximum Likelihood Estimation (MLE) to calculate how the bias and variance change as a function of range, given radar measurements and estimates of the corresponding trajectories the targets took. This procedure has been validated with a custom build MATLAB-based simulation of tracking BlueBoat ASVs with the radar and has yielded encouraging results and momentum for continued efforts.
            </Typography>

            {/* Image Placeholder */}
            <Box my={3} textAlign="center">
              <Image
                src="/media/radar_detections_tocaro_blue.webp"
                alt="Radar Detections of Moving Targets in MATLAB Simulation Environment"
                width={800}
                height={450}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography variant="caption" display="block" mt={1}>
                Radar Detections of Moving Targets in MATLAB Simulation Environment
              </Typography>
            </Box>

            <Typography component="p">
              As the student team continues to characterize the system, they are working toward performing a field experiment and collecting a full dataset in late Spring 2026. The conclusions from this research are projected to provide valuable insight into Tocaro Blue’s software system performance for small vessels.
            </Typography>

            <Typography component="p">
              The students of MRG are incredibly grateful for this opportunity to gain real experience with industry partners and hardware. Tocaro Blue’s signal processing software and development hardware provide a valuable platform for advancing research in maritime perception and autonomy. MRG looks forward to continuing to deepen a professional relationship with Tocaro Blue.
            </Typography>
          </Box>

            {/* Logos at the bottom */}
            <Box
            mt={6}
            mb={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={6} // spacing between logos
            >
            {/* Logo 1 */}
            <Box component="img"
                src="/media/tocaro_blue.webp" 
                alt="Logo 1"
                sx={{ maxHeight: 200, maxWidth: 300, objectFit: "contain" }}
            />

            {/* Logo 2 */}
            <Box component="img"
                src="/media/mrg_logo_transparent_on_light.webp" 
                alt="Logo 2"
                sx={{ maxHeight: 200, maxWidth: 200, objectFit: "contain" }}
            />
            </Box>

        </Box>

      </Container>

      <Footer />
    </>
  );
}