import Head from "next/head";
import Header from "../../components/nav/Header";
import Main from "../../components/support-us/individual/Main";
import Footer from "../../components/nav/Footer";

export default function Sponsors() {

    return (
        <>
            <Head>
                <title>Support MRG!</title>     
                <meta name="description"
                    content="How to support the Marine Robotics Group at Georgia Tech." />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}