import { KeyboardEvent, useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import CardPhoto, { CardTitleLink, cardHoverSx } from './CardPhoto';
import LinkButton from './LinkButton';
import { motion, robotxColors, sectionScrollMargin } from './colors';
import { robotx2026Page } from '../../../data/robotx2026';
import type { SystemTab } from '../../../data/robotx2026';

const pillWash = { bgcolor: 'rgba(255,255,255,0.06)', color: '#ffffff' };

const rowHairlineWarm = 'rgba(179,163,105,0.35)';

const { heading, tabs } = robotx2026Page.systems;

type TabId = SystemTab['id'];

export default function SystemsOverview() {
  const [selected, setSelected] = useState<TabId>(tabs[0].id);
  const tabRefs = useRef<Partial<Record<TabId, HTMLButtonElement | null>>>({});

  const selectByIndex = (index: number) => {
    const next = tabs[(index + tabs.length) % tabs.length].id;
    setSelected(next);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const current = tabs.findIndex(tab => tab.id === selected);
    const moves: Record<string, number> = { ArrowRight: current + 1, ArrowLeft: current - 1, Home: 0, End: tabs.length - 1 };
    if (event.key in moves) {
      event.preventDefault();
      selectByIndex(moves[event.key]);
    }
  };

  return (
    <Box
      component="section"
      id="systems"
      aria-labelledby="robotx-systems-title"
      sx={{ bgcolor: robotxColors.navy, pt: { xs: '16px', md: '24px' }, pb: { xs: '56px', md: '96px' }, scrollMarginTop: sectionScrollMargin }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', sm: 'flex-end' },
            gap: '18px',
            mb: { xs: '26px', md: '32px' },
          }}
        >
          <Typography id="robotx-systems-title" component="h2" sx={{ m: 0, fontSize: { xs: 30, md: 44 }, fontWeight: 400, letterSpacing: { md: '-0.5px' }, lineHeight: 1.2 }}>
            {heading}
          </Typography>
          <Box
            role="tablist"
            aria-label="Vehicle"
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '4px',
              p: { xs: '5px', md: '6px' },
              borderRadius: '999px',
              bgcolor: robotxColors.pillSurface,
              border: `1px solid ${robotxColors.pillBorder}`,
            }}
          >
            {tabs.map(tab => {
              const isSelected = selected === tab.id;
              return (
                <Box
                  key={tab.id}
                  component="button"
                  type="button"
                  role="tab"
                  id={`robotx-tab-${tab.id}`}
                  aria-selected={isSelected}
                  aria-controls={`robotx-panel-${tab.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  ref={(element: HTMLButtonElement | null) => { tabRefs.current[tab.id] = element; }}
                  onClick={() => setSelected(tab.id)}
                  onKeyDown={handleKeyDown}
                  sx={{
                    border: 0,
                    cursor: 'pointer',
                    font: 'inherit',
                    fontSize: { xs: 14, md: 15 },
                    fontWeight: 500,
                    minHeight: 44,
                    px: { xs: '8px', md: '20px' },
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    bgcolor: isSelected ? robotxColors.activeFill : 'transparent',
                    color: isSelected ? robotxColors.paleGold : robotxColors.light,
                    [motion.allowed]: { transition: `background-color ${motion.fast}, color ${motion.fast}` },
                    [motion.hover]: { '&:hover': isSelected ? {} : pillWash },
                    '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '2px', ...(isSelected ? {} : pillWash) },
                  }}
                >
                  {tab.label}
                </Box>
              );
            })}
          </Box>
        </Box>
        {tabs.map(tab => (
          <Box
            key={tab.id}
            role="tabpanel"
            id={`robotx-panel-${tab.id}`}
            aria-labelledby={`robotx-tab-${tab.id}`}
            hidden={selected !== tab.id}
            sx={{ display: selected === tab.id ? 'flex' : 'none', flexDirection: 'column', gap: { xs: '30px', sm: 0 } }}
          >
            {tab.rows.map(row => (
              <Box
                key={row.title}
                sx={[
                  {
                    display: { xs: 'flex', sm: 'grid' },
                    flexDirection: 'column',
                    gridTemplateColumns: { sm: '280px minmax(0, 1fr)', md: '460px minmax(0, 1fr)' },
                    gap: { xs: '10px', sm: '32px', md: '56px' },
                    alignItems: { sm: 'center' },
                    py: { sm: '26px' },
                    borderTop: { sm: `1px solid ${robotxColors.hairline}` },
                    [motion.allowed]: { transition: `border-color ${motion.fast}` },
                    [motion.hover]: { '&:hover': { borderTopColor: rowHairlineWarm } },
                    '&:has(a:focus-visible)': { borderTopColor: rowHairlineWarm },
                  },
                  cardHoverSx(1.03),
                ]}
              >
                <CardPhoto
                  src={row.image}
                  alt={row.alt}
                  href={row.href}
                  sizes="(max-width: 599px) calc(100vw - 32px), (max-width: 899px) 280px, 460px"
                  sx={{ height: { xs: 200, md: 250 } }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '10px', md: '12px' }, maxWidth: 560 }}>
                  <Typography component="h3" sx={{ m: 0, mt: { xs: '4px', sm: 0 }, fontSize: { xs: 20, md: 26 }, fontWeight: 500 }}>
                    <CardTitleLink href={row.href}>{row.title}</CardTitleLink>
                  </Typography>
                  <Typography sx={{ m: 0, fontSize: { xs: 15, md: 18 }, lineHeight: 1.6, color: robotxColors.bodySecondary }}>
                    {row.body}
                  </Typography>
                  <LinkButton href={row.href} sx={{ mt: { xs: '4px', md: '6px' } }}>
                    {row.link}
                  </LinkButton>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
