import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./Page";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const pages = ['home', 'menu', 'about', 'team', 'login', 'contact', 'register-account', 'details'];

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <ApolloProvider client={client}>
      <StoreProvider >
        <div className="wrapper">
          <Header
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />;
          <main>
            <Page currentPage={currentPage} />
          </main>
          <Footer />
        </div>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;

// if (process.env.NODE_ENV !== "production") {  // Adds messages only in a dev environment
//   loadDevMessages();
//   loadErrorMessages();
// }