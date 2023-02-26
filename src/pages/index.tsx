import { type NextPage } from 'next';
import { About } from '../sections/about';
import { Features } from '../sections/features';
import { Header } from '../sections/header';
import { Team } from '../sections/team';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Features />
      <About />
      <Team />
    </>
  );
};

export default Home;
