import Head from "next/head";
import Header from "../../components/nav/Header";
import Footer from "../../components/nav/Footer";
import Main from "../../components/projects/index/Main";

export default function Projects() {

    return (
        <>
            <Head>
                <title>Projects | GT Marine Robotics Group</title>   
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}