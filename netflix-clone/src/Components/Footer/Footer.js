import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <a href="https://www.facebook.com/netflix" target="_blank">
            {" "}
            <FacebookOutlinedIcon />
          </a>
          <a href="https://www.instagram.com/netflix/" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/netflix" target="_blank">
            <YouTubeIcon />
          </a>
        </div>
        <div className="Footer-Container">
          <div className="footer_data">
            <div>
              <a
                className="footer_link"
                href="https://www.netflix.com/browse/audio-description"
              >
                {" "}
                <li>Audio Description</li>
              </a>
              <a
                className="footer_link"
                href="https://ir.netflix.net/ir-overview/profile/default.aspx"
              >
                <li>Investor Relations</li>
              </a>
              <a
                className="footer_link"
                href="https://help.netflix.com/legal/notices"
              >
                <li>Legal Notice</li>
              </a>
             
            </div>

            <div>
              <a className="footer_link" href="https://help.netflix.com/en/">
                {" "}
                <li>Help Center</li>
              </a>

              <a className="footer_link" href="https://jobs.netflix.com/">
                {" "}
                <li>Jobs</li>
              </a>

              <a
                className="footer_link"
                href="https://help.netflix.com/legal/privacy#cookies"
              >
                <li>Cookie Preferences</li>
              </a>

            </div>

            <div>
              <a className="footer_link" href="https://www.netflix.com/redeem">
                {" "}
                <li>Gift Cards</li>
              </a>
              <a
                className="footer_link"
                href="https://help.netflix.com/legal/termsofuse"
              >
                <li>UseTerms of </li>
              </a>
              <a
                className="footer_link"
                href="https://help.netflix.com/en/node/134094"
              >
                <li>Corporate Information</li>
              </a>
            </div>

            <div>
              <a className="footer_link" href="https://media.netflix.com/en/">
                <li>Media Center</li>
              </a>
              <a
                className="footer_link"
                href="https://help.netflix.com/legal/privacy"
              >
                {" "}
                <li>Privacy</li>
              </a>
              <a
                className="footer_link"
                href="https://help.netflix.com/en/contactus"
              >
                {" "}
                <li>Contact Us</li>
              </a>
              
            </div>
          </div>

          <div className="service_code">
            <p>Service Code</p>
          </div>
          <div className="copy_write">&copy; 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
