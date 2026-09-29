import Head from "next/head";
import Header from "../../../components/nav/Header";
import Main from "../../../components/projects/robotx/Main";
import Footer from "../../../components/nav/Footer";

export default function RobotX2024() {

    return (
        <>
            <Head>
                <title>RobotX 2024 | GT Marine Robotics Group</title>
                <meta name="description"
                    content="The RobotX 2024 competition entry at the Marine Robotics Group at Georgia Tech:
                    building the multi-robot autonomy of a 16-foot pontoon boat and drone." />
            </Head>
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}
