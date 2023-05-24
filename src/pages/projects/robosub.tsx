import Head from "next/head";
import Header from "../../components/nav/Header";
import Main from "../../components/projects/robosub/Main";
import Footer from "../../components/nav/Footer";

export default function RoboSub() {

    return (
        <>
            <Head>
                <title>RoboSub | GT Marine Robotics Group</title>     
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}