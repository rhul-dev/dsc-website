import type { FC } from 'react';

export const About: FC = () => {
  return (
    <div className="container mx-auto py-36" id="about">
      <div className="pb-12 text-center text-4xl font-bold">About us</div>
      <div className="mx-auto flex max-w-4xl flex-col gap-3 text-zinc-700 dark:text-zinc-300 [&_strong]:text-black dark:[&_strong]:text-white">
        <p>
          The <strong>Royal Holloway Developers Club</strong> is a community of
          curious and open minded individuals interested in{' '}
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
          (currently within the field of <strong>Computer Science</strong>) and
          a platform for all providers of opportunities to find potential
          uptakers (e.g. CodeGroovers, Student initiated project, UROP,
          industry, …)
        </p>
      </div>
    </div>
  );
};
