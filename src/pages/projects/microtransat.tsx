import Head from "next/head";
import Header from "../../components/nav/Header";
import Main from "../../components/projects/microtransat/Main";
import Footer from "../../components/nav/Footer";

export default function Microtransat() {

    return (
        <>
            <Head>
                <title>Microtransat | GT Marine Robotics Group</title>     
                <meta name="description"
                    content="The Microtransat project at the Marine Robotics Group at Georgia Tech:
                        sending an autonomous boat across the Atlantic." />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}