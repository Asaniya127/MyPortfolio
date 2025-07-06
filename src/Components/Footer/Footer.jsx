import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/Saniya.svg';
import user_icon from '../../assets/user_icon.svg';
import linkedin_icon from '../../assets/linkedin.svg';
import github_icon from '../../assets/github.svg';
import leetcode_icon from '../../assets/leetcode.svg';

const Footer = () => {
  return (
    
    <div className='footer'><hr/>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={footer_logo} alt="Logo" />
          <p>I am a frontend developer.</p>
        </div>
        <p className="footer-bottom-left">© 2025 Saniya Ahuja. All rights reserved</p>
        <div className="footer-bottom-right">
          <a href='https://www.linkedin.com/in/saniya-ahuja-99136a276' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin_icon} alt='LinkedIn' />
          </a>
          <a href='https://github.com/Asaniya127' target='_blank' rel='noopener noreferrer'>
            <img src={github_icon} alt='GitHub' />
          </a>
          <a href='https://leetcode.com/your-username' target='_blank' rel='noopener noreferrer'>
            <img src={leetcode_icon} alt='LeetCode' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
