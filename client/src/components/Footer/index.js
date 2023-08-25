import React from "react";
// import './style.css';

const Footer = () => {
    const icons = [
        {
            name: 'fab fa-github',
            link: 'htts://github.com', 
        },
        {
            name: 'fab fa-linkedin',
            link: 'htts://linkedin.com', 
        },
        {
            name: 'fab fa-stack-overflow',
            link: 'htts://stackoverflow.com', 
        },
    ];

    return (
        <footer className="d-flex justify-content-center align-items-center"> 
            { 
                // icons.map((icon) => (
                //     <a 
                //         href={icon.link} 
                //         key={icon.name}
                //         target="_blank"
                //         rel="noreferrer"
                //         className="mx-3"
                //     >
                //         <i className={`${icon.name}`}></i>
                //     </a>
                // ))
            }
        </footer>
    );
};

export default Footer;