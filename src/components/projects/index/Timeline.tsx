import { Box, Container, Typography, Tooltip } from "@mui/material";
import Link from "next/link";

const programs = [
    { id: 'wamv',       label: 'WAM-V',         subtitle: 'RobotX',             color: '#B3A369' },
    { id: 'cc',         label: 'Crystal Clear', subtitle: 'RoboBoat',           color: '#B3A369' },
    { id: 'leucothea',  label: 'Leucothea',     subtitle: 'RoboBoat',           color: '#43d935' },
    { id: 'kayak',      label: 'Kayak',         subtitle: 'Microtransat',       color: '#f48fb1' },
    { id: 'sub1',       label: 'Subby Mk. I',     subtitle: 'RoboSub (early)',    color: '#4fc3f7' },
    { id: 'sub2',       label: 'SubS Mk. II',    subtitle: 'RoboSub (current)',  color: '#7986cb' },
    { id: 'stinger',    label: 'Stinger',       subtitle: 'Onboarding',         color: '#81c784' },
]

const events = [
    { year: 2025, program: 'sub2',    title: 'RoboSub 2025',      link: '/projects/robosub/2025' },
    { year: 2025, program: 'kayak',   title: 'Microtransat 2025', link: '/projects/microtransat/2025' },
    { year: 2024, program: 'cc',      title: 'RoboBoat 2024',     link: '/projects/roboboat/2024' },
    { year: 2024, program: 'sub2',    title: 'RoboSub 2024',      link: '/projects/robosub/2024' },
    { year: 2024, program: 'stinger', title: 'Stinger v1',        link: '/projects/stinger' },
    { year: 2024, program: 'wamv',    title: 'RobotX 2024',       link: '/projects/robotx/2024' },
    { year: 2023, program: 'cc',      title: 'RoboBoat 2023',     link: '/projects/roboboat/2023' },
    { year: 2022, program: 'sub2',    title: 'RoboSub 2022',      link: '/projects/robosub/2022' },
    { year: 2022, program: 'wamv',    title: 'RobotX 2022',       link: '/projects/robotx/2022' },
    { year: 2018, program: 'sub1',    title: 'RoboSub 2018',      link: '/projects/robosub/2018' },
    { year: 2018, program: 'wamv',    title: 'RobotX 2018',       link: '/projects/robotx/2018' },
    { year: 2016, program: 'wamv',    title: 'RobotX 2016',       link: '/projects/robotx/2016' },
    { year: 2015, program: 'leucothea',    title: 'RoboBoat 2015',      link: '' },
    { year: 2014, program: 'sub1',    title: 'RoboSub 2014',      link: '/projects/robosub/2014' },
    { year: 2010, program: 'sub1',    title: 'RoboSub 2010',      link: '/projects/robosub/2010' },
    { year: 2008, program: 'sub1',    title: 'RoboSub 2008',      link: '/projects/robosub/2008' },
    { year: 2005, program: 'sub1',    title: 'RoboSub 2005',      link: '/projects/robosub/2005' },
]

const allYears: number[] = []
for (let y = 2026; y >= 2005; y--) allYears.push(y)

const YEAR_HEIGHT = 80
const LINE_SPACING = 32
const DOT_R = 7
const LABEL_WIDTH = 280
const LEFT_MARGIN = 40

const programBounds: Record<string, { first: number, last: number }> = {}
programs.forEach(p => {
    const progEvents = events.filter(e => e.program === p.id).map(e => e.year)
    if (progEvents.length > 0) {
        programBounds[p.id] = {
            first: Math.min(...progEvents),
            last: Math.max(...progEvents),
        }
    }
})

function assignColumns(progs: typeof programs, bounds: typeof programBounds) {
    const columns: string[][] = []
    progs.forEach(p => {
        const b = bounds[p.id]
        if (!b) return
        let placed = false
        for (const col of columns) {
            const conflicts = col.some(otherId => {
                const ob = bounds[otherId]
                if (!ob) return false
                return !(b.first > ob.last || b.last < ob.first)
            })
            if (!conflicts) {
                col.push(p.id)
                placed = true
                break
            }
        }
        if (!placed) columns.push([p.id])
    })
    return columns
}

export default function Timeline() {
    const columns = assignColumns(programs, programBounds)
    const numCols = columns.length
    const totalWidth = numCols * LINE_SPACING
    const totalHeight = allYears.length * YEAR_HEIGHT + 60

    const progToCol: Record<string, number> = {}
    columns.forEach((col, ci) => col.forEach(id => { progToCol[id] = ci }))

    // For each program, compute the y position of its label (midpoint of its range)
    const programLabelY: Record<string, number> = {}
    programs.forEach(p => {
        const b = programBounds[p.id]
        if (!b) return
        const firstYi = allYears.indexOf(b.last)
        const lastYi  = allYears.indexOf(b.first)
        const y1 = firstYi * YEAR_HEIGHT + YEAR_HEIGHT / 2
        const y2 = lastYi  * YEAR_HEIGHT + YEAR_HEIGHT / 2
        programLabelY[p.id] = (y1 + y2) / 2
    })

    const SVG_WIDTH = LABEL_WIDTH + LEFT_MARGIN + totalWidth + 40
    const LABEL_ANCHOR_X = LABEL_WIDTH + LEFT_MARGIN + totalWidth + 36

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 1, textAlign: 'center' }}>
                History
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 6, textAlign: 'center' }}>
                Development programs and competitions over time.
            </Typography>

            <Box display="flex" justifyContent="center">
                <Box sx={{ position: 'relative', width: SVG_WIDTH + 160 }}>

                    <svg
                        width={SVG_WIDTH + 160}
                        height={totalHeight}
                        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
                    >
                        {/* Rails */}
                        {programs.map(p => {
                            const b = programBounds[p.id]
                            if (!b) return null
                            const ci = progToCol[p.id]
                            const x = LABEL_WIDTH + LEFT_MARGIN + ci * LINE_SPACING + LINE_SPACING / 2
                            const firstYi = allYears.indexOf(b.last)
                            const lastYi  = allYears.indexOf(b.first)
                            const y1 = firstYi * YEAR_HEIGHT + YEAR_HEIGHT / 2
                            const y2 = lastYi  * YEAR_HEIGHT + YEAR_HEIGHT / 2
                            const midY = programLabelY[p.id]

                            return (
                                <g key={p.id}>
                                    {/* Rail line */}
                                    <line x1={x} y1={y1} x2={x} y2={y2}
                                        stroke={p.color} strokeWidth={3} strokeOpacity={0.3} />
                                    {/* Terminal caps */}
                                    <circle cx={x} cy={y1} r={4} fill={p.color} opacity={0.5} />
                                    <circle cx={x} cy={y2} r={4} fill={p.color} opacity={0.5} />
                                    {/* Leader line from rail to label */}
                                    <line
                                        x1={x} y1={midY}
                                        x2={LABEL_ANCHOR_X} y2={midY}
                                        stroke={p.color} strokeWidth={1}
                                        strokeOpacity={0.4} strokeDasharray="3 3"
                                    />
                                    {/* Label */}
                                    <text
                                        x={LABEL_ANCHOR_X + 6}
                                        y={midY - 6}
                                        fill={p.color}
                                        fontSize={11}
                                        fontWeight={700}
                                        fontFamily="sans-serif"
                                    >
                                        {p.label}
                                    </text>
                                    <text
                                        x={LABEL_ANCHOR_X + 6}
                                        y={midY + 8}
                                        fill={p.color}
                                        fontSize={9}
                                        opacity={0.6}
                                        fontFamily="sans-serif"
                                    >
                                        {p.subtitle}
                                    </text>
                                </g>
                            )
                        })}

                        {/* Event dots */}
                        {events.map((e, ei) => {
                            const ci = progToCol[e.program]
                            const yi = allYears.indexOf(e.year)
                            if (yi === -1 || ci === undefined) return null
                            const prog = programs.find(p => p.id === e.program)!
                            const x = LABEL_WIDTH + LEFT_MARGIN + ci * LINE_SPACING + LINE_SPACING / 2
                            const y = yi * YEAR_HEIGHT + YEAR_HEIGHT / 2
                            return (
                                <g key={ei}>
                                    <circle cx={x} cy={y} r={DOT_R + 4} fill={prog.color} opacity={0.12} />
                                    <circle cx={x} cy={y} r={DOT_R} fill={prog.color} />
                                </g>
                            )
                        })}
                    </svg>

                    {/* Year rows */}
                    {allYears.map((year, yi) => {
                        const yearEvents = events.filter(e => e.year === year)
                        const hasEvents = yearEvents.length > 0
                        return (
                            <Box key={year} sx={{
                                height: YEAR_HEIGHT,
                                display: 'flex',
                                alignItems: 'center',
                                borderTop: '1px solid rgba(255,255,255,0.04)',
                            }}>
                                {/* Event cards */}
                                <Box sx={{ width: LABEL_WIDTH, display: 'flex', justifyContent: 'flex-end', pr: 2, flexShrink: 0 }}>
                                    <Box display="flex" gap={1} flexWrap="wrap" justifyContent="flex-end">
                                        {yearEvents.map((e, ei) => {
                                            const prog = programs.find(p => p.id === e.program)!
                                            return (
                                                <Link key={ei} href={e.link} style={{ textDecoration: 'none' }}>
                                                    <Box sx={{
                                                        px: 1.5,
                                                        py: 0.5,
                                                        bgcolor: prog.color + '18',
                                                        border: `1px solid ${prog.color}55`,
                                                        borderRadius: 5,
                                                        transition: 'all 0.2s',
                                                        '&:hover': {
                                                            bgcolor: prog.color + '30',
                                                            transform: 'translateY(-1px)',
                                                        }
                                                    }}>
                                                        <Typography variant="caption" sx={{ color: prog.color, fontWeight: 600, whiteSpace: 'nowrap' }}>
                                                            {e.title}
                                                        </Typography>
                                                    </Box>
                                                </Link>
                                            )
                                        })}
                                    </Box>
                                </Box>

                                {/* Year number */}
                                <Box sx={{ width: LEFT_MARGIN, flexShrink: 0, textAlign: 'center' }}>
                                    <Typography variant="caption" sx={{
                                        color: hasEvents ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
                                        fontWeight: hasEvents ? 700 : 400,
                                    }}>
                                        {year}
                                    </Typography>
                                </Box>

                                {/* Rail spacer */}
                                <Box sx={{ width: totalWidth + 40 }} />
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Container>
    )
}