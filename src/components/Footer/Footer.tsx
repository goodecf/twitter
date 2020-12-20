import React from 'react';

import './Footer.css';

interface Props { };

const Footer = (props: Props) => {
  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <li className="footer-li">About</li>
        <li className="footer-li">Help Center</li>
        <li className="footer-li">Terms of Service</li>
        <li className="footer-li">Privacy Policy</li>
        <li className="footer-li">Cookie Policy</li>
        <li className="footer-li">Ads Info</li>
        <li className="footer-li">Blog</li>
        <li className="footer-li">Status</li>
        <li className="footer-li">Careers</li>
        <li className="footer-li">Brand Resources</li>
        <li className="footer-li">Advertising</li>
        <li className="footer-li">Marketing</li>
      </ul>
    </div>
  );
};

export default Footer;