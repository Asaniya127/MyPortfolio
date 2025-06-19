import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id= 'home' className='hero'>
        <img src={profile_img} alt = '' />
        <h1><span>I'm Saniya Ahuja!</span></h1>
        <p>I am a Frontend Developer.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'><a className='anchor-link'href='https://drive.google.com/uc?export=download&id=1BZwrPHNP49umRMUFK1LjLXzESdyZSCMz'download
            target='_blank' rel='noopener noreferrer'>   My resume  </a></div>
        </div>
        
    </div>
  )
}

export default Hero
