import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Team from "./Team";
import Login from "./Login";
import RegisterAccount from "./RegisterAccount";
import Contact from "./Contact";
import Details from "./Details";
import { capitalize } from '../utils';

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
                return <Login />;
            case 'register-account': 
                return <RegisterAccount />;
            case 'contact': 
                return <Contact />;
            case 'details':
                return <Details />;
            default:
                return <Home />;
        };
    };

    return <section>{ renderPage(currentPage) }</section>;
};

export default Page;