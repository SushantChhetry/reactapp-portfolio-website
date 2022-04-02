import React from "react";
import "./header.css";
import ME from "../../asset/ME.png";
import resume from "../../asset/resume.pdf";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  const resumeDownload = () => {
    const link = document.createElement("a");
    link.download = `Resume_SushantChhetry.pdf`;
    link.href = resume;
    link.click();
  };

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sushant Chhetry</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <div className="buttons">
          <Stack spacing={3} direction="row">
            <Button variant="text" onClick={resumeDownload} className="btn">
              Download Resume
            </Button>
            <Button variant="contained">Let's Talk</Button>
          </Stack>
        </div>
        <HeaderSocial className="header__socials" />
        <div className="me">
          <img src={ME} alt=""></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
