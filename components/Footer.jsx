import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Trekka Headphones All rights reserverd</p>
      <p className="icons">
        <a
          href="https://www.facebook.com/profile.php?id=100008046970527"
          target="blank"
        >
          <FaFacebook className=" face" />
        </a>

        <a
          href="https://linkedin.com/in/muhammad-salama-1293201a1"
          target="blank"
        >
          <FaLinkedin className=" linked" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
