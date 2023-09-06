import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Details from "./Page/Details";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Menu from "./Page/Menu";
import NoMatch from "./Page/NoMatch";
import RegisterAccount from "./Page/RegisterAccount";
import About from "./Page/About";
import Contact from "./Page/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
        <div className="content-container">
          <StoreProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<RegisterAccount />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About/>} />
              <Route path="/products/:id" element={<Details />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </StoreProvider>
        </div>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;