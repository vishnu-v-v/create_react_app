import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import { IntlProvider, addLocaleData } from "react-intl";
import * as serviceWorker from './serviceWorker';
import translations from "./i18n/locales"

import esLocaleData from "react-intl/locale-data/es";

addLocaleData(esLocaleData);

// get locale from url
const locale = window.location.search.replace("?locale=","") || "en"
const messages = translations[locale];

ReactDOM.render(
  <IntlProvider locale={locale} key={locale} messages={messages}>
    <Index />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
