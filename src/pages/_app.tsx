import { ThemeProvider } from 'next-themes';
import { type AppType } from 'next/dist/shared/lib/utils';
import { Inter } from '@next/font/google';

import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';

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
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
