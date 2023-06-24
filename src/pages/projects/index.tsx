import Head from "next/head";
import Header from "../../components/nav/Header";
import Footer from "../../components/nav/Footer";
import Main from "../../components/projects/index/Main";

export default function Projects() {

    return (
        <>
            <Head>
                <title>Projects | GT Marine Robotics Group</title>   
                <meta name="description" 
                    content="Projects at the Marine Robotics Group at Georgia Tech:
                    Microtransat, RoboBoat, RobotX, RoboSub" />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}