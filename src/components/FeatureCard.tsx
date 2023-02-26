import type { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  color?: 'red' | 'blue' | 'pink';
};

export const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  children,
  color = 'red',
}) => {
  return (
    <li
      className={twMerge(
        'rounded-2xl border-2 bg-gradient-to-b p-8',
        color === 'red' && 'border-red-500/10 from-red-500/5 to-red-500/10',
        color === 'blue' && 'border-blue-500/10 from-blue-500/5 to-blue-500/10',
        color === 'pink' && 'border-pink-500/10 from-pink-500/5 to-pink-500/10',
      )}
    >
      <div
        className={twMerge(
          'relative mb-4 h-16 w-16 overflow-hidden rounded-full bg-gradient-to-r',
          color === 'red' && 'from-red-500 to-red-700',
          color === 'blue' && 'from-blue-500 to-blue-700',
          color === 'pink' && 'from-pink-500 to-pink-700',
        )}
      >
        <div className="absolute bottom-0 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-md bg-white text-black">
          <div>{icon}</div>
        </div>
      </div>
      <h2 className="mb-2 text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="leading-7 opacity-80">{children}</p>
    </li>
  );
};
