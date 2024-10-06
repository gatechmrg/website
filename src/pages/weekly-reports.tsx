import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../components/misc/line";
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";
import { GreenPrimaryButton } from "../components/misc/buttons";
import { useRouter } from "next/router";

const weeklyUpdates = [
    { 
        week: "08/30/2024", 
        report: [
            "It’s the final Friday of August and the Fall 2024 semester at Georgia Tech is in full swing! We are happy to welcome everyone back and welcome the new first years to campus. There is a glaring but anticipative day in the Marine Robotics Group’s future: November 3rd, 2024. Just 9 weeks to go until the 2024 RobotX competition.", 
            "We’ve got a few things on our to-do list here at GT MRG. Much of that includes the hand and computational calculations on the propulsion side of RobotX. GT MRG is actively recruiting for web development this week and onward! With the influx of new students, we hope to have a successful recruiting process. Speaking of new students, this week we compiled together a detailed list of all of the RobotX sub teams, sub team leads, and sub team members to establish POCs. Detailing what exactly is RobotX to our new students was critical this week. We have a busy fall ahead of us, which is why Fall 2024 training starts now, whether it’s mechanical, electrical, software, simulations, integration, or anything else."
        ] 
    },
    { 
        week: "09/06/2024", 
        report: [
            "Another week down, just 8 more to go. We’ve got a plethora of updates for the GT MRG RobotX team. We’ve made an order for a radio to streamline radio communications. Contact has been made, we are currently waiting for a final confirmation email of the shipment. With that, there are a few mechanical and communication tasks which include the creation of a safety box for our radio and a mechanical ground station design.", 
            "On the topic of communications, new updates this week include the coordination with our communications lead, Jorge, to establish control GUI and fulfill set requirements. The goal is to take ROS info and convert that into a graphical result to show GPS and more.",
            "Propulsion is still leading the charge in pushing us forward, literally. This week, goals include coordinating tasks between both motors via 2 subscribers/PCB boards. Our YAW rotation bits have been manufactured with a few final materials pending. The planned assembly is set to be finished today, September 6th, 2024. The goal is to have all parts mounted on the box and working by September 12th.",
            "Our power and integration sub team is recruiting extra hands. Updates include drilling, remote emergency stop integration, patching pontoons, and more. Moving straight to sensing and perception, the 3 camera system is now publishing ROS; we're seeking to have all camera systems formatted into a single view soon. Flying on over to UAV updates, testing is inbound! The team is continuing to work on the report, video, and website development. Thank you!"
        ] 
    },
    { 
        week: "09/13/2024", 
        report: [
            "A few weeks into the fall semester GT MRG is making steady progress. Our goal is to have a lake test by the end of September.", 
            "We’ve got quite a few weekly updates for each of our subteams! Starting with integration, the first yaw mount is on the WAM-V, we are waiting for more material to finish the second YAW mount as it stands. Integration undergraduates (and new members!) are currently working on a few design projects. Firstly, we have a GPS antenna mount and light tower mount being designed, set to be finished by next week. Emergency stop mounts and a fitting for our inverter is also being designed. Last, but not least, soldering, soldering, soldering is being learned and taking place by our integrators.",
            "Propulsion is virtually complete!  The final step is integration. There are a few loose ends to tie up, including a fabricated PCB,  separate board for YAM mechanisms with 3 microcontrollers total, and likely to have a USB switch.",
            "The power team has quite a few updates for us this week. Power has a board created for power regulation and is planning to desolder one board. There’s a few issues with the antheral connector pins that are currently being worked on with JLC boards pending. Power is also working on reverse current voltage protection! Starting in the preliminary stage and as with any engineering design process: currently researching/coursing safety measures. A 90 Amperage, 60 Voltage current sensor should be enough. Additionally, our emergency stop needs to be disconnected from relays( with no worry about high relay). Finally, there’s a few things on the shopping list, power is planning to obtain ring terminals and rings terminal bus, as well as wire.",
            "Sensing and controls is trekking along with progress, this week’s updates include progress on cloud fusion. Implementation needs to be verified. Our homographic visual serverying has been implemented and is receiving a solid overview in the coming days! Next on the list for sensing and controls: testing (next week)!",
            "This week, we have an update for water testing! Team leadership is booking a truck to haul our nearly 500-lb WAM-V, as well as coordinating disassembly for transportation. A date has been finalized: September 28th, 2024 is our next water test!",
            "Overall, the team as a whole is working on the design report, team video, and more. Thanks!",
        ] 
    },
    { 
        week: "09/20/2024", 
        report: [
            "GT MRG is back for another week, and as always we’ve got progress made and things that need to be done. Starting with UAV, we’ve had a test done on Wednesday. One of the glaring problems that took place was battery voltage dropping to 1.5V in a single cell, causing a crash. A cell replacement will likely take place to see if it was an issue with just that battery cell. Additional testing for the UAV is planned for the future.", 
            "Integration is busy and we have quite a few updates. The left yaw mechanism is completed, and the right yaw mechanism material is ready to go. Mounts for our inverter are being designed and ideally printed within the next few days. Retermination for motor and yawl cables from their current state to new connection ends are being done. By next week, we’ll have our holding cell for electronics cut up and parts laser cut to allow wires to be led through.  Looking towards the future, there are a few tasks to be done, such as mounting the emergency stops onto the WAM-V, finishing the GPS antenna design, and completing pontoon patching (which should be done today! Update: It was!) To finish off, this week we’re looking into a custom harness for LIDAR mount." ,
            "Communication systems have made a bit of progress this week. Doodle Labs are still awaiting shipment, therefore communication is looking into backup plans (using a router) to be ready for our lake test in the coming weeks. Light tower has a scaffold/schematic of being not ethernet controlled. A microcontroller is needed and PCB design for the light tower is in progress. The goal is to mill by Monday.",
            "Propulsion has just a small update this week, parts for the YAW Mechanism are being ordered soon and a PCB has been ordered, estimated arrival: 2-5 days. Power systems has completed the BUC converter boards and are waiting for cable orders (XT60 Plug,  24V for Yaw (Regulated), 24V for POE (Regulated) ). Emergency stops has soldering pending and a board is needed to convert from BUS to Amphenol cable.",
            "Software has big updates this week, VRX localization issues have been resolved and controller testing (logic of controller) is fine, but the model used for the controller does not mesh great with the VRX. We think a switch from linear to a different model system will help with controls. Overall, for software mapping has been fine. Moving on into sensing, the LIDAR and camera are having a bit of connection issues, but those are being actively troubleshooted. Testing for these systems is pending until connection is established, however the system may be physically integrated for computer testing. Thanks everyone!",
            "Overall, GT MRG is looking to get some basic documentation done of what works and what doesn’t with a water test. The questions we are asking ourselves in the coming weeks (in regards to the WAM-V) are: does it float? Does it move? Is there manual control? Can the system move from this point to this point via GPS? Finally, can we collect data via the cameras for data collection.",
        ] 
    },
    { 
        week: "09/27/2024", 
        report: [
            "As you all might have seen, Hurricane Helene hit land this past Thursday and impacted the state of Georgia greatly. Unfortunately, due to this weather, the water test for GT MRG’s WAM-V has been postponed to next Saturday.  However, we do have a few updates for this week!", 
            "Starting with UAV, Tuesday testing was done and there are a few things to take note of. Location pinpointing is still in progress for markers, and an upcoming test is happening this Monday.",
            "Integration has made steady progress this week. We have manufactured and installed water tight panels for our motor control, IMU, and GPS box. Parts have been laser cut, installed, and the system is largely completed. Our motor cables have been re-terminated to M12, and holes have been drilled in preparation for the YAW mechanism. Finally, BUS bars have arrived and are planning to be mounted soon.",
            "Communication systems have made a bit of progress this week. Doodle Labs are still awaiting shipment, therefore communication is looking into backup plans (using a router) to be ready for our lake test in the coming weeks. Ground station is working on connecting WALLE or EVE to WiFi, troubleshooting is currently taking place. However, a tripod is being finalized soon to hold this system. The light tower system has had a firmware update completed and boards are being reconnected at the moment.",
            "Propulsion has had a few small updates since completion last week. There a few small parts being ordered for backup and boards are finalized. Propulsion is ready for water testing! Moving straight on into power, the main focus this week is building and integrating the BUS system. Each motor will be directly connected to a single battery, and each battery will supply power to the electronics. Power is still awaiting shipment for ring terminals and has a new task: soldering the buck converter.",
            "Software has a quick update this week, with a new manual control branch pushed back until further notice. Moving on into sensing, we hope to have testing this weekend, ideally avoiding the storm planning to hit Georgia. Finally our control team has the last update for the week: path following system is done. Giving the GPS system a coordinate, the WAM-V finds a way and stops if an obstacle is in the way. Thank you!",
        ] 
    },
    // Add more weeks as needed
];


export default function WeeklyReports() {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.push('/projects/robotx'); // Redirect to the original page (adjust the route as needed)
    };
    return (
        <Box>
            <Box>
                {/* Header */}
                <Header />
                <Box sx={{
                backgroundImage: "url(projects/robotx/weekly-updates.jpg)",
                height: 500,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
            }}></Box>

            {/* Main Content */}
            <Box mt={12}>
                <Container maxWidth="xl">
                    <Box textAlign="center" mb={8}>
                        <Typography variant="h2">
                            Weekly Reports
                        </Typography>
                    </Box>
                    <Box mt={2} mb={5}>
                        <StandardLine width={200} height={5} centered borderRadius={3} />
                    </Box>
                    <Box textAlign="center" mb={8}>
                        <Typography variant = "h3">
                            Fall Semester 2024
                        </Typography>
                    </Box>
                    {/* Weekly Updates Stacked Vertically */}
                    <Box>
                        {weeklyUpdates.map((update, index) => (
                            <Box
                                key={index}
                                border={1}
                                borderColor="grey.300"
                                borderRadius={2}
                                p={2}
                                mb={4} // Add margin below each box for spacing
                                sx={{ backgroundColor: 'background.paper', width: '100%' }} // Ensures full width
                            >
                                <Typography variant="h6" textAlign="center">
                                    {update.week}
                                </Typography>
                                {update.report.map((paragraph, pIndex) => (
                                    <Typography 
                                        key={pIndex} 
                                        variant="body2" 
                                        textAlign="left" 
                                        sx={{ mt: pIndex === 0 ? 1 : 2 }} // Adds top margin for paragraphs
                                    >
                                        {paragraph}
                                    </Typography>
                                ))}

                            </Box>
                        ))}
                    </Box>
                        {/* Back Button */}
                        <Box mt={4} textAlign="center">
                        <GreenPrimaryButton onClick={handleBackButtonClick}>
                            Back to RobotX Page
                        </GreenPrimaryButton>
                    </Box>
                </Container>
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
        </Box>
    );
}
