import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import TimelineIcon from '@mui/icons-material/Timeline';
import InfoIcon from '@mui/icons-material/Info';

export default function QuickLinks() {
  return (
    <Grid container spacing={3} mb={6}>
      <Grid item xs={12} md={4}>
        <Link href="/projects/roboboat/2026/technical-design-report.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'block', p: 3, height: '100%', bgcolor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderTop: '3px solid', borderTopColor: 'primary.main', borderRadius: 2, cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', transform: 'translateY(-4px)' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <DescriptionIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>Technical Design Report</Typography>
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Detailed technical documentation covering system design, competition strategy, and testing methodology.</Typography>
          </Box>
        </Link>
      </Grid>

      <Grid item xs={12} md={4}>
        <Link href="/projects/roboboat/2026/timeline/" style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'block', p: 3, height: '100%', bgcolor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderTop: '3px solid', borderTopColor: 'primary.main', borderRadius: 2, cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', transform: 'translateY(-4px)' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <TimelineIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>Development Timeline</Typography>
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Key milestones and development progress from team formation through competition readiness.</Typography>
          </Box>
        </Link>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box sx={{ display: 'block', p: 3, height: '100%', bgcolor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderTop: '3px solid rgba(255,255,255,0.3)', borderRadius: 2, opacity: 0.6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <InfoIcon sx={{ fontSize: '2rem', color: 'rgba(255,255,255,0.5)' }} />
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Competition Results</Typography>
          </Box>
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Results and performance analysis will be available after the competition in February 2026.</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
