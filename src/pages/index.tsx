import { type NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiBriefcase, FiStar } from 'react-icons/fi';
import { members } from '../data/members';

const Home: NextPage = () => {
  return (
    <div className="scroll-smooth">
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
      <div className="container mx-auto py-36" id="about">
        <div className="pb-12 text-center text-4xl font-bold">About us</div>
        <div className="mx-auto flex max-w-4xl flex-col gap-3 text-zinc-700 dark:text-zinc-300 [&_strong]:text-black dark:[&_strong]:text-white">
          <p>
            The <strong>Royal Holloway Developers Club</strong> is a community
            of curious and open minded individuals interested in{' '}
            <strong>technology</strong>. The club is focused on taking a more{' '}
            <strong>practical</strong> and peer-to-peer approach to help bring
            together many single-minded people while{' '}
            <strong>significantly</strong>
            improving their employability.
          </p>
          <p>
            <strong>Our goal</strong> is to see the{' '}
            <strong>developers club</strong> become a hub for students from all
            faculties looking for opportunities to improve their knowledge
            (currently within the field of <strong>Computer Science</strong>)
            and a platform for all providers of opportunities to find potential
            uptakers (e.g. CodeGroovers, Student initiated project, UROP,
            industry, …)
          </p>
        </div>
      </div>
      <div className="container mx-auto pb-36" id="team">
        <div className="py-12 pb-16 text-center text-4xl font-bold">
          Meet the Team
        </div>
        <ul className="mx-auto flex max-w-4xl flex-wrap gap-24">
          {members.map((member) => (
            <li
              key={member.name}
              className="flex flex-grow flex-col items-center"
            >
              <Image
                src={member.avatar}
                alt={member.name}
                height={128}
                width={128}
                className="h-32 w-32 rounded-full"
              />
              <div className="pt-4 text-center">
                <h3 className="text-sm">{member.name}</h3>
                <p className="pt-1 text-xs opacity-50">{member.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
