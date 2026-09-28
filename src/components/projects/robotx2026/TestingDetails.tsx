import { Box, Container, Typography } from '@mui/material';
import FlightClip from './FlightClip';
import { robotxColors } from './colors';
import { robotx2026Timeline } from '../../../data/robotx2026';

const { heading, intro, approach, stages, footage, labels, items } = robotx2026Timeline.records;

const bodyText = { m: 0, lineHeight: 1.65, color: robotxColors.bodySecondary };

export default function TestingDetails({ background }: { background: string }) {
  return (
    <Box component="section" id="records" aria-labelledby="robotx-records-title" sx={{ bgcolor: background, pt: { xs: '16px', md: '24px' }, pb: { xs: '40px', md: '72px' } }}>
      <Container maxWidth="lg">
        <Typography
          id="robotx-records-title"
          component="h2"
          sx={{ m: 0, fontSize: { xs: 30, md: 44 }, fontWeight: 400, letterSpacing: { md: '-0.5px' }, lineHeight: 1.2 }}
        >
          {heading}
        </Typography>
        <Typography sx={{ ...bodyText, mt: { xs: '12px', md: '16px' }, fontSize: { xs: 16, md: 18 }, maxWidth: 720 }}>
          {intro}
        </Typography>
        {/* Preliminary TDR, section III-A. Keep the report unlinked until finalized. */}
        <Typography sx={{ ...bodyText, mt: { xs: '28px', md: '40px' }, fontSize: { xs: 15, md: 16 }, maxWidth: 720 }}>
          {approach}
        </Typography>
        <Box
          component="ol"
          sx={{
            listStyle: 'none',
            m: 0,
            mt: { xs: '16px', md: '20px' },
            p: 0,
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
            columnGap: '24px',
          }}
        >
          {stages.map((stage, index) => (
            <Box
              component="li"
              key={stage}
              sx={{ display: 'flex', alignItems: 'baseline', gap: '12px', py: '14px', borderTop: `1px solid ${robotxColors.hairline}`, fontSize: { xs: 15, md: 16 } }}
            >
              <Box component="span" aria-hidden="true" sx={{ color: robotxColors.paleGold, fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
                {String(index + 1).padStart(2, '0')}
              </Box>
              {stage}
            </Box>
          ))}
        </Box>
        <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: { xs: '32px', md: '48px' }, p: 0, borderBottom: `1px solid ${robotxColors.hairline}` }}>
          {items.map((record) => (
            <Box
              component="li"
              key={record.title}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: '240px minmax(0, 1fr)', md: '380px minmax(0, 1fr)' },
                gap: { xs: '16px', sm: '32px', md: '56px' },
                alignItems: 'center',
                py: { xs: '24px', md: '28px' },
                borderTop: `1px solid ${robotxColors.hairline}`,
              }}
            >
              <FlightClip
                src={record.video}
                poster={record.poster}
                caption={`${record.title}, ${footage.toLowerCase()}`}
                label={`Play ${record.title.toLowerCase()} video`}
                sizes="(max-width: 599px) calc(100vw - 32px), (max-width: 899px) 240px, 380px"
                sx={{ aspectRatio: '16 / 9' }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '8px', md: '10px' }, minWidth: 0 }}>
                <Typography component="h3" sx={{ m: 0, fontSize: { xs: 20, md: 26 }, fontWeight: 500 }}>
                  {record.title}
                </Typography>
                <Typography sx={{ m: 0, fontSize: { xs: 14, md: 15 }, color: robotxColors.paleGold }}>
                  {record.vehicle} · {footage}
                </Typography>
                <Box
                  component="dl"
                  sx={{ m: 0, mt: '6px', display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr)', columnGap: '20px', rowGap: '8px', fontSize: { xs: 15, md: 16 } }}
                >
                  {([['objectives', record.objectives], ['fieldTime', record.fieldTime], ['results', record.results]] as const).map(([key, value]) => (
                    <Box key={key} sx={{ display: 'contents' }}>
                      <Box component="dt" sx={{ fontWeight: 500 }}>{labels[key]}</Box>
                      <Box component="dd" sx={{ m: 0, color: robotxColors.bodySecondary }}>
                        {value}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
