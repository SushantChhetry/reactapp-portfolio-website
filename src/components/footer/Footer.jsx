import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SUSHANT CHHETRY
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com">
          <InstagramIcon />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SUSHANT CHHETRY. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
