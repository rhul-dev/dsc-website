import type { FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

type NavbarItemProps = {
  children: ReactNode;
  href: string;
};

const NavbarItem: FC<NavbarItemProps> = ({ children, href }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={twMerge(
          'text-zinc-400',
          isActive && 'font-semibold text-black dark:text-white',
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pb-12">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={330} height={40} />
      </Link>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-8">
          <NavbarItem href="/">Home</NavbarItem>
          <NavbarItem href="#about">About</NavbarItem>
          <NavbarItem href="#projects">Projects</NavbarItem>
          <NavbarItem href="#team">Team</NavbarItem>
          <NavbarItem href="#docs">Docs</NavbarItem>
          <NavbarItem href="#contact">Contact</NavbarItem>
        </ul>
        <div className="h-6 border-l border-zinc-100 dark:border-zinc-800" />
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="https://github.com/rhul-dev"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition-colors hover:text-black dark:hover:text-white"
            >
              <FiGithub size={24} strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rhul.dev.club/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition-colors hover:text-black dark:hover:text-white"
            >
              <FiInstagram size={24} strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/rhul-dev/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition-colors hover:text-black dark:hover:text-white"
            >
              <FiLinkedin size={24} strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/invite/5jySmzhE9u"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition-colors hover:text-black dark:hover:text-white"
            >
              <FaDiscord size={24} strokeWidth={2} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
