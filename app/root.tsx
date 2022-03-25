import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction,
  useTransition,
} from 'remix';
import type { MetaFunction } from 'remix';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import type { ColorScheme } from '@mantine/core';
import { useState, ReactNode, useEffect } from 'react';

import NProgress from 'nprogress';
import nprogressStyles from 'nprogress/nprogress.css';

import Layout from './components/Layout';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix - Digimon API',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: nprogressStyles,
  },
];

NProgress.configure({
  showSpinner: false,
});

export default function App() {
  const transition = useTransition();

  useEffect(() => {
    if (transition.state === 'loading' || transition.state === 'submitting') {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [transition.state]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MantineTheme>
          <Layout>
            <Outlet />
          </Layout>
        </MantineTheme>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function MantineTheme({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withNormalizeCSS
        withGlobalStyles
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
