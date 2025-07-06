import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero'>
      <img src={profile_img} alt='Profile' />
      <h1><span>I'm Saniya Ahuja!</span></h1>
      <p>I am a Frontend Developer.</p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <Link className='hero-link' to='/contact'>Connect with me</Link>
        </div>
        <div className='hero-resume'>
          <a
            className='hero-link'
            href='https://drive.google.com/uc?export=download&id=1BZwrPHNP49umRMUFK1LjLXzESdyZSCMz'
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
