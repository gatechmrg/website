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
    title: "Thruster Power System",
    description:
      "High-volatage high-current signals supply power to eight Blue Robotics T200 motors, enabling 6 degree of freedom motion. Fuses protect the system in case of overcurrent.",
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
    title: "Computation Power System",
    description:
      "Delicate sensors and computing devices allow the robot to sense and interact with the world. When a path has been decided, motor commands are passed to the thruster power system via PWM signals.",
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
    title: "Emergency Stop",
    description:
      "Implemented using cascaded relays that meet the operating requirments of each component. An externally-mounted magnet can be easily removed to kill the system to default-to-safe behavior.",
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

export default function ElectricalInfo() {
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
                Electrical Design
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
                The electrical system is composed of two common ground circuits: the computational and thruster power
                systems. Vehicle and operator safety are high priority, so we took special care to make a 
                sturdy, easy-to-use E-stop and protect delicate electronics.
              </Typography>
            </Grid>

            {/* Right — hero image */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4/3",
                  backgroundImage: "url(/projects/robosub/estop_board_3d.png)",
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
                The complete vehicle power system is composed of two common-ground circuits: the thruster power system and the computational power system. 
                The thruster power system includes the thruster power supply, emergency stopping device, 
                voltage regulation printed circuit boards (PCBs), fuses, motors, and electronic speed controllers (ESCs). 
                The computational power system includes the computational power supply, Jetson Orin Nano AI edge computing device, 
                embedded microcontrollers, IMU, DVL, Sonoptix Echo multibeam imaging sonar, and low-light cameras.
                 Each system is powered by two 4S LiPo batteries contained in external battery enclosures. 
              </Typography>

              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                  We chose to separate these systems because the thruster power system draws variable current depending on vehicle behavior and 
                 consequently has unstable voltage levels. As such, we keep voltage-sensitive and high-cost electronics within 
                 the computational power system to protect them from the harsher conditions present in the thruster power system. 
                 Also, separating each system keeps them conceptually distinct and easy to learn.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid>
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "16/21",
                    bgcolor: COLOR.rule,
                    borderRadius: 3,
                    boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                    backgroundImage: "url(/projects/robosub/electrical_diagram.png)",
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
                  Electrical Block Diagram
                </Typography>
              </Grid>
            </Grid>

          </Grid>
        </Container>
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

      {/* ── PRESTO ── */}
      <Box component="section" sx={{ bgcolor: COLOR.offwhite, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="flex-start">

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16/16",
                  bgcolor: COLOR.rule,
                  borderRadius: 3,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                  backgroundImage: "url(/projects/robosub/presto.png)",
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 400, color: COLOR.navy, mb: 1 }}
              >
                &quot;PRESTO&quot; Motor Interface Board
              </Typography>
              <UnderlineLine />
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                  We developed a new generic motor interface peripheral board, called PRESTO (Peripheral, Radio, and E-Stop), that is compatible with numerous MRG projects. 
                  The board features a Raspberry Pi Pico microcontroller board, ten servo outputs, software E-stop actuation 
                  and sensing, LED status lights, and compatibility with radio modules. The design is optimized to be interoperable 
                  within the MRG development ecosystem, enabling rapid development of future platforms with similar actuation needs.
              </Typography>
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                This is a creative approach to resource management in a multi-competition organization. 
                By developing validated, common hardware, we can focus more time on novel feature 
                development and field testing instead of base-level system needs.
              </Typography>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <HorizontalRule />

      {/* ── ESTOP ── */}
      <Box component="section" sx={{ bgcolor: COLOR.offwhite, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="flex-start">

            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 400, color: COLOR.navy, mb: 1 }}
              >
                Emergency Stop
              </Typography>
              <UnderlineLine />
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                 We built an emergency stop into the thruster power system to cut power through a mechanical disconnect when activated by an assistant diver. The system is designed to fail safe, meaning power is disconnected by default unless the stop mechanism is actively engaged.
              </Typography>
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                The disconnect is implemented using an automotive relay system controlled by an assistant PCB with Hall-effect sensing. The design uses two relays in a cascaded setup.
              </Typography>
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                To activate the system, a magnet mounted outside the AUV creates a magnetic field through the vehicle body. A Hall-effect sensor detects the magnetic field and switches a small 5 V relay, allowing 16.8 V battery power to flow through the load circuit. That relay then energizes the coil of a larger 200 A relay, which handles the higher current and voltage required by the thrusters.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16/16",
                  bgcolor: COLOR.rule,
                  borderRadius: 3,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                  backgroundImage: "url(/projects/robosub/cascaded_estop.png)",
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          </Grid>
          
        </Container>
      </Box>

      <HorizontalRule />

      {/* ── BATTERY TUBES ── */}
      <Box component="section" sx={{ bgcolor: COLOR.offwhite, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="flex-start">

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16/11.5",
                  bgcolor: COLOR.rule,
                  borderRadius: 3,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                  backgroundImage: "url(/projects/robosub/mechanical_cover.png)",
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 400, color: COLOR.navy, mb: 1 }}
              >
                Battery Tubes
              </Typography>
              <UnderlineLine />
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                Our system is powered by four 4s LiPo batteries, two to each power system. The batteries are housed in externally mounted battery tubes. We chose this design to 
                maintain a high center of bouyancy for stability, allow &quot;hot-swapping&quot; batteries for efficient field testing, and maintain an orderly interior drawer.
              </Typography>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <HorizontalRule />


      <Footer />
    </>
  );
}