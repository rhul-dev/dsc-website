import { type NextPage } from 'next';
import { About } from '../sections/about';
import { Features } from '../sections/features';
import { Footer } from '../sections/footer';
import { Header } from '../sections/header';
import { Team } from '../sections/team';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="px-6 lg:px-0">
        <Features />
        <About />
        <Team />
      </div>
      <Footer />
    </>
  );
};

export default Home;
