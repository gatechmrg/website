import { Box, Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Chip } from "@mui/material";
import { StandardLine } from "../components/misc/line";
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import {useRouter } from "next/router";
import { GreenPrimaryButton } from "../components/misc/buttons";
import Image from "next/image";
import { seaStateReports } from "../data/seaStateReports";

export default function SeaState() {
    const router = useRouter() 

    const [openWeeks, setOpenWeeks] = useState<{ [key: string]: boolean }>({})

    const toggleAll = (sIndex: number, open: boolean) => {
        const updates: { [key: string]: boolean } = {}
        seaStateReports[sIndex].weeks.forEach((_, wIndex) => {
            updates[`${sIndex}-${wIndex}`] = open
        })
        setOpenWeeks(prev => ({ ...prev, ...updates }))
    }

    const handleWeekToggle = (key: string) => {
        setOpenWeeks(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const [openSemesters, setOpenSemesters] = useState<{ [key: number]: boolean }>({ 0: true })

    const handleSemesterToggle = (sIndex: number) => {
        setOpenSemesters(prev => ({ ...prev, [sIndex]: !prev[sIndex] }))
    }

    return (
        <Box>
            <Header />
            <Box sx={{
                backgroundColor: '#001848',
                height: 300,
                display: 'flex',
                flexDirection: 'column',   
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h2" color="white">
                    Media
                </Typography>
                <Box mt={2} sx={{ width: { xs: '80%', md: 600 }, height: 5, bgcolor: '#B5A96A', borderRadius: 3, mx: 'auto' }} />
            </Box>

            <Box sx={{ backgroundColor: '#001848', position: 'relative' }}>
                <Box position="absolute" top="calc(100% - 100px)" left={0} width="100%" height={100}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        style={{ width: '100%', height: '100%', display: 'block' }}
                    >
                        <defs>
                            <style>{`
                                @keyframes wave-move {
                                    from { transform: translateX(0); }
                                    to { transform: translateX(-352px); }
                                }
                                .wave-group {
                                    animation: wave-move 25s linear infinite;
                                }
                            `}</style>
                            <path
                                id="sea-state-wave"
                                d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <rect x="-200" y="44" width="2000" height="100" fill="#003566" />
                        <g className="wave-group">
                            <use xlinkHref="#sea-state-wave" x="0" y="0" fill="#003566" />
                            <use xlinkHref="#sea-state-wave" x="352" y="0" fill="#003566" />
                            <use xlinkHref="#sea-state-wave" x="704" y="0" fill="#003566" />
                        </g>
                    </svg>
                </Box>
                <Box height={100} />
            </Box>

            <Box mt={8}>
                <Container maxWidth="lg">
                    <Box textAlign="center" mb={4}>
                        <Typography variant="h3">News and Partnerships</Typography>
                    </Box>
                    <Box mb={8}>
                        <StandardLine width={200} height={5} centered borderRadius={3} />
                    </Box>

                    <Grid container spacing={4} mb={10} justifyContent="center">
                        {[
                            {
                                title: "MRG at RoboSub 2026",
                                image: "/media/tocaro_blue_boat.webp",
                                link: "/news/robosub_2026"
                            },
                            {
                                title: "MRG Partners with Tocaro Blue to Research Marine Radar Performance",
                                image: "/media/tocaro_blue_boat.webp",
                                link: "/news/tocaro_blue"
                            },

                            /* ##### Uncomment to add articles as they are written. EB 4/9/26 #######
                            {
                                title: "Coming soon!",
                                image: "/mrg_logo3.svg",
                                link: "#"
                            },
                            {
                                title: "Coming soon!",
                                image: "/mrg_logo3.svg",
                                link: "#"
                            }
                            */
                        ].map((tile, i) => (
                            <Grid item xs={12} md={4} key={i} sx={{ display: 'flex' }}>
                                <Box
                                    onClick={() => router.push(tile.link)}
                                    sx={{
                                        cursor: "pointer",
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        boxShadow: 3,
                                        transition: "0.3s",
                                        display: 'flex',         
                                        flexDirection: 'column', 
                                        flex: 1,                            
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'relative', width: '100%', height: 220 }}>
                                        <Image
                                            src={tile.image}
                                            alt={tile.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </Box>

                                    <Box p={2}>
                                        <Typography variant="h6" textAlign="center">
                                            {tile.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Box textAlign="center" mb={4}>
                        <Typography variant="h3">The MRG Sea State: Weekly Team Reports</Typography>
                    </Box>
                    <Box mb={8}>
                        <StandardLine width={200} height={5} centered borderRadius={3} />
                    </Box>
                    
                    {seaStateReports.map((semesterData, sIndex) => (
                        
                        <Accordion key={sIndex} expanded={!!openSemesters[sIndex]}
                            onChange={() => handleSemesterToggle(sIndex)}
                            sx={{ mb: 2, backgroundColor: '#001848' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Typography variant="h5" color="white">
                                        {semesterData.semester}
                                    </Typography>
                                    {sIndex === 0 && (
                                        <Chip label="Latest" size="small"
                                            sx={{ backgroundColor: '#B5A96A', color: 'white', fontWeight: 'bold' }} />
                                    )}
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                    <GreenPrimaryButton onClick={() => toggleAll(sIndex, true)}>
                                        Expand All
                                    </GreenPrimaryButton>
                                    <GreenPrimaryButton onClick={() => toggleAll(sIndex, false)}>
                                        Collapse All
                                    </GreenPrimaryButton>
                                </Box>
                                {semesterData.weeks.map((weekData, wIndex) => {
                                    const key = `${sIndex}-${wIndex}`
                                    return (
                                        <Accordion key={wIndex} expanded={!!openWeeks[key]}
                                            onChange={() => handleWeekToggle(key)}>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Box>
                                                    <Typography variant="h6">{weekData.week}</Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {weekData.summary}
                                                    </Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {weekData.content.map((paragraph, pIndex) => (
                                                    <Typography key={pIndex} variant="body1"
                                                        sx={{ mt: pIndex === 0 ? 0 : 2 }}>
                                                        {paragraph}
                                                    </Typography>
                                                ))}
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
