import { type NextPage } from 'next';
import Link from 'next/link';
import { FiBriefcase, FiStar } from 'react-icons/fi';

const Home: NextPage = () => {
  return (
    <>
      <header className="flex min-h-[calc(100vh-90px)] items-center justify-start bg-[url('/background.svg')] bg-cover bg-left dark:bg-[url('/background-dark.svg')]">
        <div className="container mx-auto">
          <div className="inline-block w-3/4 rounded-xl bg-zinc-100 p-24 shadow-xl dark:bg-zinc-800">
            <h1 className="text-6xl font-bold leading-tight">
              Community <br /> focused on making <br /> knowledge{' '}
              <span className="underline decoration-blue-500 underline-offset-[24px]">
                practical
              </span>
              .
            </h1>
            <p className="max-w-[55ch] pt-12 text-lg text-zinc-800 dark:text-zinc-300">
              The Royal Holloway Developers Club is a group of curious and open
              minded individuals interested in technology. The club takes a
              peer-to-peer approach to learning through projects and workshops.
            </p>
            <div className="mt-12 flex items-center gap-6">
              <Link
                href="/projects"
                className="flex items-center gap-3 rounded-lg bg-blue-500 px-5 py-2 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <FiBriefcase strokeWidth={2.5} />
                Projects
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-3 rounded-lg bg-black px-5 py-2 text-lg font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                <FiStar strokeWidth={2.5} />
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
