import { Container, Box } from "@mui/material";
import React, { useState } from "react";

const emailUser = "marinerobotics";
const emailDomain = "groups.gatech.edu";

/* ─────────────────────────────────────────────
   Win2K design tokens
───────────────────────────────────────────── */
const W2K = {
  desktop: "#008080",          // classic teal desktop
  silver: "#c0c0c0",
  darkGray: "#808080",
  lightGray: "#d4d0c8",
  white: "#ffffff",
  black: "#000000",
  titleBar: "#000080",         // classic navy title bar
  titleBarText: "#ffffff",
  btnFace: "#d4d0c8",
  btnHighlight: "#ffffff",
  btnShadow: "#808080",
  btnDarkShadow: "#404040",
  selectBlue: "#0a246a",
  selectText: "#ffffff",
};

/* ─── reusable Win2K raised / sunken border styles ─── */
const raised = {
  borderTop: `2px solid ${W2K.btnHighlight}`,
  borderLeft: `2px solid ${W2K.btnHighlight}`,
  borderRight: `2px solid ${W2K.btnDarkShadow}`,
  borderBottom: `2px solid ${W2K.btnDarkShadow}`,
};
const sunken = {
  borderTop: `2px solid ${W2K.btnDarkShadow}`,
  borderLeft: `2px solid ${W2K.btnDarkShadow}`,
  borderRight: `2px solid ${W2K.btnHighlight}`,
  borderBottom: `2px solid ${W2K.btnHighlight}`,
};

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

/** Klassic Window chrome */
function Win2KWindow({
  title,
  icon,
  children,
  style,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: W2K.lightGray,
        ...raised,
        fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
        fontSize: 11,
        ...style,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: `linear-gradient(to right, ${W2K.titleBar}, #1084d0)`,
          padding: "3px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          userSelect: "none",
        }}
      >
        <span
          style={{
            color: W2K.titleBarText,
            fontWeight: "bold",
            fontSize: 11,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {icon && <span style={{ fontSize: 14 }}>{icon}</span>}
          {title}
        </span>
        {/* Window buttons */}
        <div style={{ display: "flex", gap: 2 }}>
          {["_", "□", "✕"].map((btn) => (
            <button
              key={btn}
              style={{
                width: 16,
                height: 14,
                background: W2K.btnFace,
                ...raised,
                border: "none",
                cursor: "default",
                fontSize: 9,
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                lineHeight: 1,
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Window body */}
      <div style={{ padding: "8px 10px 10px" }}>{children}</div>
    </div>
  );
}

/** Classic group-box (like a fieldset with Win2K style) */
function GroupBox({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: `1px solid ${W2K.btnShadow}`,
        borderTop: `1px solid ${W2K.btnShadow}`,
        marginTop: 8,
        padding: "12px 10px 10px",
        position: "relative",
        background: W2K.lightGray,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: -8,
          left: 8,
          background: W2K.lightGray,
          padding: "0 4px",
          fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
          fontSize: 11,
          fontWeight: "bold",
          color: W2K.black,
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

/** Win2K radio-button style row */
function RadioRow({
  label,
  checked,
  onClick,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 0",
        cursor: "default",
        fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
        fontSize: 11,
        color: W2K.black,
        userSelect: "none",
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: W2K.white,
          ...sunken,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {checked && (
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: W2K.black,
            }}
          />
        )}
      </div>
      {label}
    </div>
  );
}

/** Win2K list-view row */
function ListRow({
  icon,
  label,
  value,
  selected,
  onClick,
}: {
  icon: string;
  label: string;
  value: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "2px 4px",
        cursor: "default",
        background: selected ? W2K.selectBlue : "transparent",
        color: selected ? W2K.selectText : W2K.black,
        userSelect: "none",
        fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
        fontSize: 11,
      }}
    >
      <span style={{ marginRight: 6, fontSize: 16 }}>{icon}</span>
      <span style={{ flex: 1 }}>{label}</span>
      <span style={{ minWidth: 80, textAlign: "right" }}>{value}</span>
    </div>
  );
}

/** Checkbox row */
function CheckRow({
  checked,
  faded,
  label,
}: {
  checked: boolean;
  faded: boolean;
  label: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "2px 0",
        fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
        fontSize: 11,
        color: faded ? W2K.btnShadow : W2K.black,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          background: W2K.white,
          ...sunken,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: 10,
          fontWeight: "bold",
          color: W2K.black,
        }}
      >
        {checked ? "✓" : ""}
      </div>
      {label}
    </div>
  );
}

/** Classic toolbar button */
function ToolbarBtn({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick?: () => void;
}) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        background: W2K.btnFace,
        border: "none",
        ...(pressed ? sunken : raised),
        padding: "3px 10px",
        fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
        fontSize: 11,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        minWidth: 50,
      }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const tiers = [
  {
    label: "Platinum",
    icon: "🏆",
    color: "#E5E4E2",
    amount: "$10,000+",
    perks: [
      true, true, true, true, true, true, true,
    ],
  },
  {
    label: "Gold",
    icon: "🥇",
    color: "#B3A369",
    amount: "$5,000+",
    perks: [
      true, true, true, true, true, true, false,
    ],
  },
  {
    label: "Silver",
    icon: "🥈",
    color: "#C0C0C0",
    amount: "$1,000+",
    perks: [
      true, true, true, true, false, false, false,
    ],
  },
  {
    label: "Bronze",
    icon: "🥉",
    color: "#CD7F32",
    amount: "$200+",
    perks: [
      true, true, false, false, false, false, false,
    ],
  },
];

const perkLabels = [
  "Logo on website",
  "Access to resume book",
  "Social media highlight",
  "Logo on T-shirt",
  "Logo on ground station",
  "Recruiting event",
  "Sponsor feature on website",
];

const wayItems = [
  {
    icon: "💵",
    label: "Monetary Sponsorship",
    desc: "Cover costs for parts, travel, competition fees, and more. Tax receipts provided.",
  },
  {
    icon: "🎁",
    label: "Gifts in Kind",
    desc: "Hardware, tools, software licenses, or materials that directly support our work. Receipts for tax purposes available.",
  },
  {
    icon: "🤝",
    label: "Direct Support",
    desc: "Access to facilities, equipment, or expertise. If your company has resources that could help, we would love to hear from you.",
  },
];

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function Main() {
  const [selectedTier, setSelectedTier] = useState(0);
  const [selectedWay, setSelectedWay] = useState(0);

  const tier = tiers[selectedTier];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: W2K.desktop,
        py: 3,
        px: 2,
        fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
      }}
    >
      {/* ── Task Bar (decorative) ── */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          background: W2K.lightGray,
          borderTop: `2px solid ${W2K.btnHighlight}`,
          display: "flex",
          alignItems: "center",
          gap: 2,
          padding: "0 4px",
          zIndex: 100,
        }}
      >
        {/* Start button */}
        <button
          style={{
            background: W2K.btnFace,
            ...raised,
            border: "none",
            height: 22,
            padding: "0 8px",
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
            fontWeight: "bold",
            fontSize: 11,
            cursor: "default",
          }}
        >
          <span style={{ fontSize: 14 }}>🪟</span> Start
        </button>
        {/* Divider */}
        <div
          style={{
            width: 2,
            height: 22,
            borderLeft: `1px solid ${W2K.btnShadow}`,
            borderRight: `1px solid ${W2K.btnHighlight}`,
          }}
        />
        {/* Active "window" button */}
        <button
          style={{
            background: W2K.btnFace,
            ...sunken,
            border: "none",
            height: 22,
            padding: "0 8px",
            fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
            fontSize: 11,
            cursor: "default",
            display: "flex",
            alignItems: "center",
            gap: 4,
            minWidth: 120,
          }}
        >
          <span>💙</span> Sponsor MRG!
        </button>
        {/* Clock */}
        <div style={{ marginLeft: "auto", fontSize: 11, padding: "0 8px", color: W2K.black }}>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>

      <Container maxWidth="lg" sx={{ pb: 6 }}>
        {/* ══ Main Window ══ */}
        <Win2KWindow title="Sponsor MRG — Marine Robotics Group @ Georgia Tech" icon="💙" style={{ marginBottom: 12 }}>
          {/* Menu bar */}
          <div
            style={{
              display: "flex",
              gap: 0,
              marginBottom: 4,
              borderBottom: `1px solid ${W2K.btnShadow}`,
              paddingBottom: 2,
            }}
          >
            {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((m) => (
              <span
                key={m}
                style={{
                  padding: "1px 6px",
                  fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                  fontSize: 11,
                  color: W2K.black,
                  cursor: "default",
                  userSelect: "none",
                }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              gap: 2,
              padding: "2px 0",
              borderBottom: `1px solid ${W2K.btnShadow}`,
              marginBottom: 6,
              flexWrap: "wrap",
            }}
          >
            <ToolbarBtn icon="⬅️" label="Back" />
            <ToolbarBtn icon="➡️" label="Forward" />
            <ToolbarBtn icon="🔄" label="Refresh" />
            <ToolbarBtn icon="🏠" label="Home" />
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 4, marginLeft: 8 }}>
              <span style={{ fontSize: 11, fontFamily: '"Tahoma", sans-serif', color: W2K.black }}>Address:</span>
              <div
                style={{
                  flex: 1,
                  background: W2K.white,
                  ...sunken,
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 4px",
                  fontFamily: '"Tahoma", "MS Sans Serif", monospace',
                  fontSize: 11,
                  color: W2K.black,
                }}
              >
                https://mrg.gatech.edu/support-us/sponsor
              </div>
            </div>
            <ToolbarBtn icon="➤" label="Go" />
          </div>

          {/* Page headline */}
          <div
            style={{
              background: `linear-gradient(to right, ${W2K.titleBar}, #1084d0)`,
              color: W2K.white,
              padding: "6px 12px",
              fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>🚢</span> Sponsor Our Team
          </div>

          <p
            style={{
              fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
              fontSize: 11,
              color: W2K.black,
              lineHeight: 1.6,
              margin: "0 0 10px",
            }}
          >
            Corporate sponsorships help us compete at the highest level. We recognize contributions at four different tier
            levels. We also offer three ways for companies to support the Marine Robotics Group.
          </p>

          {/* ── Two-panel layout ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {/* LEFT: Sponsorship Tiers */}
            <Win2KWindow title="Sponsorship Tiers" icon="🏅">
              {/* List view */}
              <div
                style={{
                  background: W2K.white,
                  ...sunken,
                  marginBottom: 8,
                  minHeight: 100,
                }}
              >
                {/* List header */}
                <div
                  style={{
                    display: "flex",
                    borderBottom: `1px solid ${W2K.btnShadow}`,
                  }}
                >
                  {["Tier", "Amount"].map((h) => (
                    <div
                      key={h}
                      style={{
                        flex: h === "Tier" ? 1 : 0,
                        minWidth: h === "Amount" ? 80 : undefined,
                        padding: "2px 6px",
                        background: W2K.btnFace,
                        ...raised,
                        fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                        fontSize: 11,
                        fontWeight: "bold",
                        color: W2K.black,
                        cursor: "default",
                        textAlign: h === "Amount" ? "right" : "left",
                      }}
                    >
                      {h}
                    </div>
                  ))}
                </div>
                {tiers.map((t, i) => (
                  <ListRow
                    key={t.label}
                    icon={t.icon}
                    label={t.label}
                    value={t.amount}
                    selected={selectedTier === i}
                    onClick={() => setSelectedTier(i)}
                  />
                ))}
              </div>

              {/* Perks panel for selected tier */}
              <GroupBox label={`${tier.icon} ${tier.label} — ${tier.amount}`}>
                {perkLabels.map((perk, i) => (
                  <CheckRow key={perk} checked={tier.perks[i]} faded={!tier.perks[i]} label={perk} />
                ))}
              </GroupBox>
            </Win2KWindow>

            {/* RIGHT: Ways to Sponsor */}
            <Win2KWindow title="Ways to Sponsor" icon="💰">
              <GroupBox label="Select a sponsorship type:">
                {wayItems.map((w, i) => (
                  <RadioRow
                    key={w.label}
                    label={`${w.icon}  ${w.label}`}
                    checked={selectedWay === i}
                    onClick={() => setSelectedWay(i)}
                  />
                ))}
              </GroupBox>

              {/* Description panel */}
              <div
                style={{
                  marginTop: 10,
                  background: W2K.white,
                  ...sunken,
                  padding: "8px",
                  fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                  fontSize: 11,
                  color: W2K.black,
                  lineHeight: 1.6,
                  minHeight: 70,
                }}
              >
                <strong>{wayItems[selectedWay].icon} {wayItems[selectedWay].label}</strong>
                <br />
                {wayItems[selectedWay].desc}
              </div>

              {/* Contact section */}
              <GroupBox label="Contact Us">
                <p
                  style={{
                    fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                    fontSize: 11,
                    color: W2K.black,
                    margin: "0 0 8px",
                    lineHeight: 1.6,
                  }}
                >
                  For sponsorship inquiries, please contact:
                </p>
                <div
                  style={{
                    background: W2K.white,
                    ...sunken,
                    padding: "4px 8px",
                    fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                    fontSize: 11,
                    color: "#0000cc",
                    textDecoration: "underline",
                    cursor: "pointer",
                    display: "inline-block",
                  }}
                  onClick={() => (window.location.href = `mailto:${emailUser}@${emailDomain}`)}
                >
                  {emailUser}&#64;{emailDomain}
                </div>

                <div style={{ marginTop: 10, display: "flex", gap: 4, justifyContent: "flex-end" }}>
                  <button
                    onClick={() => (window.location.href = `mailto:${emailUser}@${emailDomain}`)}
                    style={{
                      background: W2K.btnFace,
                      ...raised,
                      border: "none",
                      padding: "3px 14px",
                      fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                      fontSize: 11,
                      cursor: "default",
                      minWidth: 60,
                    }}
                  >
                    OK
                  </button>
                  <button
                    style={{
                      background: W2K.btnFace,
                      ...raised,
                      border: "none",
                      padding: "3px 14px",
                      fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                      fontSize: 11,
                      cursor: "default",
                      minWidth: 60,
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </GroupBox>
            </Win2KWindow>
          </div>

          {/* Status bar */}
          <div
            style={{
              marginTop: 8,
              display: "flex",
              gap: 4,
              borderTop: `1px solid ${W2K.btnShadow}`,
              paddingTop: 4,
            }}
          >
            {[
              "✅ Done",
              "🌐 Internet",
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  ...sunken,
                  padding: "1px 8px",
                  fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                  fontSize: 11,
                  color: W2K.black,
                  flex: i === 0 ? 1 : 0,
                  minWidth: i === 1 ? 100 : undefined,
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </Win2KWindow>

        {/* ── Smaller dialog: "Did You Know?" ── */}
        <Win2KWindow title="Tip of the Day" icon="💡" style={{ maxWidth: 400 }}>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              padding: "4px 0",
            }}
          >
            <span style={{ fontSize: 32 }}>💡</span>
            <p
              style={{
                fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                fontSize: 11,
                color: W2K.black,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <strong>Did you know?</strong> Platinum sponsors receive a large logo on both the annual club
              T-shirt <em>and</em> the ground station at competitions — plus a dedicated recruiting event!
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
            <button
              style={{
                background: W2K.btnFace,
                ...raised,
                border: "none",
                padding: "3px 14px",
                fontFamily: '"Tahoma", "MS Sans Serif", Arial, sans-serif',
                fontSize: 11,
                cursor: "default",
              }}
            >
              Close
            </button>
          </div>
        </Win2KWindow>
      </Container>
    </Box>
  );
}
