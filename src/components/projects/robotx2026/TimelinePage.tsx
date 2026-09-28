import Image from 'next/image';
import { Box } from '@mui/material';
import FlightClip from './FlightClip';
import TestingDetails from './TestingDetails';
import TideDivider from './TideDivider';
import TimelineGallery from './TimelineGallery';
import TimelineHero from './TimelineHero';
import TimelinePhase from './TimelinePhase';
import { robotxColors } from './colors';
import { robotx2026Timeline } from '../../../data/robotx2026';
import type { PhaseMedia } from '../../../data/robotx2026';

const mediaSizes = '(max-width: 899px) calc(100vw - 32px), (max-width: 1199px) 52vw, 600px';

const mediaFrame = { position: 'relative', aspectRatio: { xs: '3 / 2', md: '4 / 3' }, borderRadius: '14px', overflow: 'hidden' } as const;

function PhaseMediaView({ media }: { media: PhaseMedia }) {
  if (media.type === 'video') {
    return (
      <FlightClip
        src={media.src}
        poster={media.poster}
        caption={media.caption}
        label={media.label}
        sizes={mediaSizes}
        sx={{ aspectRatio: { xs: '3 / 2', md: '4 / 3' } }}
      />
    );
  }
  return (
    <Box sx={mediaFrame}>
      <Image src={media.src} alt={media.alt} fill sizes={mediaSizes} style={{ objectFit: 'cover', objectPosition: media.position ?? '50% 50%' }} />
    </Box>
  );
}

const { phases } = robotx2026Timeline;

const backgrounds = [robotxColors.deep, robotxColors.navy];
const dividerPhases = [5.2, 9.4, 2.6, 7.8, 4.1];

const backgroundAt = (index: number) => backgrounds[index % 2];

export default function TimelinePage() {
  const galleryIndex = phases.length;
  const recordsIndex = phases.length + 1;
  return (
    <Box component="main" id="robotx-content" sx={{ minWidth: 0 }}>
      <TimelineHero />
      {phases.map((phase, index) => (
        <Box key={phase.id}>
          {index > 0 && (
            <TideDivider
              from={backgroundAt(index - 1)}
              to={backgroundAt(index)}
              variant={index % 2 ? 'swell' : 'counterSwell'}
              phase={dividerPhases[index - 1]}
            />
          )}
          <TimelinePhase
            id={phase.id}
            label={phase.label}
            title={phase.title}
            dates={phase.dates}
            paragraphs={phase.paragraphs}
            media={<PhaseMediaView media={phase.media} />}
            mediaSide={index % 2 ? 'right' : 'left'}
            background={backgroundAt(index)}
            first={index === 0}
          />
        </Box>
      ))}
      <TideDivider from={backgroundAt(galleryIndex - 1)} to={backgroundAt(galleryIndex)} variant="counterSwell" phase={dividerPhases[3]} />
      <TimelineGallery background={backgroundAt(galleryIndex)} />
      <TideDivider from={backgroundAt(galleryIndex)} to={backgroundAt(recordsIndex)} phase={dividerPhases[4]} />
      <TestingDetails background={backgroundAt(recordsIndex)} />
    </Box>
  );
}
