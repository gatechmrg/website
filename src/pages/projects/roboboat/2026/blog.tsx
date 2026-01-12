import Head from "next/head";
import Header from "../../../../components/nav/Header";
import Footer from "../../../../components/nav/Footer";
import { Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";


const milestones = [
  {
    id: "team-recruitment-and-onboarding",
    date: "2025-08-01",
    title: "Team Recruitment and Onboarding",
    details:
      "Conducted fall recruiting to expand the RoboBoat team, onboard new members, and establish project roles and development expectations."
  },
  {
    id: "platform-realignment-and-program-launch",
    date: "2025-10-31",
    title: "Platform Realignment and Program Launch",
    details:
      "Shifted primary development from the WAM-V platform to BlueBoat to maintain architectural alignment with RobotX. This decision enabled participation in RoboBoat despite the constrained schedule leading into the February competition."
  },
  {
    id: "stinger-tug-training-completion",
    date: "2025-11-15",
    title: "Stinger Tug Training Completion",
    details:
      "Completed the Stinger Tug training program with on-water testing of member-built platforms, validating system assembly, controls, and operational readiness."
  },
  {
    id: "competition-software-development",
    date: "2026-02-01",
    title: "Competition Software Development",
    details:
      "Focused development on custom autonomy, perception, and mission-planning software packages tailored to RoboBoat competition tasks."
  }
];

export default function RoboBoat2026Blog() {
  return (
    <>
      <Head>
        <title>RoboBoat 2026 Blog | GT Marine Robotics Group</title>
      </Head>
      <div className="root-header-footer">
        <Header />
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h3" sx={{ color: 'primary.light', mb: 4 }}>
            RoboBoat 2026 Blog Page
          </Typography>

          {/* Milestone Sections */}
          {milestones.map(milestone => (
            <Box key={milestone.id} id={milestone.id} mb={6}>
              <Typography
                variant="h4"
                sx={{ color: 'primary.main', fontWeight: 700, mb: 2, scrollMarginTop: '90px' }}
              >
                {milestone.title}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                {new Date(milestone.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                {milestone.details}
              </Typography>
            </Box>
          ))}
          {/* Back Button */}
          <Box textAlign="center" mt={8} mb={4}>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Link href="/projects/roboboat/2026/timeline" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    borderRadius: 2,
                    letterSpacing: '0.5px',
                    textTransform: 'none',
                    color: 'white',
                  }}
                >
                  Back to Development Timeline
                </Button>
              </Link>
              <Link href="/projects/roboboat/2026" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    borderRadius: 2,
                    letterSpacing: '0.5px',
                    textTransform: 'none',
                    color: 'white',
                  }}
                >
                  Back to RoboBoat 2026
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
        <Footer />
      </div>
    </>
  );
}
