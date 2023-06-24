import Head from "next/head";
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";
import Main from "../components/about/Main";

export default function About() {

    return (
        <>
            <Head>
                <title>About | GT Marine Robotics Group</title>     
                <meta name="description"
                    content="About the Marine Robotics Group at Georgia Tech.
                    Learn about the organization and its leadership." />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}