import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Chip } from "@mui/material";
import { StandardLine } from "../components/misc/line";
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import {useRouter } from "next/router";
import { GreenPrimaryButton } from "../components/misc/buttons";

const seaStateReports = [
    {
        semester: "Spring 2026",
        weeks: [
            {
                week: "Week 1 — 01/25/2026",
                summary: "Spring semester kickoff, RoboBoat vision progress, RoboSub water test incoming",
                content: [
                    "Ahoy Mateys! I hope you are staying warm on this chilly weekend. Let's recap the past week.",
                    "Last week kicked off the semester with the return to our regular competition and working group meetings. Thank you to everyone who was able to make it out and start picking up tasks for the semester. I am excited about the goals we have set for the next few months and the progress we hope to achieve.",
                    "Additionally, RoboBoat software made advancements with position keeping and vision-based mapping, valuable steps toward competition readiness in February. The interior redesign continues to advance for RoboSub, with the successful integration of the thruster power system and harnessing for the E-Stop circuit.",
                    "Shoutout: A shoutout to Marcus Agun for being the first junior member to make a code push this semester, contributing a navigate to world position functionality for RobotX/RoboBoat. I would also like to commend Paul and Ariana for making recent pull requests for their work.",
                    "Next Week: We are scheduled for a RoboSub water test this Friday 1/30 from 10–2 pm. A RoboBoat lake test is also scheduled for Saturday 1/31, weather permitting. Looking forward to a great semester!",
                ]
            },
            {
                week: "Week 2 — 02/03/2026",
                summary: "MicroTransAt second wingsail manufactured, RoboBoat competition sprint, dry test incoming",
                content: [
                    "Ahoy Mateys! Sorry for the delayed email this week!",
                    "Last week, MicroTransAt made some exciting mechanical progress by manufacturing a second physical edition of the wingsail on the CNC and sanding it. Additionally, RoboBoat is making strides in perception, developed a power harness for the E-Stop circuit, and is making progress toward status monitoring with the light tower. There is one more RoboBoat sprint until competition — let's make it count!",
                    "Shoutout: A shoutout to Mantra and Jenna for braving the cold to help sand the wingsail. Way to go!",
                    "This Week: There will be a comprehensive dry test for RoboSub to determine system readiness for the water test next week, occurring on Friday 2/6 in Weber 112. Additionally, RoboBoat will have a water test this Sunday. Please contact Nick for details.",
                ]
            },
            {
                week: "Week 3 — 02/09/2026",
                summary: "New member meeting, Stinger Tug training starts, RoboBoat NanoSAM perception upgrade",
                content: [
                    "Ahoy Mateys! Happy Monday! I hope you all have a great week.",
                    "Last Thursday night, we had our new member meeting. If you were unable to make it, a recording is available. Please reach out to me or another board member if you have questions. Additionally, the Stinger Tug training project starts tomorrow night at 6:30 pm in Weber Rm COVE.",
                    "MicroTransAt has made progress on the software front by making improvements to the vehicle URDF and simulation environment, including the addition of collision meshes and lift and drag simulation.",
                    "RoboBoat is in the home stretch for competition and has finalized the hardware for the platform. Additionally, RoboBoat software has been improved with the addition of NanoSAM, a Segment Anything (SAM) model variant that improves perception by allowing the Jetson to detect and cut out objects in the space, even if it has not been trained for that specific item.",
                    "Shoutout: A shoutout to Shrey, Nick, Niharika, Em, and Marcus for assembling our new BlueROV. Thank you for putting in the extra hours to get her built!",
                    "This Week: New member training starts this Tuesday! We are also scheduled for a RoboSub water test at 10 am in the CRC competition pool this Friday.",
                ]
            },
            {
                week: "Week 4 — 02/13/2026",
                summary: "RoboSub back in water, RoboBoat competition-ready, RoboBoat heads to Sarasota",
                content: [
                    "Ahoy mateys! Let's recap another week in Marine Robotics Group.",
                    "Today is an exciting day for RoboSub! We have officially re-entered the water for our first test of the semester. The internal redesign has improved electrical system modularity and organization, and we are actively testing the controller and autonomy development refined in simulation from last semester. From this point forward, testing will occur more regularly, and we will be closing the sim-to-real gap.",
                    "RoboBoat has been testing aggressively in the home stretch to competition next week. Radio communications, hardware E-stopping, E-stop sensing, state monitoring, stationkeeping, and movement to global and local coordinates have all been tested and are working well. Keep up the great work everyone!",
                    "Shoutout: A shoutout to Em Paul for taking strong initiative on Stinger Tug improvements as a mentor and for spending many hours working on assembling and debugging the E-Stop for RoboSub. Thanks for being so dependable and hard working!",
                    "Next Week: The RoboBoat competition team will be hitting the road on Wednesday morning to make it to competition in Sarasota, Florida. Lots of hard work has gone into preparing the platform, and I am excited to put our vehicle to the test. Stinger Tug continues with the first software technical lecture on Tuesday at 6:30. Microtransat will be having mechanical working sessions on Tuesday at 4:00 and next Friday at 1:30.",
                ]
            },
        ]
    },
    {
        semester: "Fall 2025",
        weeks: [
            {
                week: "Week 1 — 09/05/2025",
                summary: "Semester kickoff, New Members' Meeting, first RoboSub water test",
                content: [
                    "Ahoy Mateys! Welcome to the MRG Sea State, your weekly recap of MRG events and announcement of upcoming activities. Tune in to stay informed on all things MRG :)",
                    "This week started off the semester strong with our New Members' Meeting and the beginning of Working Groups. For anyone who was not able to make the session, there is a recording available on our Teams channel, and you can reach out to me or anyone else on the board with questions.",
                    "We also had our first RoboSub test of the semester! Exciting to be back in the water and working towards competition 2026. The sub was able to complete a roll for the first time which is pretty rad. Thank you to new and returning members who were able to make it out and help out.",
                    "Shoutout: A big shoutout to Jason Hsaio for being ahead of the game and designing a PCB to be used for the autonomous torpedoes for RoboSub. Keep it up!",
                    "Next Week: The first training session will be on Tuesday 9/9 at 6:30 in Weber I Rm COVE. We are looking forward to having everyone! The last day to sign up for Stinger Tug training is Tuesday, 9/9. There is also (tentatively) a RobotX water test happening next Saturday, 9/13. All are welcome.",
                ]
            },
            {
                week: "Week 2 — 09/12/2025",
                summary: "MicroTransAt wind vane progress, RobotX dry test success, beach volleyball social",
                content: [
                    "Ahoy Mateys! Congratulations on another great week. See below for what we've accomplished and what is coming next.",
                    "MicroTransAt made great progress toward designing the windvane magnetic encoder, which tells the platform the direction that the wind is coming from. Additionally, steps have been made in the design process for the keel.",
                    "RobotX had a successful dry test on Tuesday. The front seat radio control is working as expected, and the underslug configuration was a success. Great work, everyone!",
                    "Shoutout: A shoutout to Alexander Dumas for doing a great job finalizing the wingsail design for MicroTransAt. We are looking forward to manufacturing and wind tunnel testing thanks to your contribution.",
                    "Next Week: The Electrical Working Session will be design reviewing numerous PCBs for the RoboSub and RobotX platforms. The Mechanical Working Session will be reviewing designs for MicroTransAt, and the Software Working Session will continue ongoing discussions about autonomy and ROS environment setup.",
                    "Social: Next Wednesday, 9/17, we will be meeting at the CRC sand volleyball pits at 6 pm to play some beach volleyball. Hope you can join!",
                ]
            },
            {
                week: "Week 3 — 09/19/2025",
                summary: "RoboSub torpedo design progress, MicroTransAt simulation updates, Stinger Tug epoxying",
                content: [
                    "Ahoy Mateys! Thanks for another great week and all of the hard work you guys have been putting in.",
                    "Good conceptual progress was made for the autonomous torpedoes that accompany the RoboSub platform. The proposed design builds on a prototype from last semester and focuses on yaw and speed control. Pending final approval, the new design will feature a Raspberry Pi Zero as the primary computation device for our sensing and motor control.",
                    "MicroTransAt has also made excellent progress advancing the simulation environment. The URDF (Unified Robot Description Format) has been updated to include our vehicle specifications, and the information will be used with ROS to effectively design and test field behaviors in simulation.",
                    "Thank you to all of the new members and GRAs who have been working hard at Stinger Tug. Most if not all teams have completed the hull epoxying and are making a good start at electrical and software development.",
                    "Shoutout: A big thank you to Justin Wong for designing a very stylish poster with all of the MRG meeting times. The information is now available for view on the door of Weber 112.",
                    "Next Week: RoboSub will be having a water test next Friday 9/26 at 10 am at the CRC competition pool. MicroTransAt is planning on manufacturing the wingsail for the boat this week to stay on track for the upcoming wind tunnel test on October 10th.",
                ]
            },
            {
                week: "Week 4 — 09/26/2025",
                summary: "RoboSub water test, largest PCB order received, Discord transition announced",
                content: [
                    "Ahoy Mateys! Thanks for another great week! Check out what we've been up to.",
                    "Let's get talking — Join our Discord!! To simplify team communication and help members feel more in the loop, we will be beginning a transition to using Discord instead of Teams direct messaging for our project communication. Files and meetings will still be hosted on Teams, but informal communication and project discussion will be hosted on Discord.",
                    "RoboSub had a fantastic water test today, 9/26, and was able to collect high-quality data for many of our systems. We collected data from our USB cameras and Synoptix multibeam sonar, and this data will be run through a YOLO model and fused to create objects within our semantic map and occupancy grid.",
                    "We also received our largest ever order of PCBs featuring boards for RoboSub and RobotX. These boards will help us improve the functionality of many systems. Stinger Tuggers have also made good progress soldering the Stinger Hats for the vessels.",
                    "Shoutout: Teams Subrina and Stingray are at the top of our leaderboard for the most progress on Stinger Tug. Keep up the great work!",
                    "Next Week: RoboSub and RobotX will be having work sessions tomorrow, 9/27, starting at 10 am. There will also be an interior conceptual design review for RoboSub next Wednesday.",
                ]
            },
            {
                week: "Week 5 — 10/03/2025",
                summary: "Fall Break! Microtransat wingsail machining, RoboSub occupancy map progress",
                content: [
                    "Ahoy Mateys! Happy Fall Break! I hope everyone gets to enjoy some restful and fun time off from classes.",
                    "Microtransat had a successful week continuing to manufacture the wingsail and design the keel for the half-scale vehicle. The team made an initial pass at machining the sail with the CNC and will be creating a more finalized version tomorrow, 10/4. Additionally, the team performed analysis for the optimal mass and length for the keel for platform stability.",
                    "RoboSub has also seen strong progress in many subareas. The autonomy team created an occupancy map for synthesizing what objects are and where they are near the platform. The internal redesign team resolved a concept for the interior organization and has been hard at work defining the interfaces and functionality of the new front seat PCB stack. The new backseat has also been almost completely integrated for RobotX.",
                    "Shoutout: A big shoutout to Nathan Xie for his great work developing the occupancy grid for RoboSub. It is a big step for our autonomy and much appreciated.",
                    "Next Week: A design review for RoboSub's autonomous torpedoes will be held on 10/10. Additionally, the first official test of Microtransat's wing sail is scheduled for Friday 10/10 — a super exciting milestone!",
                ]
            },
            {
                week: "Week 6 — 10/13/2025",
                summary: "First MicroTransAt wind tunnel test, Tocaro Blue CEO visit, RobotX testing week",
                content: [
                    "Ahoy Mateys! Thank you for bearing with me with a slightly late Sea State. Please see information for last week and this week below.",
                    "The most exciting news was the first official MicroTransAt wind tunnel test. Several members made it out to the Montgomery Knight low-speed wing tunnel to test the new wingsail and gain a better understanding of its dynamics. This test is a huge milestone after years of conceptual development, and I am very proud of the hard work MicroTransAt has put in.",
                    "We also had the opportunity to host the CEO of the maritime software company, Tocaro Blue. Tocaro develops AI middleware for RADAR technology, and their algorithms help to identify and track vessels on the water. Thank you to those who contributed to the tour or lab cleanup.",
                    "Shoutout: A shoutout to Aaron Wu and Jeffrey Fang for sourcing and purchasing a new simulation PC. We hope that this computer will greatly streamline software training and development.",
                    "This Week: RobotX will be having dry and water tests on Tuesday, 10/14, and Saturday, 10/18, respectively. I would also like to encourage everyone to please take a look at their projects' schedules and make a push to keep everything on track.",
                ]
            },
            {
                week: "Week 7 — 10/19/2025",
                summary: "MicroTransAt wind tunnel data processing, RobotX water test postponed",
                content: [
                    "Ahoy Mateys! Congratulations on another great week! Let's recap.",
                    "Following last Friday's wind tunnel test, MicroTransAt has been hard at work reducing the collected data set. Alexander has been processing the 200,000 data points associated with each file into a manageable set of forces and torques in each direction. This data will be used to inform the software controls and mechanical limitations of the wingsail.",
                    "Unfortunately, RobotX had to postpone the water test that was scheduled for Saturday 10/18 due to integration delays that impacted the dry test. On the upside, the backseat is largely constructed, the firmware has been written in Protobuff, and the E-Stop circuit protection is working as intended.",
                    "Shoutout: A warm shoutout to Stinger Group 2 (Shin, Kenny, Tomoki, Shailen, Justin, and Ryan) for their flexibility and positive attitude when adapting to an unexpected switch change. A few electrical and mechanical changes later, and they were good to go. Keep it up!",
                    "Next Week: A friendly reminder that all PCBs should be done before the electrical working session Monday night, 10/20. Also keep an eye out for information from Will about a social this Friday!",
                ]
            },
            {
                week: "Week 8 — 10/26/2025",
                summary: "RoboSub pointcloud speed boost, MicroTransAt simulation running, PCB shoutouts",
                content: [
                    "Ahoy Mateys! Happy Sunday! Let's recap another week of progress.",
                    "The RoboSub software team made good progress across the board, especially with pointcloud processing. By refactoring the code from Python to C++, they were able to increase the speed of the code from processing SONAR data at 2 Hz to 15 Hz. The algorithm is now also able to filter elements in the pointcloud that are too close to the floor or the surface. The platform can also detect and follow the orientation of path markers.",
                    "MicroTransAt also had great software development. Will got the simulation up and running, and the URDF reflects the boat's specifications. Simulation is a great tool for testing controls and software in parallel with mechanical and electrical development.",
                    "Shoutout: A shoutout to Anjali Kiran and Mahika Maini for successfully creating their first official PCBs for RoboSub. Anjali's board regulates voltages for the computation power system, and Mahika's board interfaces with the thrusters. Their boards were reviewed in our largest review ever, with more than six boards reviewed.",
                    "This Week: Business as usual with no major anomalies. Thank you to all who have been working hard on their tasks, attending weekly progress meetings, and asking questions in working group meetings. Happy early Halloween!",
                ]
            },
            {
                week: "Week 9 — 11/02/2025",
                summary: "Major RobotX platform change announced, RoboSub PCB progress, MicroTransAt wind tunnel access",
                content: [
                    "Ahoy Mateys! Happy Halloween! I hope you enjoyed a fun holiday weekend.",
                    "Big News — Changes to RobotX: RoboNation recently announced that they will no longer be allowing the use of the WAM-V as the competition platform. This has been a big shock to the RobotX community and to MRG. I would like to commemorate the hard work so many people have invested into the WAM-V and acknowledge the difficulty of that work not getting to be put on display in competition. We have built great skills over our time with the WAM-V, and we hope to port many of the lessons, sensors, and software to the new era of RobotX.",
                    "We anticipate that the competition will still heavily emphasize surface vehicles, and we are considering reviving MRG's RoboBoat platform or using COTH BlueRobotics Blue Boats. New member onboarding to the project will be postponed at least a week while leadership makes a plan.",
                    "Despite the news, we still saw great progress across teams. From RoboSub, our pointcloud clustering algorithms are up and running and PCBs have been made for power distribution. For MicroTransAt, Alex is getting certified to use the Harper Wind Tunnel.",
                    "Shoutout: A shoutout to Nick Lai, our RobotX lead, for his resilience and leadership as MRG navigates these major changes. It's a tough situation, but he is taking it like a champ.",
                    "This Week: Please come out to the lab Monday, Tuesday, and Wednesday from 1–5 pm for a RoboSub soldering party! RoboSub will also be having a new member project onboarding meeting this Thursday from 6–7 pm.",
                ]
            },
            {
                week: "Week 10 — 11/08/2025",
                summary: "Design class registration reminder, Stinger Tug milestone, shirts arrived",
                content: [
                    "Ahoy Mateys! I hope you are enjoying a restful weekend after a busy week.",
                    "MRG Design Class Registration Reminder: Interested in receiving academic credit for work you are already doing with MRG? Consider joining the MRG Design Competition class this Phase I registration! AE x355 Section B is a course designed to award academic credit for the hands-on robotics experience you gain as part of Marine Robotics Group.",
                    "Leadership Opportunity: Have you completed the Stinger Tug training program? Consider giving back and gaining leadership experience by serving as a Stinger Tug mentor! Please reach out to me or Sean Fish if you are interested.",
                    "Congratulations to Stinger Team 11 (Thalia, Kirthi, Ariana, James, Tanya, and Suhani) for successfully getting the motors spinning for their vessel — the first group to make this milestone!",
                    "Shoutout: A big shoutout to Alexander Dumas for receiving approval for his controls model for MicroTransAt from distinguished faculty members Dr. Prasad and Dr. West. Great work!",
                    "Next Week: RoboSub is in the home stretch to finalize the internal redesign for the November 21st water test. Additionally, shirts have arrived! If you paid dues, stop by the lab to pick up yours.",
                ]
            },
            {
                week: "Week 11 — 11/17/2025",
                summary: "Stinger Tug and BlueBoat lake test at Sweetwater Creek, RoboSub electrical push",
                content: [
                    "Ahoy Mateys! I hope that your week is off to a great start. Let's recap the past week in MRG.",
                    "This past Saturday, 11/15, we had the exciting opportunity to travel to Sweetwater Creek State Park and get our Stingers and BlueBoats into the lake. It was a beautiful day made all the more glorious with some robots out on the water. The BlueBoats did a good job with station and formation keeping, and we had a lot of fun giving the Stinger Tugs their maiden voyages. Thank you to everyone who was able to come out and contribute.",
                    "Additionally, we have made good electrical progress for RoboSub. We are in the home push for our November 21st internals soft deadline. The ESCs power adapters have been almost completely soldered, as have our frontseat sensing and motor interface boards.",
                    "Shirts are also in the lab and ready for pickup. If you paid dues, please talk to a board member to get checked off.",
                    "Shoutout: A big thank you to Peyton Lee for his work on the semantic map for RoboSub. Mitchell shouted out your hard work and consistency, making big contributions toward our autonomy. Keep it up!",
                    "Next Week: We are currently scheduled for a RoboSub water test this Friday, 11/21. MicroTransAt will also be continuing to work on manufacturing the wingsail and keel.",
                ]
            },
            {
                week: "Week 12 — 11/25/2025",
                summary: "Thanksgiving week — limited updates, DONUTS semester recap meeting announced",
                content: [
                    "Hello everyone! I hope everyone has a happy Thanksgiving and safe travels to those who are heading home. In consideration of the holiday, there are no major updates for this week and lab hours will be limited. Please reach out to a board member or GRA if you need access to the lab.",
                    "I would also like to announce that we will be having our biannual DONUTS (Discussing the Organizations Next Undertakings and The Semester) meeting at 6:30 pm on Wednesday 12/3 to recap the semester and celebrate our graduating members. We will be taking club photos as well! Donuts will be provided. Hope to see you there!",
                ]
            },
        ]
    },
    
]

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
                    The Sea State Newsletter
                </Typography>
                <Box mt={2}>
                    <StandardLine width={200} height={5} centered borderRadius={3} />
                </Box>
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
                        <Typography variant="h3">Weekly Team Reports</Typography>
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