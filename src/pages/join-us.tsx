import Head from "next/head";
import Header from "../components/nav/Header";
import Main from "../components/join-us/Main";
import Footer from "../components/nav/Footer";

export default function JoinUs() {

    return (
        <>
            <Head>
                <title>Join Us | GT Marine Robotics Group</title>     
                <meta name="description"
                    content="Join the Marine Robotics Group at Georgia Tech!" />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}