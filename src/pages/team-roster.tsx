import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { StandardLine } from "../components/misc/line";
import { useRouter } from "next/router";
import { GreenPrimaryButton } from "../components/misc/buttons";
import { SecondaryLink } from "../components/misc/links";
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";

const teamMembers = [
    // Grad Students first
    { name: "Jorge Ortiz Solano", title: "Electromechanical Engineer, MSME, MSAE", photo: "/team-roster/JorgeOrtizSolano.png" },
    { name: "Thomas Devlin", title: "Master of Electrons, ROBO PhD 2nd year, All Subteam(s)", photo: "/team-roster/thomas_devlin_headshot_Thomas Devlin.jpg" },
    { name: "Sean Fish", title: "Robotics PhD Student", photo: "/team-roster/SeanFish.jpeg" },
    { name: "Aaron Wu", title: "", photo: "/team-roster/AaronWu.jpg" },
    { name: "Alice Chan", title: "Robotics, 1st year PhD, sensing", photo: "/team-roster/AliceChan.jpeg" },
    { name: "Ibidapo Samuel", title: "PhD Robotics, UAV Team", photo: "/team-roster/SamuelIbidapo.jpeg" },
    // Undergrad Students second
    { name: "Allyson Martinez", title: "Club Member, CS, 3, Propulsion", photo: "/team-roster/AllysonMartinez.jpeg" },
    { name: "William McConnell", title: "2nd Year Computer Science Undergrad, Integration Team and Website", photo: "/team-roster/WilliamMcConnell.jpg" },
    { name: "Matthew Woodward", title: "4th year Computer Engineering Masters Student, Software/Control subteam", photo: "/team-roster/MatthewWoodward.jpg" },
    { name: "Shawn Coutinho", title: "3rd Year Computer Science major, Propulsion and Controls", photo: "/team-roster/ShawnCoutinho.png" },
    { name: "Daniel Mittelman", title: "Undergraduate, Computer Science Major, Third Year, Sensing", photo: "/team-roster/DanielMittelman.jpg" },
];

const fullTeamRoster = [
    "Aaron Wu",
    "Aayush Dey",
    "Alice Chan",
    "Allyson Martinez",
    "Ammar Hussein",
    "Anjika Ganjoo",
    "Brendis Kasharaj",
    "Christopher Tio",
    "Daniel Mittelman",
    "Jasmine Gistren",
    "Jinyoung Yun",
    "Joel Madrigal",
    "Jooyoung Kim",
    "Jorge Ortiz Solano",
    "Kaamoad Pradyumna Pande",
    "Kamya Rajesh",
    "Kausar Patherya",
    "Kausar Patherya",
    "Kunal Sahoo",
    "Matthew Woodward",
    "Mitchell Turton",
    "Nicholas Lai",
    "Nikhil Sathisha",
    "Nimai Ponna",
    "Paarth Mishra",
    "Richard Nguyen",
    "Rohan Godha",
    "Roy Luo",
    "Ryosuke Shibuya",
    "Samuel Ibidapo",
    "Santiago Fiz",
    "Sean Fish",
    "Sean Breton",
    "Shawn Coutinho",
    "Thomas Devlin",
    "Vishnav Deenadayalan",
    "William McConnell",
    "William Sonnleitner",
    "Yanda Chen",
    "Yiming Guo",
]



export default function TeamRosterPage() {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.push('/projects/robotx'); // Redirect to the original page (adjust the route as needed)
    };
    return (
        <Box>
            {/* Header */}
            <Header />
            <Box mt={12}>
                {/* Section 1: Roster Photos with Titles and Names */}
                <Box textAlign="center" mb={8}>
                        <Typography variant="h2">
                            Meet Our RobotX 2024 Team!
                        </Typography>
                        <Box mt={2} mb={5}>
                            <StandardLine width={200} height={5} centered borderRadius={3} />
                        </Box>
                        <Grid container spacing={4} justifyContent="center">
                            {teamMembers.map((member, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                                    <Box component="img" src={member.photo} alt={member.name} 
                                        sx={{ width: 150, height: 150, borderRadius: '50%', mb: 2 }} 
                                    />
                                    <Typography variant="h6">{member.name}</Typography>
                                    <Typography variant="body2">{member.title}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Section 2: Full List of Individual Names */}
                    <Box textAlign="center">
                        <Typography variant="h4" mb={2}>
                            Full Team Roster
                        </Typography>
                        <Box mt={2} mb={5}>
                            <StandardLine width={150} height={5} centered borderRadius={3} />
                        </Box>
                        <Box pb={4}>
                            {fullTeamRoster.map((member, index) => (
                                <Typography variant="body1" key={index}>
                                    {member}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box textAlign="center">
                    <Typography variant="h6">
                        This could be you!{" "}
                        {/* Make Join Us a clickable link */}
                        <Link 
                            href="/join-us" 
                            underline="always" 
                            sx={{ 
                                color: 'purple',
                            }}
                        >
                            Join Us!
                        </Link>
                    </Typography>

                    </Box>
                    {/* Back Button */}
                    <Box mt={4} pb={4} textAlign="center">
                        <GreenPrimaryButton onClick={handleBackButtonClick}>
                            Back to RobotX Page
                        </GreenPrimaryButton>
                    </Box>
            </Box>
            {/* Footer */}
            <Footer />
        </Box>
    )
}
