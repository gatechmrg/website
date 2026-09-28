import Head from "next/head";
import Header from "../../../components/nav/Header";
import Footer from "../../../components/nav/Footer";
import Main from "../../../components/projects/robotx2026/Main";
import { robotx2026Page } from "../../../data/robotx2026";

const { meta } = robotx2026Page;

export default function RobotX2026() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="description"
          content={meta.description}
        />
      </Head>
      <div className="root-header-footer">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
