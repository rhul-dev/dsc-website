import { Inter } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import { type AppType } from 'next/dist/shared/lib/utils';

import { DefaultSeo } from 'next-seo';
import { Navbar } from '../components/Navbar';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title="RHUL Google Dev Club"
        description="The Royal Holloway Developers Club is a community of curious and open minded individuals interested in technology. The club is focused on taking a more practical and peer-to-peer approach to help bring together many single-minded people while significantly improving their employability."
      />
      <ThemeProvider attribute="class">
        <div className={`${inter.variable} font-sans`}>
          <div className="min-h-screen">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
