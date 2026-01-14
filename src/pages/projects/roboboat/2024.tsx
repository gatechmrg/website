import Head from "next/head";
import Header from "../../../components/nav/Header";
import Footer from "../../../components/nav/Footer";
import Main from "../../../components/projects/roboboat/Main";

export default function RoboBoat2024() {
    return (
        <>
            <Head>
                <title>RoboBoat 2024 | GT Marine Robotics Group</title>
                <meta name="description" content="RoboBoat 2024 — GT Marine Robotics Group." />
            </Head>
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}
