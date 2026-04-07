import Head from "next/head";
import Header from "../../components/nav/Header";
import Main from "../../components/support-us/sponsor/Main";
import Footer from "../../components/nav/Footer";

export default function Sponsors() {

    return (
        <>
            <Head>
                <title>Sponsor MRG!</title>     
                <meta name="description"
                    content="How to sponsor the Marine Robotics Group at Georgia Tech." />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}