import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/profile.png'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
            <img src={profile_image} alt=''/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over a devade of professional expertise. I had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for frontend development is not only reflected in my resume but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about_skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                <div className="about_skill"><p>React JS</p><hr style={{width:"65%"}}/></div>
                <div className="about_skill"><p>Node JS</p><hr style={{width:"55%"}}/></div>
                <div className="about_skill"><p>MYSQL</p><hr style={{width:"50%"}}/></div>
                <div className="about_skill"><p>JAVA</p><hr style={{width:"50%"}}/></div>
                <div className="about_skill"><p>AWS</p><hr style={{width:"70%"}}/></div>
                <div className="about_skill"><p>CN</p><hr style={{width:"65%"}}/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
