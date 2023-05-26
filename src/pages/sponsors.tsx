import Head from "next/head";
import Header from "../components/nav/Header";
import Main from "../components/sponsors/Main";
import Footer from "../components/nav/Footer";

export default function Sponsors() {

    return (
        <>
            <Head>
                <title>Sponsors | GT Marine Robotics Group</title>     
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}