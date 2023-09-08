import React from "react";
import logo from "../../assets/bunos-background-transparent.png";

const Footer = () => {
  const icons = [
    {
      name: "fab fa-instagram",
      link: "htts://github.com",
    },
    {
      name: "fab fa-facebook",
      link: "htts://linkedin.com",
    },
  ];

  return (
    <footer className="footer">
      <div className="d-flex justify-content-center align-items-center">
        <img className="footer-logo" src={logo} />
        <h1>Buono's Pizza</h1>
          {icons.map((icon) => (
            <a
              href={icon.link}
              key={icon.name}
              target="_blank"
              rel="noreferrer"
              className="mx-3"
            >
              <i className={`${icon.name}`}></i>
            </a>
          ))}  
          <div className="d-flex px-5 py-1">
            <div className="mx-2 my-2 px-2">
              <p><strong>FOLLOW US</strong></p>
              <div>
                <p>instagram</p>
                <p>Facebook</p>
              </div>  
            </div>
            <div className="mx-2 my-2 px-2">
              <p><strong>LEARN MORE</strong></p>
              <div>
                <p>Contact Us</p>
              </div>
            </div>
            <div className="mx-2 my-2 px-2">
              <p><strong>LEGAL</strong></p>
              <div>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>  
            </div>
          </div>
      </div>
      <center style={{backgroundColor: "gray"}}>
        <p>
          © 2023 Buonos Pizza Gilbert™. All Rights Reserved.
        </p>
      </center>
    </footer>
  );
};

export default Footer;