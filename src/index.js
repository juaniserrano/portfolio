import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

import globalEs from './translations/es/global.json';
import globalEn from './translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    en: {
      global: globalEn,
    },
    es: {
      global: globalEs,
    },
  },
});

ReactDOM.render(
  <>
    <I18nextProvider i18n={i18next}>
      <GlobalStyles />
      <Typography />
      <App />
      <Footer />
    </I18nextProvider>
  </>,
  document.getElementById('root')
);
