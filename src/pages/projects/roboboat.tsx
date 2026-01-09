import Head from "next/head";

// Redirect to the year-specific page. This page keeps a server-side redirect
// so the canonical URL for the current site points to /projects/roboboat/2024.
export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/projects/roboboat/2024",
            permanent: false,
        },
    };
}

export default function RoboBoat() {
    return (
        <>
            <Head>
                <title>RoboBoat | GT Marine Robotics Group</title>
            </Head>
            <div />
        </>
    );
}