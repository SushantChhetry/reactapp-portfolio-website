import React from 'react';
import HomeIcon from "@mui/icons-material/Home";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MessageIcon from "@mui/icons-material/Message";
import { useState } from 'react';

import "./nav.css"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <HomeIcon />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <PersonPinIcon />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MenuBookIcon />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MessageIcon />
      </a>
    </nav>
  );
}

export default Nav