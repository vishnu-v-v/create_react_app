import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { IntlProvider, addLocaleData } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import translations from "./i18n/locales"
import { GetLocale, SetLocale } from './lib/locale'

import esLocaleData from "react-intl/locale-data/es";

addLocaleData(esLocaleData);

// get locale from cookie
const locale = GetLocale() || SetLocale("en")
const messages = translations[locale];

ReactDOM.render(
  <IntlProvider locale={locale} key={locale} messages={messages}>
    <Router>
      <App/>
    </Router>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
