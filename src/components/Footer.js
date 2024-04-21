import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <AiOutlineLinkedin /> <FaInstagram /> <CiTwitter />
      </div>
      <p> &copy; 2024 cafepure.com</p>
    </div>
  );
}

export default Footer;
