import { Box, Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Chip } from "@mui/material";
import { StandardLine } from "../components/misc/line";
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import {useRouter } from "next/router";
import { GreenPrimaryButton } from "../components/misc/buttons";
import Image from "next/image";

const seaStateReports = [
    {
        semester: "Spring 2026",
        weeks: [
            {
                week: "Week 1 — 01/25/2026",
                summary: "Spring semester kickoff, RoboBoat vision progress, RoboSub water test and RoboBoat lake test incoming",
                content: [
                    "Ahoy Mateys!",
                    "I hope you are staying warm on this chilly weekend. Let's recap the past week.",
                    "Last Week:",
                    "Last week kicked off the semester with the return to our regular competition and working group meetings. Thank you to everyone who was able to make it out and start picking up tasks for the semester. I am excited about the goals we have set for the next few months and the progress we hope to achieve.",
                    "Additionally, RoboBoat software made advancements with position keeping and vision-based mapping, valuable steps toward competition readiness in February. The interior redesign continues to advance for RoboSub, with the successful integration of the thruster power system and harnessing for the E-Stop circuit.",
                    "Shoutout:",
                    "I would like to shout out Marcus Agun for being the first junior member to make a code push this semester! He contributed a navigate to world position functionality for RobotX/RoboBoat. Thank you! I would also like to commend Paul and Ariana for making recent pull requests for their work.",
                    "Next Week:",
                    "If we can make a powerful push to get everything over the finish line, we are scheduled for a RoboSub water test this Friday 1/30 from 10-2 pm. If you would like to attend, please be at the lab at 9 am to bring over equipment and set up the course. We still have some electrical and firmware development to finalize to make this deadline, so please make extra effort to come to the build nights this week and help us reach this milestone!",
                    "Weather permitting, a RoboBoat lake test is also scheduled for Saturday 1/31, leaving early from the lab. More information will be released once the test is confirmed. Please reach out to Nick Lai with any questions.",
                    "Looking forward to a great semester!",
                ]
            },
            {
                week: "Week 2 — 02/03/2026",
                summary: "MicroTransAt second wingsail CNC'd, RoboBoat final competition sprint, RoboSub dry test Friday",
                content: [
                    "Ahoy Mateys!",
                    "Sorry for the delayed email this week!",
                    "Last Week:",
                    "Last week, MicroTransAt made some exciting mechanical progress by manufacturing a second physical edition of the wingsail on the CNC and sanding it. Additionally, RoboBoat is making strides in perception, developed a power harness for the E-Stop circuit, and is making progress toward status monitoring with the light tower. There is one more RoboBoat sprint until competition! Let's make it count!",
                    "Shoutout:",
                    "I would like to shout out Mantra and Jenna for braving the cold to help sand the wingsail. Way to go!",
                    "This Week:",
                    "This week, there will be a comprehensive dry test for RoboSub to determine system readiness for the water test next week. This will occur during business hours on Friday, 2/6, in Weber 112. Please see Discord for an announcement about the specific time.",
                    "Additionally, RoboBoat will have a water test this Sunday. Relevant team members (or anyone interested in learning more!), please contact Nick for details.",
                    "Let's make it a great week!",
                ]
            },
            {
                week: "Week 3 — 02/09/2026",
                summary: "New member meeting, Stinger Tug training starts, RoboBoat NanoSAM perception upgrade, BlueROV assembled",
                content: [
                    "Ahoy Mateys!",
                    "Happy Monday! I hope you all have a great week.",
                    "New Member Meeting + Start of Training:",
                    "Last Thursday night, we had our new member meeting. If you were unable to make it, a recording is available at this link. Please reach out to me or another board member if you have questions about what we shared. Please excuse some minor technical difficulties with the presentation.",
                    "Additionally, the Stinger Tug training project starts tomorrow night at 6:30 pm in Weber Rm COVE. Please make it to this meeting as best as possible so that you can get off to a strong start with your group. Please reach out to Aaron Wu (aewu@gatech.edu) if you are unable to make this time and need to be placed in a group directly.",
                    "Last Week:",
                    "MicroTransAt has made progress on the software front by making improvements to the vehicle URDF and simulation environment. These updates have included the addition of collision meshes and lift and drag simulation.",
                    "RoboBoat is in the home stretch for competition and has finalized the hardware for the platform. Additionally, RoboBoat software has been improved with the addition of NanoSAM, a Segment Anything (SAM) model variant. This improves perception by allowing the Jetson to detect and \"cut out\" objects in the space, even if it has not been trained for that specific item. We anticipate implementing this feature for buoy detection.",
                    "Shoutout:",
                    "I would like to shout out Shrey, Nick, Niharika, Em, and Marcus for assembling our new BlueROV. Thank you for putting in the extra hours to get her built! I am excited for the new multi-domain capabilities we can test on our Blue Robotics vehicles.",
                    "This Week:",
                    "To reiterate, new member training starts this Tuesday! Please make an effort to be there if you can.",
                    "Additionally, we are scheduled for a RoboSub water test at 10 am in the CRC competition pool this Friday!",
                    "Let's make it a great week!",
                ]
            },
            {
                week: "Week 4 — 02/13/2026",
                summary: "RoboSub back in water, RoboBoat all systems tested and competition-ready, heading to Sarasota",
                content: [
                    "Ahoy mateys!",
                    "Let's recap another week in Marine Robotics Group.",
                    "This Week:",
                    "Today is an exciting day for RoboSub! We have officially re-entered the water for our first test of the semester. The internal redesign has improved electrical system modularity and organization, and we are actively testing the controller and autonomy development refined in simulation from last semester. From this point forward, testing will occur more regularly, and we will be closing the sim-to-real gap. Thank you to all of you who have worked hard to make the electrical and software revisions necessary to reach this milestone. I look forward to more to come.",
                    "Similarly, RoboBoat has been testing aggressively in the home stretch to competition next week. The mechanical, software, and electrical systems have been working effectively in two field tests this week. Radio communications, hardware E-stopping, E-stop sensing, state monitoring, stationkeeping, movement to global coordinates, and movement to local coordinates have been tested and are working well. Keep up the great work everyone!",
                    "Shoutout:",
                    "I would like to shoutout Em Paul for taking strong initiative on Stinger Tug improvements as a mentor and for spending many hours working on assembling and debugging the E-Stop for RoboSub. Thanks for being so dependable and hard working!",
                    "Next Week:",
                    "Next week, the RoboBoat competition team will be hitting the road on Wednesday morning to make it to competition in Sarasota, Florida. Lots of hard work has gone into preparing the platform, so I am excited to put our vehicle to the test. Please reach out to Nick Lai for information about how to help with final packing requirements.",
                    "Stinger Tug will be continuing with the first software technical lecture on Tuesday at 6:30, presented by software lead Mitchell Turton.",
                    "Additionally, Microtransat will be having mechanical working sessions on Tuesday at 4:00 and next Friday at 1:30. There is a lot of manufacturing work still to do to make this concept a reality, so please support your teammates and the project by investing this time.",
                    "Let's make it a great week,",
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
                    "Ahoy Mateys!",
                    "Welcome to the MRG Sea State, your weekly recap of MRG events and announcement of upcoming activities. Tune in to stay informed on all things MRG :)",
                    "This Week in Review:",
                    "This week started off the semester strong with our New Members' Meeting and the beginning of Working Groups. For anyone who was not able to make the session, there is a recording available on our Teams channel, and you can reach out to me or anyone else on the board with questions.",
                    "We also had our first RoboSub test of the semester! Exciting to be back in the water and working towards competition 2026. The sub was able to complete a roll for the first time which is pretty rad. Thank you to new and returning members who were able to make it out and help out.",
                    "Shoutout:",
                    "I'd like to give a big shoutout to Jason Hsaio for being ahead of the game and designing a PCB to be used for the autonomous torpedoes for RoboSub. Keep it up!",
                    "Next Week:",
                    "The first training session will be on Tuesday 9/9 at 6:30 in Weber I Rm COVE (same as the new member meeting). We are looking forward to having everyone! The last day to sign up for Stinger Tug training is Tuesday, 9/9. Please join a group so that you can be a part of this excellent project and onboard onto our competition teams.",
                    "There is also (tentatively) a RobotX water test happening next Saturday, 9/13. We will be bringing the WAM-V out to the lake and kicking off testing for the semester. If the test is a go, more information will be shared on where and when to be. All are welcome.",
                    "Please reach out to me with any questions or concerns. Thanks for reading!",
                ]
            },
            {
                week: "Week 2 — 09/12/2025",
                summary: "MicroTransAt wind vane progress, RobotX dry test success, beach volleyball social",
                content: [
                    "Ahoy Mateys!",
                    "Congratulations on another great week. See below for what we've accomplished and what is coming next.",
                    "This Week in Review:",
                    "MicroTransAt made great progress toward designing the windvane magnetic encoder, which tells the platform the direction that the wind is coming from. Additionally, steps have been made in the design process for the keel.",
                    "RobotX had a successful dry test on Tuesday. The front seat radio control is working as expected, and the underslug configuration was a success. Great work, everyone!",
                    "Shoutout:",
                    "I'd like to take a moment to shout out Alexander Dumas for doing a great job finalizing the wingsail design for MicroTransAt. We are looking forward to manufacturing and wind tunnel testing thanks to your contribution.",
                    "Next Week:",
                    "Next week, the Electrical Working Session will be design reviewing numerous PCBs for the RoboSub and RobotX platforms. The Mechanical Working Session will be reviewing designs for MicroTransAt, and the Software Working Session will continue ongoing discussions about autonomy and ROS environment setup.",
                    "Social:",
                    "Next Wednesday, 9/17, we will be meeting at the CRC sand volleyball pits at 6 pm to play some beach volleyball. Hope you can join!",
                    "Thanks for reading!",
                ]
            },
            {
                week: "Week 3 — 09/19/2025",
                summary: "RoboSub torpedo design progress, MicroTransAt simulation updates, Stinger Tug hull epoxying",
                content: [
                    "Ahoy Mateys!",
                    "Thanks for another great week and all of the hard work you guys have been putting in. Take a look at some of what we have accomplished.",
                    "This Week:",
                    "Good conceptual progress was made for the autonomous torpedoes that accompany the RoboSub platform. The proposed design builds on a prototype from last semester and focuses on yaw and speed control. Pending final approval, the new design will feature a Raspberry Pi Zero as the primary computation device for our sensing and motor control.",
                    "MicroTransAt has also made excellent progress advancing the simulation environment. The URDF (Unified Robot Description Format) has been updated to include our vehicle specifications, and the information will be used with ROS to effectively design and test field behaviors in simulation.",
                    "Thank you to all of the new members and GRAs who have been working hard at Stinger Tug. Most if not all teams have completed the hull epoxying and are making a good start at electrical and software development.",
                    "Shoutout:",
                    "I would like to extend a big thank you to Justin Wong for designing a very stylish poster with all of the MRG meeting times. The information is now available for view on the door of Weber 112 for quick reference. Keep it up!",
                    "Next Week:",
                    "As usual, RoboSub will be having a water test next Friday 9/26 at 10 am at the CRC competition pool. Key goals include bagging more data for our computer vision models and implementing fixes for the DVL (Doppler Velocity Logger) drift. New and returning members are always welcome to come out to gain field experience and chat with other club mates. If you are able to come at 9 (lab) or 2 (CRC) to help set up and break down the testing equipment, this is especially helpful.",
                    "MicroTransAt is planning on manufacturing the wingsail for the boat this week to stay on track for the upcoming wind tunnel test on October 10th. Keep an eye out for additional information both here and on Teams to stay up to date and see how you can be involved.",
                    "As always, feel free to reach out to me or any other experienced member with questions or recommendations.",
                ]
            },
            {
                week: "Week 4 — 09/26/2025",
                summary: "RoboSub water test, largest PCB order received, Discord transition announced",
                content: [
                    "Ahoy Mateys!",
                    "Thanks for another great week! Check out what we've been up to.",
                    "Let's get talking — Join our Discord!!",
                    "To simplify team communication and help members feel more in the loop, we will be beginning a transition to using Discord instead of Teams direct messaging for our project communication. Files and meetings will still be hosted on Teams, but informal communication and project discussion will be hosted on Discord. Please use your preferred name as your username.",
                    "This Week:",
                    "RoboSub had a fantastic water test today, 9/26, and was able to collect high-quality data for many of our systems. We collected data from our USB cameras and Synoptix multibeam sonar, and this data will be run through a YOLO model and fused to create objects within our semantic map and occupancy grid. Put simply, these sensors give two estimates of where objects are around the sub, and an algorithm is used to combine this data into a map that makes that information accessible to the autonomy.",
                    "We also received our largest ever order of PCBs featuring boards for RoboSub and RobotX. These boards will help us improve the functionality of many systems. Stinger Tuggers have also made good progress soldering the Stinger Hats for the vessels. Lots of good PCB work all around.",
                    "Shoutout:",
                    "Teams Subrina and Stingray are at the top of our leaderboard for the most progress on Stinger Tug. Keep up the great work!",
                    "Next Week:",
                    "RoboSub and RobotX will be having work sessions tomorrow, 9/27, starting at 10 am. RobotX will be working on implementing the backseat, and RoboSub will be discussing the mechanical revisions to our backplate, heat sinking, and internal layout. Come by if you can!",
                    "There will also be an interior conceptual design review for RoboSub next Wednesday. Stay posted for the time.",
                    "Thanks for reading!",
                ]
            },
            {
                week: "Week 5 — 10/03/2025",
                summary: "Fall Break! Microtransat wingsail CNC machining, RoboSub occupancy map and interior redesign",
                content: [
                    "Ahoy Mateys!",
                    "Happy Fall Break! I hope everyone gets to enjoy some restful and fun time off from classes.",
                    "This Week:",
                    "Microtransat had a successful week continuing to manufacture the wingsail and design the keel for the half-scale vehicle. The team made an initial pass at machining the sail with the CNC and will be creating a more finalized version tomorrow, 10/4. Additionally, the team performed analysis for the optimal mass and length for the keel for platform stability.",
                    "RoboSub has also seen strong progress in many subareas. The autonomy team created an occupancy map for synthesizing what objects are and where they are near the platform. The internal redesign team resolved a concept for the interior organization and has been hard at work defining the interfaces and functionality of the new front seat PCB stack. The new backseat has also been almost completely integrated for RobotX. Great work all!",
                    "Shoutout:",
                    "I would like to give a big shoutout to Nathan Xie for his great work developing the occupancy grid for RoboSub. It is a big step for our autonomy and much appreciated. Thank you!",
                    "Next Week:",
                    "Looking ahead, we will be conducting a design review for RoboSub's autonomous torpedoes on 10/10. This is a good time to reflect on the current design, notice any areas that could be improved, and offer suggestions. Please come by to contribute and appreciate the team's hard work if you can.",
                    "Additionally, the first official test of Microtransat's wing sail is also scheduled for Friday 10/10. This is a super exciting milestone in the project's development and will be used to better understand the dynamics of the sail and inform our system controls.",
                    "Thanks for reading!",
                ]
            },
            {
                week: "Week 6 — 10/13/2025",
                summary: "First MicroTransAt wind tunnel test, Tocaro Blue CEO visit, RobotX testing week",
                content: [
                    "Ahoy Mateys!",
                    "Thank you for bearing with me with a slightly late Sea State. Please see information for last week and this week below.",
                    "Last Week:",
                    "The most exciting news from this week was the first official MicroTransAt wind tunnel test. Several members made it out to the Montgomery Knight low-speed wing tunnel to test the new wingsail and gain a better understanding of its dynamics. This test is a huge milestone after years of conceptual development, and I am very proud of the hard work MicroTransAt has put in. More good things to come.",
                    "We also had the opportunity to host the CEO of the maritime software company, Tocaro Blue. Tocaro develops AI middleware for RADAR technology, and their algorithms help to identify and track vessels on the water. Thank you to those of you who either contributed to the tour or lab cleanup.",
                    "Shoutout:",
                    "I would like to take a moment to shout out Aaron Wu and Jeffrey Fang for sourcing and purchasing a new simulation PC. We hope that this computer will greatly streamline software training and development by allowing for better remote hosting. Thank you!",
                    "This Week:",
                    "This week, RobotX will be having dry and water tests on Tuesday, 10/14, and Saturday, 10/18, respectively. Please take a look at Teams for the car signup to attend the water test if the dry test is successful.",
                    "Additionally, I would like to encourage everyone to please take a look at their projects' schedules and personal responsibilities and make a push to keep everything on track. This is the point in the semester when I know people get very busy, but it is important to our goals to continue to push on. If you need help or support, please communicate! We are in this as a team, and our goals are only possible as the result of consistent collective effort.",
                    "Thank you to everyone who has been working hard and staying in touch!",
                ]
            },
            {
                week: "Week 7 — 10/19/2025",
                summary: "MicroTransAt wind tunnel data processing, RobotX water test postponed, PCB deadline reminder",
                content: [
                    "Ahoy Mateys!",
                    "Congratulations on another great week! Let's recap:",
                    "This Week:",
                    "Following last Friday's wind tunnel test, MicroTransAt has been hard at work reducing the collected data set. Alexander has been processing the 200,000 data points associated with each file into a manageable set of forces and torques in each direction. As said before, this data will be used to inform the software controls and mechanical limitations of the wingsail.",
                    "Unfortunately, RobotX had to postpone the water test that was scheduled for Saturday 10/18 due to integration delays that impacted the dry test. On the upside, the backseat is largely constructed, the firmware has been written in Protobuff, and the E-Stop circuit protection is working as intended. More complete integration testing began yesterday, 10/18, and a new water test date will be scheduled soon.",
                    "Shoutout:",
                    "I would like to extend a warm shoutout to Stinger Group 2 (Shin, Kenny, Tomoki, Shailen, Justin, and Ryan) for their flexibility and positive attitude. When more switches for the Stinger Tugs were not available, they rolled with the punches and were quick to get creative about how to integrate another switch type. A few electrical and mechanical changes later, and they were good to go. Keep it up!",
                    "Next Week:",
                    "I would like to give a friendly reminder that all PCBs should be done before the electrical working session tomorrow night, 10/20, so that we are on track to order on Wednesday. Please feel free to reach out to me, Aaron, Sean, or Nick with design questions or concerns.",
                    "Social:",
                    "Keep an eye out for information from Will about a social this Friday!",
                    "Thank you for reading,",
                ]
            },
            {
                week: "Week 8 — 10/26/2025",
                summary: "RoboSub pointcloud speed 2Hz → 15Hz, MicroTransAt simulation running, first PCBs from new members",
                content: [
                    "Ahoy Mateys!",
                    "Happy Sunday! Let's recap another week of progress.",
                    "Last Week:",
                    "The RoboSub software team made good progress across the board, especially with pointcloud processing. By refactoring the code from being written in Python to C++, they were able to increase the speed of the code from being able to process SONAR data at 2 Hz to 15 Hz. Additionally, the algorithm is now able to filter elements in the pointcloud that are too close to the floor or the surface, ensuring that the data is usable to the vehicle. The platform can also detect and follow the orientation of path markers (thanks Sasanka!).",
                    "MicroTransAt also had great software development. Will got the simulation up and running, and the URDF (Unified Robotics Description Format) reflects the boat's specifications. Simulation is a great tool for testing our controls and software in parallel with mechanical and electrical development, expediting our progress. Good work team!",
                    "Shoutout:",
                    "I would like to give a shoutout to Anjali Kiran and Mahika Maini for successfully creating their first official PCBs (printed circuit boards) for RoboSub. Anjali's board regulates voltages for our computation power system, providing 12V and 5V sources to our sensors and computer. Mahika's board interfaces with our thrusters, providing motor control signals and other features. Their boards were reviewed in our, again, largest review ever, with more than six boards reviewed.",
                    "This Week:",
                    "This week will be business as usual with no major anomalies. Thank you to all of you who have been working hard on their tasks, attending weekly progress meetings, and asking questions in working group meetings. Keep up the great work, and please let us know if you have any suggestions for improving the program or accelerating our progress.",
                    "Happy early Halloween!",
                ]
            },
            {
                week: "Week 9 — 11/02/2025",
                summary: "Major RobotX platform change announced by RoboNation, RoboSub soldering party, MicroTransAt wind tunnel certification",
                content: [
                    "Ahoy Mateys!",
                    "Happy Halloween! I hope you enjoyed a fun holiday weekend.",
                    "Big News: Changes to RobotX",
                    "In an effort to make the competition more accessible and emphasize multi-agent autonomy, RoboNation recently announced that they will no longer be allowing the use of the WAM-V as the competition platform. This has been a big shock to the RobotX community and to MRG, especially with so many hours of dedicated effort being poured into outfitting the WAM-V for this competition cycle. I would like to commemorate the hard work so many people have invested into the WAM-V and acknowledge the difficulty of that work not getting to be put on display in the competition. Still, we have built great skills over our time with the WAM-V, and we hope to be able to port many of the lessons, sensors, and software to the new era of RobotX.",
                    "These changes mean that we will have to rapidly modify our approach for RobotX 2026. We anticipate that the competition will still heavily emphasize surface vehicles, and we are considering reviving MRG's RoboBoat platform or using COTH BlueRobotics Blue Boats. Leadership and RobotX team members are making a plan for how to adapt to the news; as such, new member onboarding to the project will be postponed at least a week. Please keep checking Teams and Discord for updated information about the project and how to remain involved.",
                    "Last Week:",
                    "The WAM-V may be the biggest thing on our minds, but we still saw great progress across teams in the last week. From RoboSub, our pointcloud clustering algorithms are up and running, more progress has been made on path marker identification and navigation, and PCBs have been made for power distribution for the interior and autonomous torpedoes. For MicroTransAt, Alex is getting certified to use the Harper Wind Tunnel, which will aid in more vigorously testing and understanding our vessel.",
                    "Shoutout:",
                    "I would like to commemorate Nick Lai, our RobotX lead, for his resilience and leadership as MRG navigates the major changes impacting RobotX. It's a tough situation, but he is taking it like a champ.",
                    "This Week:",
                    "This week, please come on out to the lab Monday, Tuesday, and Wednesday from 1-5 pm for a RoboSub soldering party! We need all of the help we can get to manufacture all of the wire harnessing and connections to stay on track for the November 21st water test. The complete list of connections needed is available on Teams and Discord.",
                    "Additionally, RoboSub will be having a new member project onboarding meeting this Thursday from 6-7 pm to provide an overview of the electrical and mechanical infrastructure of the vehicle and what will be happening next.",
                    "MicroTransAt will also be having a wingsail design review — time TBD. Please check with Carson for additional details.",
                    "Thank you for reading!",
                ]
            },
            {
                week: "Week 10 — 11/08/2025",
                summary: "Design class registration, Stinger Tug mentorship opportunity, motors milestone, shirts arrived",
                content: [
                    "Ahoy Mateys!",
                    "I hope you are enjoying a restful weekend after a busy week. Let's review this week in MRG.",
                    "MRG Design Class Registration Reminder:",
                    "Interested in receiving academic credit for work you are already doing with MRG? Consider joining the MRG Design Competition class this Phase I registration! AE x355 Section B is a course designed to award academic credit for the hands-on robotics experience you gain for being a part of Marine Robotics Group. If you are a contributing member to MRG projects, the course is an easy way for your efforts to be reflected on your transcript and GPA. The course counts towards research credit for AE majors and as free elective credit for non-AE majors.",
                    "To register, please sign up for AE x355 B where the x is replaced by your year by credit hours (Ex junior -> AE 3555 B). The course is entirely asynchronous, and it is easy to receive a time conflict override if it appears as a conflict in your calendar. Additionally, signing up for the class during Phase I registration helps to support continued funding for our lab and graduate students. Please sign up if you can!",
                    "Leadership Opportunity:",
                    "Have you completed the Stinger Tug training program? Consider giving back and gaining leadership experience by serving as a Stinger Tug mentor! As a Stinger mentor, you would meet at least once per week with an incoming Stinger Tug group to support their progress and answer any questions that they may have. The expected time commitment is low, and it goes a long way to maintaining the longevity of the Stinger Tug project and lab. Please reach out to me or Sean Fish if you are interested.",
                    "Last Week:",
                    "Congratulations to Stinger Team 11 for successfully getting the motors spinning for their vessel! Thalia, Kirthi, Ariana, James, Tanya, and Suhani are the first group to make the milestone, and we are excited for you all to be crossing the finish line! The Stinger Tug project is wrapping up quickly, and I am proud of all of the work you all have put in. Other teams, keep it up! We hope to have a water test soon to showcase all of your completed vessels.",
                    "Shoutout:",
                    "I would like to give a big shoutout to Alexander Dumas for receiving approval for his controls model for MicroTransAt from distinguished faculty members Dr. Prasad and Dr. West. Great work!",
                    "Next Week:",
                    "RoboSub is in the home stretch to finalize the internal redesign for the November 21st water test. As senior members begin transitioning to firmware, we especially need support for mechanical and electrical interfacing tasks. Please reach out to me, Aaron Wu, or John Beeson to help out and push this project toward the finish line. We can't do it without you!",
                    "Additionally, shirts have arrived! If you paid dues to Sean Fish this semester, feel free to stop by the lab and talk to me, Aaron, Mitchell, Sean, or another board member to pick up your shirt. Shirts are available to any new or returning member who has paid dues.",
                    "Thank you for reading! Please reach out with any questions.",
                ]
            },
            {
                week: "Week 11 — 11/17/2025",
                summary: "Stinger Tug and BlueBoat maiden voyages at Sweetwater Creek, RoboSub electrical home stretch",
                content: [
                    "Ahoy Mateys!",
                    "I hope that your week is off to a great start. Let's recap the past week in MRG.",
                    "Last Week:",
                    "This past Saturday, 11/15, we had the exciting opportunity to travel to Sweetwater Creek State Park and get our Stingers and BlueBoats into the lake. It was a beautiful day made all the more glorious with some robots out on the water. The BlueBoats did a good job with station and formation keeping, and we had a lot of fun giving the Stinger Tugs their maiden voyages. Thank you to everyone who was able to come out and contribute. Photos are available on Teams (Thank you Thomas for the camera!).",
                    "Additionally, we have made good electrical progress for RoboSub. We are in the home push for our November 21st internals soft deadline. The ESCs power adapters have been almost completely soldered, as have our frontseat sensing and motor interface boards, and various mounts have been printed to secure delicate components in place.",
                    "Shirts are also in the lab and ready for pickup. If you paid dues, please talk to a board member in the lab who can get you checked off and one shirt more stylish.",
                    "Shoutout:",
                    "I would like to extend a big thank you to Peyton Lee for his work on the semantic map for RoboSub. Mitchell shouted out your hard work and consistency this week, making big contributions toward our autonomy. Keep it up!",
                    "Next Week:",
                    "We are currently scheduled for a RoboSub water test this Friday, 11/21, as a technical checkpoint for our electrical and software updates. This test is tentative due to conflicts with CRC pool space availability, but we will continue to provide updates as the situation progresses. In any case, we would like to target a Thursday night dry test, so please push on and wrap up electrical, mechanical, and software contributions to reach this milestone!",
                    "Additionally, MicroTransAt will be continuing to work on manufacturing the wingsail and keel. The optimization calculations are nearly complete, and the theoretical designs will soon become a physical reality. Reach out to get involved with mechanical opportunities here.",
                    "Keep up the great work everyone.",
                ]
            },
            {
                week: "Week 12 — 11/25/2025",
                summary: "Thanksgiving week, limited lab hours, DONUTS semester recap meeting announced for 12/3",
                content: [
                    "Hello everyone!",
                    "I hope everyone has a happy Thanksgiving and safe travels to those who are heading home. In consideration of the holiday, there are no major updates for this week and lab hours will be limited. Please reach out to a board member or GRA if you need access to the lab.",
                    "I would also like to announce that we will be having our biannual DONUTS (Discussing the Organizations Next Undertakings and The Semester) meeting at 6:30 pm on Wednesday 12/3 to recap the semester and celebrate our graduating members. We will be taking club photos as well! Donuts will be provided. Hope to see you there!",
                ]
            },
        ]
    }
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
                    Media
                </Typography>
                <Box mt={2}>
                    <StandardLine width={600} height={5} centered borderRadius={3} />
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
                        <Typography variant="h3">News and Partnerships</Typography>
                    </Box>
                    <Box mb={8}>
                        <StandardLine width={200} height={5} centered borderRadius={3} />
                    </Box>

                    <Grid container spacing={4} mb={10}>
                        {[
                            {
                                title: "MRG Partners with Tocaro Blue on Marine Radar AI",
                                image: "/media/tocaro_blue_boat.webp",
                                link: "/news/tocaro_blue"
                            },
                            {
                                title: "Coming soon!",
                                image: "/mrg_logo3.svg",
                                link: "/news/page-2"
                            },
                            {
                                title: "Coming soon!",
                                image: "/mrg_logo3.svg",
                                link: "/news/page-3"
                            }
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