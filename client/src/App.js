import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./Page";

const pages = [
  "home",
  "menu",
  "about",
  "team",
  "login",
  "contact",
  "register-account",
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="wrapper">
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      ;
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
