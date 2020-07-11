import React from "react";
import facebookLogo from "../assets/icons/facebook.svg";
import githubLogo from "../assets/icons/github.svg";
import instagramLogo from "../assets/icons/instagram.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__content">
          <div>Copyright © 2020 | Created by Hafiz</div>
          <div className="mt-3">
            <a
              href="https://github.com/hafiskarim"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="mr-3" src={githubLogo} alt="github-logo" />
            </a>
            <a
              href="https://www.facebook.com/hafis.karim.1/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="mr-3" src={facebookLogo} alt="facebook-logo" />
            </a>
            <a
              href="https://www.instagram.com/hafizhulkarim/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="mr-3" src={instagramLogo} alt="facebook-logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
