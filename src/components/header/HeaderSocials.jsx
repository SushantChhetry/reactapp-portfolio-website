import React from 'react';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <LinkedInIcon/>
      </a>
      <a href="https://github.com" target="_blank">
        <GitHubIcon/>
      </a>
    </div>
  );
}

export default HeaderSocials