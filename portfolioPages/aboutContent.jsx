'use strict';
import React from 'react';
import Gallery from './imageGallery.jsx';

const AboutContent = () => (
  <div id='about-content' className='content-box'>
    <p id='bio-desc'>I am a full-stack Javascript Developer born and raised in Honolulu, Hawaii. <br/>
    I am a quick learner and love working with exciting technologies such as React and Angular. <br/>
    I also have Dev Ops experience with Nginx. I was able to single-handedly deploy 'Xtinct Online'<br />
    by myself to Digital Ocean. <br />
    <br />
    I have a passion for making high performance, beautiful web applications.<br/>
    </p>
    <Gallery />
  </div>
)

export default AboutContent;