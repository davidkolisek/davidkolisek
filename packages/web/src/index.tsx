import i18next from "i18next";
import React from "react";
import { render } from "react-dom";
import { I18nextProvider } from "react-i18next";
import "./index.css";
import App from "./pages/App";
import { unregisterPWA } from "./serviceWorker";
import common_en from "./translations/en/common.json";
import common_sk from "./translations/sk/common.json";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  ApolloLink,
  ApolloProvider,
  createHttpLink,
} from "@apollo/react-hooks";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    sk: {
      common: common_sk, // 'common' is our custom namespace
    },
    en: {
      common: common_en,
    },
  },
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql"

  // uri: 'https://small-bang-api.herokuapp.com/'
});

// const authLink = setContext(() => {
//   const token = localStorage.getItem("jwtToken");
//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("jwtToken");
  operation.setContext(({ headers }) => ({
    headers: {
      Authorization: token ? `Bearer ${token}` : "asd",
      ...headers,
    },
  }));
  return forward(operation);
});


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

client.defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
};


render(
  <I18nextProvider i18n={i18next}>
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
    </I18nextProvider>,
  document.getElementById("root")
);

unregisterPWA();
