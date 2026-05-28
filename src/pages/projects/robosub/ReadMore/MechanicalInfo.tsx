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
    title: "Main Body",
    description:
      "Acrylic rods and metal plates prvide mounting surfaces for sensors and motors. The modular design allows for rapid subsystem prototype integration.",
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
    title: "Battery Tubes and Electronics Drawer",
    description:
      "External battery housing keeps the interior sleek and raises the center of buoyancy for stability. A drawer mechanism makes electroncis easy to access for maintenance.",
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
    title: "Dropper",
    description:
      "A simple down-facing dropper allows us to attempt the bin task. Markers are hydrodynamic with straight falling paths.",
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

export default function MechanicalInfo() {
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
                Mechanical Design
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
                The mechanical design is built to be modular and extensible. Cast acrylic rails provide convienient 
                mounting surfaces for sensors and subsystems, and electronics are housed in an easy-to-access drawer. 
                Water-jet legs protect bottom facing components on descent.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  bgcolor: COLOR.blueMid,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="video"
                  src="/projects/robosub/DropperAssembly.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls // temporary for debugging
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
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
                Platform Overview
              </Typography>
              <UnderlineLine />
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 2 }}>
                We built the robot around a 24-inch acrylic tube that houses the electrical systems and are supported by aluminum plates and acrylic guide rods. 
                The layout is intentionally symmetric to improve balance, with the center of buoyancy placed above the center of gravity for better stability and control. 
                Movement is provided by eight thrusters: four vertical for depth and orientation control, and four horizontal in an X-drive configuration for six-degree-of-freedom maneuvering.
              </Typography>
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                We keep the system waterproof with dual O-rings at the end of the main tube and each battery tube. 
                We also use gyroid infill for all of our 3D prints so that they flood and do not contribute excess buoyancy.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid>
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "16/10",
                    bgcolor: COLOR.rule,
                    borderRadius: 3,
                    boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                    backgroundImage: "url(/projects/robosub/sub2026.png)",
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
                  Platform CAD Assembly
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

      {/* ── DROPPER ── */}
      <Box component="section" sx={{ bgcolor: COLOR.offwhite, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="flex-start">

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16/10",
                  bgcolor: COLOR.rule,
                  borderRadius: 3,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                  backgroundImage: "url(/projects/robosub/dropper_proj.png)",
                  backgroundSize: "140%",
                  backgroundPosition: "center",
                }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 400, color: COLOR.navy, mb: 1 }}
              >
                Dropper
              </Typography>
              <UnderlineLine />
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                We designed the dropper mechanism as a simple 3D-printed two-chamber system driven by a waterproof BlueTrail servo. 
                It mounts onto the guide rods under the robot and holds two projectiles in separate slots.
                 A triangular door controlled by the servo shifts sideways to uncover one slot at a time, allowing each projectile to be released independently.
                 With minimal moving parts, the design stays compact and reduces the chance of mechanical failure.
              </Typography>
              <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#2a3a5c", mb: 3 }}>
                Each projectile is mostly cylindrical with a rounded front and a tapered rear that ends in a point. 
                We added four radial fins that match the body’s diameter and help keep the descent stable and straight. 
                We print each part in PETG and fill them with metal shot to achieve strong negative buoyancy.
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