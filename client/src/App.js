import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import About from './Page/About';
// import Contact from './Page/Contact';
import Details from './Page/Details';
import Home from './Page/Home';
import Login from './Page/Login';
import Menu from './Page/Menu';
import NoMatch from './Page/NoMatch';
import RegisterAccount from './Page/RegisterAccount';
// import Team from './Page/Team';

import Nav from './components/Nav';
// import Header from './components/Header';
import Footer from './components/Footer';

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <Header> */}
          <StoreProvider>
            <Nav/>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/register-account" 
                element={<RegisterAccount />} 
              />
              <Route 
                path="/menu" 
                element={<Menu />} 
              />
              <Route 
                path="/products/:id" 
                element={<Details />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </StoreProvider>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

// if (process.env.NODE_ENV !== "production") {  // Adds messages only in a dev environment
//   loadDevMessages();
//   loadErrorMessages();
// }