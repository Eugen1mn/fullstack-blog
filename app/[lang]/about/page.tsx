import './about.scss';

import {
  Hero,
  Process,
  Projects,
  Stats,
  Team,
  Timeline,
} from '../../components';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Team />
      <Process />
      <Timeline />
      <Projects />
    </>
  );
}
