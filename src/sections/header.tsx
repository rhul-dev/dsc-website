import Link from 'next/link';
import type { FC } from 'react';
import { FiBriefcase, FiStar } from 'react-icons/fi';

export const Header: FC = () => {
  return (
    <header className="flex min-h-[calc(100vh-72px)] items-center justify-start bg-[url('/background.svg')] bg-cover bg-left dark:bg-[url('/background-dark.svg')] lg:min-h-[calc(100vh-90px)]">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="inline-block w-full rounded-xl bg-zinc-100 p-8 leading-7 shadow-xl dark:bg-zinc-800 lg:w-3/4 lg:p-24">
          <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">
            Community <br /> focused on making <br /> knowledge{' '}
            <span className="underline decoration-blue-500 underline-offset-[16px] lg:underline-offset-[24px]">
              practical
            </span>
            .
          </h1>
          <p className="max-w-[55ch] pt-8 text-base leading-7 text-zinc-800 dark:text-zinc-300 lg:pt-12 lg:text-lg">
            The Royal Holloway Developers Club is a group of curious and open
            minded individuals interested in technology. The club takes a
            peer-to-peer approach to learning through projects and workshops.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 lg:mt-12 lg:flex-row lg:gap-6">
            <Link
              href="/projects"
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-500 px-5 py-2 text-lg font-semibold text-white transition-colors hover:bg-blue-700 lg:w-auto"
            >
              <FiBriefcase strokeWidth={2.5} />
              Projects
            </Link>
            <Link
              href="/projects"
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-black px-5 py-2 text-lg font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 lg:w-auto"
            >
              <FiStar strokeWidth={2.5} />
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
