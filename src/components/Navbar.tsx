import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMenu,
  FiMoon,
  FiSun
} from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

type NavbarItemProps = {
  children: ReactNode;
  href: string;
  externalLink?: boolean;
};

const NavbarItem: FC<NavbarItemProps> = ({ children, href, externalLink }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <li>
      {!externalLink ? (
        <Link
          href={href}
          className={twMerge(
            'text-zinc-900 dark:text-zinc-400',
            isActive && 'font-semibold text-black dark:text-white',
          )}
        >
          {children}
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-900 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          {children}
        </a>
      )}
    </li>
  );
};

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <button
        type="button"
        className="flex items-center text-zinc-900 transition-colors hover:text-black dark:text-zinc-400 hover:dark:text-white lg:hidden"
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        {resolvedTheme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </div>
  );
};

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Link href="/" className="flex items-center">
      {resolvedTheme === 'dark' ? (
        <Image
          src="/logo.svg"
          alt="Logo"
          width={330}
          height={40}
          className="hidden lg:inline-block"
        />
      ) : (
        <Image
          src="/logo-light.svg"
          alt="Logo"
          width={330}
          height={40}
          className="hidden lg:inline-block"
        />
      )}
      <Image
        src="/logo-mini.svg"
        alt="Logo"
        width={42}
        height={20}
        className="inline-block lg:hidden"
      />
    </Link>
  );
};

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative border-b-2 border-zinc-100 dark:border-zinc-800">
      <nav className="container relative mx-auto flex flex-col items-stretch justify-start px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        <div className="flex items-center justify-between lg:block">
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="flex items-center text-zinc-900 transition-colors hover:text-black dark:text-zinc-400 hover:dark:text-white lg:hidden"
              onClick={() => setIsActive(!isActive)}
            >
              <FiMenu size={24} />
            </button>
            <Logo />
          </div>
          <ThemeSwitcher />
        </div>

        <div
          className={twMerge(
            'absolute top-[74px] -left-full z-10 flex w-full flex-col items-stretch gap-6 bg-white px-6 py-8 transition-all dark:bg-zinc-900 lg:static lg:w-auto lg:flex-row lg:items-center lg:px-0 lg:py-0',
            isActive && 'left-0',
          )}
        >
          <ul className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center">
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/about">About</NavbarItem>
            <NavbarItem href="#projects">Projects</NavbarItem>
            <NavbarItem href="#team">Team</NavbarItem>
            <NavbarItem href="#docs">Docs</NavbarItem>
            <NavbarItem href="#contact">Contact</NavbarItem>
          </ul>

          <div className="hidden h-6 border-l border-zinc-100 dark:border-zinc-800 lg:inline-block" />

          <ul className="flex items-center gap-4 pt-4 lg:pt-0">
            <NavbarItem externalLink href="https://github.com/rhul-dev">
              <FiGithub size={24} strokeWidth={2} />
            </NavbarItem>
            <NavbarItem
              externalLink
              href="https://www.instagram.com/rhul.dev.club/"
            >
              <FiInstagram size={24} strokeWidth={2} />
            </NavbarItem>
            <NavbarItem
              externalLink
              href="https://www.linkedin.com/company/rhul-dev/"
            >
              <FiLinkedin size={24} strokeWidth={2} />
            </NavbarItem>
            <NavbarItem
              externalLink
              href="https://discord.com/invite/5jySmzhE9u"
            >
              <FaDiscord size={24} strokeWidth={2} />
            </NavbarItem>
          </ul>
        </div>
      </nav>
    </div>
  );
};
