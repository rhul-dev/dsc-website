import Image from 'next/image';
import { members } from '../data/members';

export const Team = () => {
  return (
    <div className="container mx-auto pb-12 lg:pb-36" id="team">
      <div className="py-12 pb-16 text-center text-4xl font-bold">
        Meet the Team
      </div>
      <ul className="mx-auto flex max-w-4xl flex-wrap gap-12 lg:gap-24">
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
              className="h-24 w-24 rounded-full lg:h-32 lg:w-32"
            />
            <div className="pt-4 text-center">
              <h3 className="text-sm">{member.name}</h3>
              <p className="pt-1 text-xs opacity-50">{member.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
