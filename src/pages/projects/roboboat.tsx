import Head from "next/head";
import Header from "../../components/nav/Header";
import Footer from "../../components/nav/Footer";
import { Container, Box, Typography, List, ListItem, ListItemButton } from "@mui/material";
import Link from "next/link";

export default function RoboBoat() {
    const entries = [
        { year: '2024', href: '/projects/roboboat/2024' },
        { year: '2026', href: '/projects/roboboat/2026' },
    ]

    return (
        <>
            <Head>
                <title>RoboBoat | GT Marine Robotics Group</title>
            </Head>

            <div className="root-header-footer">
                <Header />

                <Container maxWidth="md" sx={{ py: 6 }}>
                    <Box textAlign="center" mb={4}>
                        <Typography variant="h3">RoboBoat</Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                            Select a RoboBoat entry to view year-specific pages and resources.
                        </Typography>
                    </Box>

                    <List>
                        {entries.map(e => (
                            <ListItem key={e.year} disablePadding>
                                <ListItemButton component={Link} href={e.href}>
                                    <Typography variant="h6">RoboBoat {e.year}</Typography>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Container>

                <Footer />
            </div>
        </>
    )
}