'use strict';
import React from 'react';
import style from '../scss/skills.scss';


class SkillsContent extends React.Component{
  render(){
    const skillsArray = [
    ['https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png', 'React'],
    ['https://worldvectorlogo.com/logos/angular-icon.svg', 'Angular'],
    ['https://frontendmasters.com/assets/es6-logo.png', 'ES6'],
    ['https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Logo_D3.svg/1079px-Logo_D3.svg.png','D3'],
    ['http://www.iotdataviz.com/wp-content/uploads/2015/11/leafletjs.jpg','Leaflet'],
    ['https://camo.githubusercontent.com/f1e23b7f0efb3e6acf2b5a11c0379e5c51cc911b/68747470733a2f2f7261776769742e636f6d2f736173732f6e6f64652d736173732f6d61737465722f6d656469612f6c6f676f2e737667','Sass'],
    ['http://jaspreetchahal.org/images/css3.svg','CSS3'],
    ['https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', 'HTML5']
    ];

    const backEnd = [
    ['http://mherman.org/images/node-express.png', 'NodeJS'],
    ['http://files.classpattern.com/media/show/221', 'Mongo'],
    ['http://ih1.redbubble.net/image.105298420.5130/sticker,375x360.png', 'PostgreSQL'],
    ['https://4.bp.blogspot.com/-xs3f2wFeSdM/V4Z2O_Ch6NI/AAAAAAAADyM/3U0RqAhkuwgh5ObCcOjE43Y94daLks-rQCLcB/s1600/GraphQL.png', 'GraphQL'],
    ];

    const workflowArray = [
    ['http://image.flaticon.com/icons/svg/25/25231.svg', 'Git'],
    ['https://s3.amazonaws.com/media-p.slid.es/uploads/514397/images/2632483/2015-08-18_20_38_57.gif','Webpack'],
    ['https://s3.amazonaws.com/media-p.slid.es/uploads/170788/images/1582514/6200624.png','Gulp'],
    ['https://cldup.com/xFVFxOioAU.svg', 'Mocha'],
    ['http://nashvillesoftwareschool.com/images/technologies/chai.png', 'Chai'],
    ['https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png', 'Enzyme'],
    ['https://s-media-cache-ak0.pinimg.com/564x/94/1c/36/941c3629ba3a3e24824ef9a1f0e844b1.jpg', 'Supertest']
    ];
    var frontEndNode = skillsArray.map((current) => {
      return (
        <div className='skill-box'>
          <img className='skill-pic' src={current[0]}/>
          <span className='skillName'>{current[1]}</span>
        </div>
      )
    });

    var backEndNode = backEnd.map((current) => {
      return(
        <div className='skill-box'>
          <img className='skill-pic' src={current[0]} />
          <span className='skillName'>{current[1]}</span>
        </div>
      )
    });

    var workflowNode = workflowArray.map((current)=>{
      return (
        <div className='skill-box'>
          <img className='skill-pic' src={current[0]} />
          <span className='skillName'>{current[1]}</span>
        </div>
      )
    })
    return (
      <div id='skills-content' className='content-box'>
        <h3>Front-End</h3>
        <div className='skill-box-container'>
          {frontEndNode}
        </div>
        <h3>Back-End</h3>
        <div className='skill-box-container'>
          {backEndNode}
        </div>
        <h3>Workflow/Testing Utilities</h3>
        <div className='skill-box-container'>
          {workflowNode}
        </div>
      </div>
    )
  }
}

export default SkillsContent;
