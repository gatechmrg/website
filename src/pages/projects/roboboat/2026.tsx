import Head from "next/head";
import Header from "../../../components/nav/Header";
import Footer from "../../../components/nav/Footer";
import { Box } from "@mui/material";
import Link from "next/link";
import { GreenPrimaryButton } from "../../../components/misc/buttons";

export default function RoboBoat2026() {
    return (
        <>
            <Head>
                <title>RoboBoat 2026 | GT Marine Robotics Group</title>
                <meta name="description" content="RoboBoat 2026 — content coming soon." />
            </Head>
            <div className="root-header-footer">
                <Header />
                <main style={{padding: '4rem', textAlign: 'center'}}>
                    <h1>RoboBoat 2026</h1>
                    <p>This page is a placeholder for RoboBoat 2026 content. Edit <code>src/pages/projects/roboboat/2026.tsx</code> to update.</p>

                    <Box sx={{display: 'flex', gap: 2, justifyContent: 'center', mt: 3}}>
                        <Link href="/projects/roboboat/2026/technical-design-report.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <GreenPrimaryButton>
                                Technical Design Report
                            </GreenPrimaryButton>
                        </Link>

                        <Link href="/projects/roboboat/2026/timeline/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <GreenPrimaryButton>
                                Development Timeline
                            </GreenPrimaryButton>
                        </Link>
                    </Box>
                </main>
                <Footer />
            </div>
        </>
    )
}
