"use client";

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";

interface Program {
    id: string;
    label: string;
    subtitle: string;
    color: string;
}

interface Event {
    year: number;
    program: string;
    title: string;
    link: string;
}

interface ProgramBounds {
    first: number;
    last: number;
}

const programs: Program[] = [
    { id: 'private',    label: 'Private',           subtitle: 'USV (UCRT)',      color: '#B3A369' },
    { id: 'subscale',   label: 'Subscale',          subtitle: 'sUSV',                 color: '#f48fb1' },
    { id: 'cc',         label: 'Crystal Clear',     subtitle: 'USV',                     color: '#c4863e' },
    { id: 'plongeur',   label: 'Plongeur',          subtitle: 'UUV',            color: '#7986cb' },
    { id: 'vinny',      label: 'Vinny',             subtitle: 'USV',                     color: '#43d935' },
    { id: 'stinger',    label: 'Stinger',           subtitle: 'uUSV',                   color: '#81c784' },
    { id: 'subymc',     label: 'Suby McSubface',    subtitle: 'UUV',              color: '#4fc3f7' },
    { id: 'wamv',       label: 'WAM-V',             subtitle: 'RobotX',                        color: '#B3A369' },
    { id: 'leucothea',  label: 'Leucothea',         subtitle: 'USV',                     color: '#fff15a' },
    { id: 'hindsight',  label: 'Captain Hindsight', subtitle: 'USV',        color: '#75e1ff' },
    { id: 'planet',     label: 'Captain Planet',    subtitle: 'USV',        color: '#75e1ff' },
    { id: 'baggins',    label: 'GT Baggins',        subtitle: 'USV',        color: '#75e1ff' },
    { id: 'subbyjr',    label: 'Subby Jr.',         subtitle: 'UUV',        color: '#81c784' },
    { id: 'subby2',     label: 'Subby II',          subtitle: 'UUV',        color: '#81c784' },
    { id: 'subby1',     label: 'Subby I',           subtitle: 'UUV',        color: '#81c784' },
    { id: 'mongoose',   label: 'Mongoose',          subtitle: 'UUV',        color: '#81c784' },
];

const events: Event[] = [
    { year: 2026, program: 'stinger',   title: 'Stinger Block II',   link: '/projects/stinger' },
    { year: 2026, program: 'private',   title: 'RoboBoat 2026',     link: '/projects/roboboat/2026' },
    { year: 2025, program: 'subscale',  title: 'Microtransat 2025', link: '/projects/microtransat/2025' },
    { year: 2025, program: 'stinger',   title: 'Stinger Block I',   link: '/projects/stinger' },
    { year: 2024, program: 'cc',        title: 'RoboBoat 2024',     link: '/projects/roboboat/2024' },
    { year: 2024, program: 'wamv',      title: 'RobotX 2024',       link: '/projects/robotx/2024' },
    { year: 2023, program: 'cc',        title: 'RoboBoat 2023',     link: '/projects/roboboat/2023' },
    { year: 2022, program: 'wamv',      title: 'RobotX 2022',       link: '/projects/robotx/2022' },
    { year: 2018, program: 'wamv',      title: 'RobotX 2018',       link: '/projects/robotx/2018' },
    { year: 2019, program: 'vinny',     title: 'RoboBoat 2019',     link: '' },
    { year: 2019, program: 'plongeur',  title: 'RoboSub 2019',     link: '' },
    { year: 2018, program: 'vinny',     title: 'RoboBoat 2018',     link: '' },
    { year: 2018, program: 'plongeur',  title: 'RoboSub 2018',     link: '' },
    { year: 2017, program: 'vinny',     title: 'RoboBoat 2017',     link: '' },
    { year: 2017, program: 'plongeur',  title: 'RoboSub 2017',      link: '' },
    { year: 2016, program: 'hindsight', title: 'RoboBoat 2016',     link: '' },
    { year: 2016, program: 'wamv',      title: 'RobotX 2016',       link: '' },
    { year: 2016, program: 'subymc',    title: 'RoboSub 2016',      link: '' },
    { year: 2015, program: 'leucothea', title: 'RoboBoat 2015',     link: '' },
    { year: 2014, program: 'hindsight', title: 'RoboBoat 2014',     link: '' },
    { year: 2012, program: 'hindsight', title: 'RoboBoat 2012',     link: '' },
    { year: 2011, program: 'planet',    title: 'RoboBoat 2011',     link: '' },
    { year: 2010, program: 'baggins',   title: '3rd AUVSI/ONR ASV Competition',         link: '' },
    { year: 2008, program: 'subbyjr',   title: '11th AUVSI/ONR AUV Competition',        link: '' },
    { year: 2007, program: 'subby2',    title: '10th AUVSI/ONR AUV Competition',        link: '' },
    { year: 2006, program: 'subby1',    title: '9th AUVSI/ONR AUV Competition',         link: '' },
    { year: 2005, program: 'mongoose',  title: '8th AUVSI/ONR AUV Competition',         link: '' },
];

const allYears: number[] = [];
for (let y = 2026; y >= 2005; y--) allYears.push(y);

const YEAR_HEIGHT   = 80;
const RAIL_SPACING  = 30;
const DOT_R         = 7;
const CARD_WIDTH    = 280;
const YEAR_COL_W    = 40;
const RAIL_LEFT     = CARD_WIDTH + YEAR_COL_W;
const LABEL_H       = 34;   // px height of a two-line label block
const LABEL_MIN_GAP = 38;   // minimum gap between consecutive label centers
const LABEL_BLOCK_W = 150;

function yearToY(year: number): number {
    const yi = allYears.indexOf(year);
    return yi * YEAR_HEIGHT + YEAR_HEIGHT / 2;
}

function assignColumns(
    progs: Program[],
    bounds: Record<string, ProgramBounds>
): string[][] {
    const columns: string[][] = [];
    progs.forEach(p => {
        const b = bounds[p.id];
        if (!b) return;
        let placed = false;
        for (const col of columns) {
            const conflict = col.some(otherId => {
                const ob = bounds[otherId];
                return ob && !(b.first > ob.last || b.last < ob.first);
            });
            if (!conflict) { col.push(p.id); placed = true; break; }
        }
        if (!placed) columns.push([p.id]);
    });
    return columns;
}

function resolveLabels(
    progs: Program[],
    bounds: Record<string, ProgramBounds>
): Record<string, number> {
    // Build initial desired positions (midpoint of each rail in Y space)
    const items = progs
        .filter(p => bounds[p.id])
        .map(p => {
            const b = bounds[p.id];
            const y1 = yearToY(b.last);
            const y2 = yearToY(b.first);
            return { id: p.id, y: (y1 + y2) / 2 };
        })
        .sort((a, b) => a.y - b.y);

    // Push-apart: iteratively resolve overlaps
    const minStep = LABEL_H + LABEL_MIN_GAP;
    for (let pass = 0; pass < 30; pass++) {
        for (let i = 1; i < items.length; i++) {
            const prev = items[i - 1];
            const cur  = items[i];
            if (cur.y - prev.y < minStep) {
                const mid = (prev.y + cur.y) / 2;
                prev.y = mid - minStep / 2;
                cur.y  = mid + minStep / 2;
            }
        }
    }

    return Object.fromEntries(items.map(it => [it.id, it.y]));
}

export default function Timeline() {
    const { programBounds, progToCol, columns, labelY } = useMemo(() => {
        const programBounds: Record<string, ProgramBounds> = {};
        programs.forEach(p => {
            const ys = events.filter(e => e.program === p.id).map(e => e.year);
            if (ys.length) programBounds[p.id] = { first: Math.min(...ys), last: Math.max(...ys) };
        });

        const columns = assignColumns(programs, programBounds);
        const progToCol: Record<string, number> = {};
        columns.forEach((col, ci) => col.forEach(id => { progToCol[id] = ci; }));

        const labelY = resolveLabels(programs, programBounds);

        return { programBounds, progToCol, columns, labelY };
    }, []);

    const numCols    = columns.length;
    const totalRailW = numCols * RAIL_SPACING + 20;
    const RAIL_ANCHOR_X = RAIL_LEFT + totalRailW;
    const SVG_WIDTH  = RAIL_ANCHOR_X + 20 + LABEL_BLOCK_W + 8;
    const totalHeight = allYears.length * YEAR_HEIGHT + 60;

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 1, textAlign: 'center' }}>
                History
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 6, textAlign: 'center' }}>
                Development programs and competitions over time.
            </Typography>

            <Box display="flex" justifyContent="center" sx={{ overflowX: 'auto' }}>
                <Box sx={{ position: 'relative', width: SVG_WIDTH, flexShrink: 0 }}>

                    {/* SVG layer: rails, dots, leader lines */}
                    <svg
                        width={SVG_WIDTH}
                        height={totalHeight}
                        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', overflow: 'visible' }}
                    >
                        {/* Rails, caps, leader lines, labels */}
                        {programs.map(p => {
                            const b = programBounds[p.id];
                            if (!b) return null;
                            const ci = progToCol[p.id];
                            const x  = RAIL_LEFT + ci * RAIL_SPACING + RAIL_SPACING / 2;
                            const y1 = yearToY(b.last);
                            const y2 = yearToY(b.first);
                            const midRailY = (y1 + y2) / 2;
                            const ly = labelY[p.id] ?? midRailY;
                            const leaderX = RAIL_ANCHOR_X + 14;

                            return (
                                <g key={p.id}>
                                    {/* Rail */}
                                    <line x1={x} y1={y1} x2={x} y2={y2}
                                        stroke={p.color} strokeWidth={2.5} strokeOpacity={0.3} />
                                    {/* Terminal caps */}
                                    <circle cx={x} cy={y1} r={4} fill={p.color} opacity={0.5} />
                                    <circle cx={x} cy={y2} r={4} fill={p.color} opacity={0.5} />
                                    {/* L-shaped leader: rail midpoint → spine → label */}
                                    <path
                                        d={`M ${x} ${midRailY} L ${RAIL_ANCHOR_X} ${midRailY} L ${RAIL_ANCHOR_X} ${ly} L ${leaderX} ${ly}`}
                                        fill="none"
                                        stroke={p.color}
                                        strokeWidth={1}
                                        strokeOpacity={0.4}
                                        strokeDasharray="3 3"
                                    />
                                    {/* Dot at label start */}
                                    <circle cx={leaderX} cy={ly} r={2.5} fill={p.color} opacity={0.7} />
                                </g>
                            );
                        })}

                        {/* Event dots */}
                        {events.map((e, ei) => {
                            const ci = progToCol[e.program];
                            const yi = allYears.indexOf(e.year);
                            if (yi === -1 || ci === undefined) return null;
                            const prog = programs.find(p => p.id === e.program)!;
                            const x = RAIL_LEFT + ci * RAIL_SPACING + RAIL_SPACING / 2;
                            const y = yearToY(e.year);
                            return (
                                <g key={ei}>
                                    <circle cx={x} cy={y} r={DOT_R + 4} fill={prog.color} opacity={0.12} />
                                    <circle cx={x} cy={y} r={DOT_R} fill={prog.color} />
                                </g>
                            );
                        })}
                    </svg>

                    {/* Program labels (HTML, positioned absolutely) */}
                    {programs.map(p => {
                        const b = programBounds[p.id];
                        if (!b) return null;
                        const ly = labelY[p.id] ?? 0;
                        const labelLeft = RAIL_ANCHOR_X + 22;

                        return (
                            <Box
                                key={p.id}
                                sx={{
                                    position: 'absolute',
                                    left: labelLeft,
                                    top: ly - 16,
                                    width: LABEL_BLOCK_W,
                                    pointerEvents: 'none',
                                }}
                            >
                                <Typography sx={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: p.color,
                                    lineHeight: 1.3,
                                    whiteSpace: 'nowrap',
                                }}>
                                    {p.label}
                                </Typography>
                                <Typography sx={{
                                    fontSize: 9,
                                    color: p.color,
                                    opacity: 0.6,
                                    whiteSpace: 'nowrap',
                                }}>
                                    {p.subtitle}
                                </Typography>
                            </Box>
                        );
                    })}

                    {/* Year rows + event pills (HTML) */}
                    {allYears.map((year, yi) => {
                        const yearEvents = events.filter(e => e.year === year);
                        const hasEvents  = yearEvents.length > 0;

                        return (
                            <Box
                                key={year}
                                sx={{
                                    position: 'absolute',
                                    top: yi * YEAR_HEIGHT,
                                    left: 0,
                                    width: RAIL_LEFT,
                                    height: YEAR_HEIGHT,
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderTop: '1px solid rgba(255,255,255,0.04)',
                                }}
                            >
                                {/* Event pill cards */}
                                <Box sx={{
                                    width: CARD_WIDTH,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'flex-end',
                                    alignContent: 'center',
                                    pr: 1,
                                    gap: 0.5,
                                }}>
                                    {yearEvents.map((e, ei) => {
                                        const prog = programs.find(p => p.id === e.program)!;
                                        const pillSx = {
                                            px: 1.5,
                                            py: 0.4,
                                            bgcolor: prog.color + '18',
                                            border: `1px solid ${prog.color}55`,
                                            borderRadius: 5,
                                            transition: 'all 0.2s',
                                            '&:hover': {
                                                bgcolor: prog.color + '30',
                                                transform: 'translateY(-1px)',
                                            },
                                        };
                                        const label = (
                                            <Typography variant="caption" sx={{
                                                color: prog.color,
                                                fontWeight: 600,
                                                whiteSpace: 'nowrap',
                                                display: 'block',
                                            }}>
                                                {e.title}
                                            </Typography>
                                        );

                                        return e.link ? (
                                            <Link key={ei} href={e.link} style={{ textDecoration: 'none' }}>
                                                <Box sx={pillSx}>{label}</Box>
                                            </Link>
                                        ) : (
                                            <Box key={ei} sx={{ ...pillSx, cursor: 'default' }}>
                                                {label}
                                            </Box>
                                        );
                                    })}
                                </Box>

                                {/* Year number */}
                                <Box sx={{ width: YEAR_COL_W, flexShrink: 0, textAlign: 'center' }}>
                                    <Typography variant="caption" sx={{
                                        color: hasEvents ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.18)',
                                        fontWeight: hasEvents ? 700 : 400,
                                    }}>
                                        {year}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}

                    {/* Spacer so the relative container has correct height */}
                    <Box sx={{ height: totalHeight, width: SVG_WIDTH }} />
                </Box>
            </Box>
        </Container>
    );
}