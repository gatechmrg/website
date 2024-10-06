import { Box, Container, Grid, Typography } from "@mui/material";
import { StandardLine } from "../components/misc/line";
import { useRouter } from "next/router";
import { GreenPrimaryButton } from "../components/misc/buttons";
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";

const teamMembers = [
    // Grad Students first
    { name: "Jorge Ortiz Solano", title: "Electromechanical Engineer, MSME, MSAE", photo: "/team-roster/JorgeOrtizSolano.png" },
    { name: "Matthew Woodward", title: "4th year Computer Engineering Masters Student, Software/Control subteam", photo: "/team-roster/MatthewWoodward.jpg" },
    { name: "Thomas Devlin", title: "Master of Electrons, ROBO PhD 2nd year, All Subteam(s)", photo: "/team-roster/thomas_devlin_headshot_Thomas Devlin.jpg" },
    { name: "Sean Fish", title: "Temporary Title", photo: "/team-roster/blank_headshot.webp" },
    { name: "Aaron Wu", title: "Temporary Title", photo: "/team-roster/blank_headshot.webp" },
    { name: "Alice Chan", title: "Temporary Title", photo: "/team-roster/blank_headshot.webp" },
    { name: "Ibidapo Samuel", title: "PhD Robotics, UAV Team", photo: "/team-roster/SamuelIbidapo.jpeg" },
    // Undergrad Students second
    { name: "William McConnell", title: "2nd Year Computer Science Undergrad, Integration Team and Website", photo: "/team-roster/WilliamMcConnell.jpg" },
    // Add more team members as needed
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
                        <Box>
                            {fullTeamRoster.map((member, index) => (
                                <Typography variant="body1" key={index}>
                                    {member}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    
                    {/* Back Button */}
                    <Box mt={4} textAlign="center">
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
