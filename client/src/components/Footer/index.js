import React from "react";
import logo from '../../assets/bunos-background-transparent.png';

const Footer = () => {
    const icons = [
        {
            name: 'fab fa-instagram',
            link: 'htts://github.com', 
        },
        {
            name: 'fab fa-facebook',
            link: 'htts://linkedin.com', 
        }
    ];

    return (
        <footer > 
            <div className="d-flex justify-content-center align-items-center">
                <img className="footer-logo" src={logo}/>
                <h1>Buono's Pizza</h1>
                { 
                    icons.map((icon) => (
                        <a 
                            href={icon.link} 
                            key={icon.name}
                            target="_blank"
                            rel="noreferrer"
                            className="mx-3">
                                <i className={`${icon.name}`}></i>
                        </a>
                    ))
                }
            </div>
            {/* <div>
                <div>
                    <h1>Folow Us</h1>
                    <div>
                        <h3>instagram</h3>
                        <h3>Facebook</h3>
                    </div>  
                </div>
                <div>
                    <h1>Learn More</h1>
                    <div>
                        <h3>Contact Us</h3>
                    </div>
                </div>
                <div>
                    <h1>Legal</h1>
                    <div>
                        <h3>Privacy Policy</h3>
                        <h3>Terms & Conditions</h3>
                    </div>  
                </div>
                <div>
                    <p>---------------------------------------------------------------------------------------------------------------------------------------------------</p>
                </div>
                <div>
                    <h1>
                        © 2023 Buonos Pizza Gilbert™. All Rights Reserved.
                    </h1>
                    { 
                    icons.map((icon) => (
                        <a 
                            href={icon.link} 
                            key={icon.name}
                            target="_blank"
                            rel="noreferrer"
                            className="mx-3">
                                <i className={`${icon.name}`}></i>
                        </a>
                    ))
                }
                </div>
            </div> */}
        </footer>
    );
};

export default Footer;