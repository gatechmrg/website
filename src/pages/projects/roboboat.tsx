import Head from "next/head";
import Header from "../../components/nav/Header";
import Footer from "../../components/nav/Footer";
import Main from "../../components/projects/roboboat/Main";

export default function RoboBoat() {
    
    return (
        <>
            <Head>
                <title>RoboBoat | GT Marine Robotics Group</title>     
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}