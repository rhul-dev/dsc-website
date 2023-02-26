import type { FC } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { FiBriefcase, FiGitMerge } from 'react-icons/fi';
import type { FeatureCardProps } from '../components/FeatureCard';
import { FeatureCard } from '../components/FeatureCard';

const features: FeatureCardProps[] = [
  {
    icon: <FaRegLightbulb size={20} />,
    title: 'Ideathons',
    color: 'blue',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra dictum velit vel volutpat. Vestibulum tincidunt est magna, ut cursus nunc euismod eu.',
  },
  {
    icon: <FiGitMerge size={20} />,
    title: 'Workshops',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra dictum velit vel volutpat. Vestibulum tincidunt est magna, ut cursus nunc euismod eu.',
  },
  {
    icon: <FiBriefcase size={20} />,
    title: 'Projects',
    color: 'pink',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra dictum velit vel volutpat. Vestibulum tincidunt est magna, ut cursus nunc euismod eu.',
  },
];

export const Features: FC = () => {
  return (
    <section className="container mx-auto pt-12 lg:pt-36">
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={`${feature.title}-${index}`} {...feature} />
        ))}
      </ul>
    </section>
  );
};
