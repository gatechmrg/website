import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import Link from "next/link";
import Header from "../../../../components/nav/Header";
import Footer from "../../../../components/nav/Footer";

// ── Types ────────────────────────────────────────────────────────────────────

interface SubsystemCard {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

interface ArchBullet {
  text: string;
}


// ── Design tokens ─────────────────────────────────────────────────────────────

const COLOR = {
  navy:      "#001848",
  navyDeep:  "#000f33",
  blueMid:   "#003566",
  blueWave:  "#2b7cab",
  blueLight: "#e8f4fc",
  offwhite:  "#f0eee6",
  rule:      "#d8d2c4",
} as const;

// ── Shared sub-components ─────────────────────────────────────────────────────

function UnderlineLine({
  centered = false,
  sx,
}: {
  centered?: boolean;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      sx={{
        width: 200,
        height: 5,
        bgcolor: COLOR.blueWave,
        borderRadius: 5,
        mb: 3,
        ...(centered && { mx: "auto" }),
        ...sx,
      }}
    />
  );
}

function TechTag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <Chip
      label={label}
      size="small"
      sx={{
        bgcolor: dark ? "rgba(255,255,255,0.12)" : COLOR.blueLight,
        color: dark ? "rgba(240,238,230,0.9)" : COLOR.navy,
        fontSize: "0.78rem",
        fontWeight: 400,
        height: 26,
        borderRadius: "100px",
        border: dark ? "1px solid rgba(255,255,255,0.18)" : "none",
      }}
    />
  );
}

// ── Wave SVG helpers ──────────────────────────────────────────────────────────

function WaveDownLight() {
  return (
    <Box sx={{ position: "relative", lineHeight: 0, bgcolor: COLOR.offwhite }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: COLOR.blueMid,
          zIndex: 0,
        }}
      />
      <Box
        component="svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        sx={{ display: "block", position: "relative", zIndex: 1, width: "100%", height: 70 }}
      >
        <path
          d="M0,40 C180,10 360,10 540,40 C720,70 900,70 1080,40 C1260,10 1350,10 1440,40 L1440,0 L0,0 Z"
          fill={COLOR.offwhite}
        />
      </Box>
    </Box>
  );
}

function WaveUpOffwhite() {
  return (
    <Box sx={{ position: "relative", lineHeight: 0, bgcolor: COLOR.blueMid }}>
      <Box
        component="svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        sx={{ display: "block", width: "100%", height: 70 }}
      >
        <path
          d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
          fill={COLOR.offwhite}
        />
      </Box>
    </Box>
  );
}

function WaveIntoNavy() {
  return (
    <Box sx={{ position: "relative", lineHeight: 0 }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: COLOR.navy,
          zIndex: 0,
        }}
      />
      <Box
        component="svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        sx={{ display: "block", position: "relative", zIndex: 1, width: "100%", height: 70 }}
      >
        <path
          d="M0,40 C180,10 360,10 540,40 C720,70 900,70 1080,40 C1260,10 1350,10 1440,40 L1440,0 L0,0 Z"
          fill={COLOR.blueWave}
        />
      </Box>
    </Box>
  );
}

function HorizontalRule() {
  return <Box sx={{ width: "100%", height: "10px", bgcolor: COLOR.rule }} />;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const SUBSYSTEMS: SubsystemCard[] = [
  {
    title: "Application Layer",
    description:
      "Central config.h and platform.ini files manage global macros/flags, definitions, and constants, and specific board.h define higher-level logic.",
    tags: [],
    icon: (
      <Box
        component="svg"
        viewBox="0 0 24 24"
        fill="none"
        sx={{ width: 24, height: 24, stroke: "#7fcbe8", strokeWidth: 1.5 }}
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </Box>
    ),
  },
  {
    title: "Hardware Interface",
    description:
      "Various interfaces, including Programmable IO, interrupts, and embedded communication protocols, define hardware-level interactions. Firmware interacts with indicators, sensors, and actuators like ESCs and the dropper subsystem.",
    tags: [],
    icon: (
      <Box
        component="svg"
        viewBox="0 0 24 24"
        fill="none"
        sx={{ width: 24, height: 24, stroke: "#7fcbe8", strokeWidth: 1.5 }}
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </Box>
    ),
  },
  {
    title: "Communication and Testing",
    description:
      "Information flows through the firmware using ProtoBuf, JTAG, and ROS for the testing framework, debugger, and bridge to the Jetson. Hardware-level communication and testing are possible during all stages of development.",
    tags: [],
    icon: (
      <Box
        component="svg"
        viewBox="0 0 24 24"
        fill="none"
        sx={{ width: 24, height: 24, stroke: "#7fcbe8", strokeWidth: 1.5 }}
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M8 12l3 3 5-5" />
      </Box>
    ),
  },
];

const ARCH_BULLETS: ArchBullet[] = [
  {
    text: "Organised as a set of modular packages in ROS 2 that handle perception, localization, mapping, control and high-level autonomy",
  },
  {
    text: "Lifecycle-managed nodes ensure deterministic startup/shutdown sequencing during pool and lake tests",
  },
  {
    text: "Custom message types encode mission-specific state (gate pose, buoy classification, task phase) without coupling subsystems",
  },
  {
    text: "CI pipeline runs hardware-in-the-loop Gazebo tests on every pull request, catching regressions before pool deployment",
  },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function FirmwareInfo() {
  return (
    <>
      <Header />
      {/* ── HERO ── */}
      <Box
        sx={{
          bgcolor: COLOR.navy,
          color: COLOR.offwhite,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 6 } }}>
          <Grid container spacing={5} alignItems="flex-end">

            {/* Left */}
            <Grid item xs={12} md={7}>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 300,
                  lineHeight: 1.25,
                  color: COLOR.offwhite,
                  mb: 2,
                }}
              >
                Firmware Design
              </Typography>

              <Box sx={{ width: 200, height: 4, bgcolor: COLOR.blueWave, borderRadius: 4, mb: 2.5 }} />

              <Typography
                sx={{
                  color: "rgba(240,238,230,0.8)",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  maxWidth: 480,
                  mb: 4,
                }}
              >
                Our firmware is a modular, reconfigurable interface that sits at the intersection between software 
                and hardware, acting as the bridge that converts our robotic planning into real-world action.
              </Typography>
            </Grid>

            {/* Right — hero image */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4/3",
                  backgroundImage: "url(/projects/robosub/firmware_board.jpg)",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  bgcolor: COLOR.blueMid,
                  borderRadius: 3,
                }}
              />
            </Grid>

          </Grid>
        </Container>

        {/* hero → offwhite wave */}
        <Box
          component="svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          sx={{ display: "block", width: "100%", height: { xs: 40, md: 60 } }}
        >
          <path
            d="M0,40 C200,10 400,70 600,40 C800,10 1000,70 1200,40 C1320,20 1380,20 1440,40 L1440,80 L0,80 Z"
            fill={COLOR.offwhite}
          />
        </Box>
      </Box>

      <HorizontalRule />

      {/* ── SYSTEM OVERVIEW ── */}
      <Box component="section" sx={{ bgcolor: COLOR.offwhite, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="flex-start">

            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 400, color: COLOR.navy, mb: 1 }}
              >
                System Overview
              </Typography>
              <UnderlineLine />
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 2 }}>

                Our firmware is built as a modular PlatformIO framework that supports multiple custom boards from a single shared codebase.
                We achieve this using a Product Line Architecture, which allows us to use the same fundamental firmware elements in 
                distinct board applications.  The code is organized into reusable 
                modules for motor control, sensors, safety systems, droppers, LEDs, and communications, making it easy 
                to swap hardware or expand features while keeping the top-level application logic simple.
                We use build flags to selectively include these relevant firmware packages, 
                which are all designed with similar interfaces to allow inheritance and easy swapping.

              </Typography>
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
               The firmware also integrates with the vehicle&apos;s ROS 2 software stack using Protocol Buffers over 
               serial communication, allowing the Jetson to exchange structured commands with the embedded boards.
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {[ "Python", "C++", "TeX", "C", "PlatformIO"].map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid>
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "16/18",
                    bgcolor: COLOR.rule,
                    borderRadius: 3,
                    boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                    backgroundImage: "url(/projects/robosub/firmware_position.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mt: 1,
                    textAlign: "center",
                    color: "text.secondary",
                  }}
                >
                  Abstract Placement of Firmware in Overall System
                </Typography>
              </Grid>
            </Grid>

          </Grid>
        </Container>

        {/* FULL WIDTH IMAGE */}
        <Box
          sx={{
            width: "95%",
            height: { xs: 220, md: 620 },
            mt: { xs: 4, md: 6 },
            mx: "auto",
            borderRadius: 3,
            backgroundImage: "url(/projects/robosub/firmware.png)",
            backgroundSize: '1340px auto',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>

      <HorizontalRule />

      {/* offwhite → dark blue wave */}
      <WaveDownLight />

      {/* ── SUBSYSTEMS ── */}
      <Box component="section" sx={{ bgcolor: COLOR.blueMid, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 400, color: COLOR.offwhite, textAlign: "center", mb: 1 }}
          >
            Core Subsystems
          </Typography>
          <UnderlineLine centered />

          <Grid container spacing={3} sx={{ mt: 1 }}>
            {SUBSYSTEMS.map((sub) => (
              <Grid item xs={12} md={4} key={sub.title}>
                <Box
                  sx={{
                    bgcolor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 3,
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 48, height: 48,
                      bgcolor: "rgba(43,124,171,0.25)",
                      borderRadius: 2.5,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    {sub.icon}
                  </Box>
                  <Typography sx={{ fontSize: "1.15rem", fontWeight: 400, color: COLOR.offwhite }}>
                    {sub.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(240,238,230,0.7)" }}>
                    {sub.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: "auto", pt: 1 }}>
                    {sub.tags.map((t) => (
                      <TechTag key={t} label={t} dark />
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* dark blue → offwhite wave */}
      <WaveUpOffwhite />

      {/* ── WORKFLOW ── */}
      <Box component="section" sx={{ bgcolor: COLOR.offwhite, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="flex-start">

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16/14",
                  bgcolor: COLOR.rule,
                  borderRadius: 3,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                  backgroundImage: "url(/projects/robosub/firmware_testing.jpg)",
                  backgroundSize: "160%",
                  backgroundPosition: "center",
                }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 400, color: COLOR.navy, mb: 1 }}
              >
                Development Workflow and Verification
              </Typography>
              <UnderlineLine />
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                We design the  firmware project to be practical for student development, not only for deployment. 
                Build-time scripts automatically generate PIO wrapper headers and Protocol Buffers support files, reducing the chance of hand-maintained interface drift. 
                The repository includes multiple demo environments for feature validation, Python-based serial test tools 
                for dry testing, and Pico Probe compatible debug targets for cases where standard USB serial output is 
                already occupied by the protocol bridge. Together, these tools support a workflow in which new hardware features c
                an be bench-tested in isolation before being integrated into the full vehicle.
              </Typography>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <HorizontalRule />

      {/* ── CTA ── */}
      <Box component="section" sx={{ bgcolor: COLOR.blueMid, py: { xs: 5, md: 8 } }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 400, color: COLOR.offwhite, mb: 1 }}
          >
            Explore the Firmware Base
          </Typography>
          <UnderlineLine centered />

          <Button
            href="https://github.com/gt-marine-robotics-group/firmware-base"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              bgcolor: COLOR.navy,
              color: COLOR.offwhite,
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1.05rem",
              boxShadow: "none",
              "&:hover": { bgcolor: "#235f8a" },
            }}
          >
            View on GitHub →
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
}