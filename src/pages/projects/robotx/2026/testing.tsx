import Head from 'next/head';
import Header from '../../../../components/nav/Header';
import Footer from '../../../../components/nav/Footer';
import TimelinePage from '../../../../components/projects/robotx2026/TimelinePage';
import { robotx2026Timeline } from '../../../../data/robotx2026';

const { meta } = robotx2026Timeline;

export default function RobotX2026Testing() {
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
        <TimelinePage />
        <Footer />
      </div>
    </>
  );
}
