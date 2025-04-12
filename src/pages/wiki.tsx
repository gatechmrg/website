import Head from "next/head";
import Header from "../components/nav/Header";
import Main from "../components/wiki/Main";


export default function Sponsors() {

    return (
        <>
            <Head>
                <title>Sponsors | GT Marine Robotics Group</title>     
                <meta name="description"
                    content="Wiki of the Marine Robotics Group at Georgia Tech." />
            </Head> 
            <div className="root-header-footer">
                <Header />
                <Main />
            </div>
        </>
    )
}