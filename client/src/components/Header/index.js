import React from "react";
import Nav from '../Nav';
import '../../index.css';
import logo from '../../assets/bunos-background-transparent.png';

const Header = ({ pages, currentPage, setCurrentPage }) => {
    return <header className="flex-row px-1">
            <img className="header-logo" src={logo}/>
            <h1>Buono's Pizza Gilbert</h1>
            <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </header>;
};

export default Header;