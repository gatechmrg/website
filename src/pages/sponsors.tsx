import Head from "next/head";
import Header from "../components/nav/Header";
import Main from "../components/sponsors/Main";
import Footer from "../components/nav/Footer";

export default function Sponsors() {

    return (
        <>
            <Head>
                <title>Sponsors | GT Marine Robotics Group</title>     
                <meta name="description"
                    content="Sponsors of the Marine Robotics Group at Georgia Tech.
                    Learn about our sponsors and how to sponsor us." />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}