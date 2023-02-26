import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';
import { FiHeart, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-zinc-900 pt-12 pb-8 text-white dark:bg-white dark:text-black">
      <div className="container mx-auto flex w-full flex-col justify-between gap-8 px-6 pb-16 lg:flex-row lg:gap-0 lg:px-0">
        <section>
          <h3 className="text-xl font-semibold">Links</h3>
          <ul className="flex flex-col gap-3 pt-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="flex flex-col gap-3 pt-4">
            <li>
              <a href="mailto:" className="flex items-center gap-3">
                <FiMail /> Email
              </a>
            </li>
            <li>
              <a href="mailto:" className="flex items-center gap-3">
                <FaDiscord /> Discord
              </a>
            </li>
            <li>
              <a href="mailto:" className="flex items-center gap-3">
                <FiInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="mailto:" className="flex items-center gap-3">
                <FiLinkedin /> Linkedin
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Legal</h3>
          <ul className="flex flex-col gap-3 pt-4">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 lg:flex-row lg:gap-0 lg:px-0">
        <p className="order-4 flex items-center gap-[6px] lg:order-2">
          Made with <FiHeart strokeWidth={3} fill="red" stroke="red" /> in
          Egham.
        </p>
        <p className="order-3 text-right">
          &copy; {new Date().getFullYear()} RHUL Dev Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
