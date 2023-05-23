import Head from "next/head";
import Header from "../../components/nav/Header";
import Main from "../../components/projects/robotx/Main";
import Footer from "../../components/nav/Footer";

export default function RobotX() {

    return (
        <>
            <Head>
                <title>RobotX | GT Marine Robotics Group</title>     
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}