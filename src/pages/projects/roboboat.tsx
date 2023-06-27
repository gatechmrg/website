import Head from "next/head";
import Header from "../../components/nav/Header";
import Footer from "../../components/nav/Footer";
import Main from "../../components/projects/roboboat/Main";

export default function RoboBoat() {
    
    return (
        <>
            <Head>
                <title>RoboBoat | GT Marine Robotics Group</title>     
                <meta name="description"
                    content="The RoboBoat competition at the Marine Robotics Group at Georgia Tech:
                    building an autonomous maritime robot to compete internationally." />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}