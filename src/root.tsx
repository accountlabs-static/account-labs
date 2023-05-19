import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { Analytics } from '@vercel/analytics/react';
import { qwikify$ } from '@builder.io/qwik-react';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

const QAnalytics = qwikify$(Analytics);

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <QAnalytics />
      </body>
    </QwikCityProvider>
  );
});
