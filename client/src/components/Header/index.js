import React from "react";
import Nav from '../Nav';
// import './style.css'

const Header = ({ pages, currentPage, setCurrentPage }) => {
    return <header className="container-fluid">

        <div className="container d-lg-flex justify-content-lg-between py-auot">
            {/* <img src={logo} alt="Logo" width="150" height="150" class="d-inline-block align-text-top" /> */}
            <h1 className="text-center" class="strokeme align-items">
                Buono's Pizza Gilbert
            </h1>
            <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        {/* <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Buono's Pizza Gilbert
                </a>
            </div>
        </nav> */}
        
    </header>;
};

export default Header;