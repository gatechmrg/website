import Head from "next/head";
import Header from "../../components/nav/Header";
import Main from "../../components/projects/robosub/Main";
import Footer from "../../components/nav/Footer";

export default function RoboSub() {

    return (
        <>
            <Head>
                <title>RoboSub | GT Marine Robotics Group</title>     
                <meta name="description" 
                    content="The RoboSub competition at the Marine Robotics Group at Georgia Tech:
                    building an autonomous sub to compete internationally." />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}