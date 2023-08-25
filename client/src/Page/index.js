import React from "react";

import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Team from "./Team";
import Login from "./Login";
import RegisterAccount from "./RegisterAccount";
import Contact from "./Contact";

import { capitalize } from '../utils'

const Page = ({ currentPage }) => {
    const renderPage = (page) => {
        switch (page) {
            case 'menu':
                return <Menu />;
            case 'about':
                return <About />;
            case 'team':
                return <Team />;
            case 'login': 
                return <Login />
            case 'register-account': 
                return <RegisterAccount />
            case 'contact': 
                return <Contact />
            default:
                return <Home />;
        }
    };

    return <section className="container py-3">
        <h2 className="mb-3">{ capitalize(currentPage) }</h2>
        {renderPage(currentPage)}
    </section>;
};

export default Page;