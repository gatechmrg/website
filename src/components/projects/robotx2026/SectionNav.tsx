import { useEffect, useState } from "react";
import { Box, Dialog, DialogContent, DialogTitle, IconButton, InputAdornment, List, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import { motion, robotxColors } from "./colors";
import { robotx2026Page } from "../../../data/robotx2026";

const { brand, sections, search } = robotx2026Page.nav;

const pillWash = { bgcolor: 'rgba(255,255,255,0.06)', color: '#ffffff' };

const searchActive = { bgcolor: 'rgba(255,255,255,0.14)', boxShadow: '0 0 0 3px rgba(179,163,105,0.18)' };

const divider = { width: '1px', height: 24, flexShrink: 0, bgcolor: 'rgba(255,255,255,0.18)', display: { xs: 'none', md: 'block' } };

interface SectionNavProps {
  topSentinelId?: string;
}

export default function SectionNav({ topSentinelId }: SectionNavProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<string>(sections[0].id);

  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const results = search.entries.filter(entry => terms.every(term => `${entry.title} ${entry.keywords}`.toLowerCase().includes(term)));

  useEffect(() => {
    const targets = sections
      .map(section => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);
    if (!targets.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    targets.forEach(target => observer.observe(target));

    const sentinel = topSentinelId ? document.getElementById(topSentinelId) : null;
    const topObserver = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) setActive(sections[0].id);
      },
      { rootMargin: '0px 0px -60% 0px' },
    );
    if (sentinel) topObserver.observe(sentinel);

    return () => {
      observer.disconnect();
      topObserver.disconnect();
    };
  }, [topSentinelId]);

  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          top: { xs: 88, md: 92 },
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          px: { xs: '12px', md: 0 },
          my: { xs: '16px', md: '31px' },
          pointerEvents: 'none',
        }}
      >
        <Box
          component="nav"
          aria-label="On this page"
          sx={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '2px', md: '4px' },
            width: { xs: '100%', md: 'auto' },
            maxWidth: '100%',
            minWidth: 0,
            p: { xs: '5px', md: '6px' },
            borderRadius: '999px',
            bgcolor: robotxColors.pillSurface,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: `1px solid ${robotxColors.pillBorder}`,
            boxShadow: { xs: '0 10px 28px rgba(0,12,36,0.35)', md: '0 12px 32px rgba(0,12,36,0.35)' },
          }}
        >
          <Typography
            component="span"
            sx={{ display: { xs: 'none', md: 'block' }, fontSize: 15, fontWeight: 700, pl: '14px', pr: '16px', color: '#ffffff', whiteSpace: 'nowrap' }}
          >
            {brand}
          </Typography>
          <Box sx={{ ...divider, mr: '6px' }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: '2px', md: '4px' },
              minWidth: 0,
              flex: { xs: 1, md: 'none' },
              overflowX: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {sections.map(section => {
              const isActive = active === section.id;
              return (
                <Box
                  key={section.id}
                  component="a"
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setActive(section.id)}
                  sx={{
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: 44,
                    px: { xs: '12px', md: '18px' },
                    borderRadius: '999px',
                    fontSize: { xs: 14, md: 15 },
                    fontWeight: 500,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    color: isActive ? robotxColors.paleGold : robotxColors.light,
                    bgcolor: isActive ? robotxColors.activeFill : 'transparent',
                    [motion.allowed]: { transition: `background-color ${motion.fast}, color ${motion.fast}` },
                    [motion.hover]: { '&:hover': isActive ? {} : pillWash },
                    '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '-2px', ...(isActive ? {} : pillWash) },
                  }}
                >
                  {section.label}
                </Box>
              );
            })}
          </Box>
          <Box sx={{ ...divider, mx: '6px' }} />
          <IconButton
            aria-label="Search the site"
            onClick={() => { setQuery(''); setOpen(true); }}
            sx={{
              ml: { xs: 'auto', md: 0 },
              width: 44,
              height: 44,
              flexShrink: 0,
              bgcolor: 'rgba(255,255,255,0.08)',
              color: robotxColors.light,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
              [motion.hover]: { '&:hover': searchActive },
              '&:focus-visible': { outline: `2px solid ${robotxColors.gold}`, outlineOffset: '3px', ...searchActive },
              [motion.allowed]: { transition: `background-color ${motion.fast}, box-shadow ${motion.fast}` },
              [motion.reduced]: { transition: 'none' },
            }}
          >
            <SearchIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm" aria-labelledby="robotx-search-title" PaperProps={{ sx: { bgcolor: 'secondary.main', backgroundImage: 'none', borderRadius: 2 } }}>
        <DialogTitle id="robotx-search-title" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {search.title}
          <IconButton aria-label="Close search" onClick={() => setOpen(false)} sx={{ color: 'white' }}><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField autoFocus fullWidth value={query} onChange={event => setQuery(event.target.value)} placeholder={search.placeholder}
            inputProps={{ 'aria-label': 'Search website content' }}
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: 'primary.light' }} /></InputAdornment> }}
            sx={{ mt: 1, '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: 'rgba(255,255,255,0.4)' } } }} />
          <Typography role="status" sx={{ color: 'rgba(255,255,255,0.7)', mt: 2, fontSize: '0.85rem' }}>
            {results.length ? `${results.length} destinations` : search.empty}
          </Typography>
          <List>
            {results.map(result => (
              <ListItemButton key={result.href} component={Link} href={result.href} onClick={() => setOpen(false)} sx={{ borderRadius: 1 }}>
                <ListItemText primary={result.title} />
              </ListItemButton>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
}
