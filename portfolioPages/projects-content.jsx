import React from 'react';
import { Link } from 'react-router';
import style from '../scss/projectThumbnail.scss';


class ProjectContent extends React.Component{
  render(){
    return(
      <div id='project-content' className='content-box'>
        <div id='xtinct-box' className='project-box'>
          <Link to='/xtinct'>
            <div className='project-thumbnail-box'>
            <img className='project-thumbnail-img'
            src='http://feelgrafix.com/data/landscape/landscape-1.jpg' />
            Xtinct.online
            <span className='project-thumbnail-desc'></span>
            </div>
          </Link>
        </div>
        <div id='kanban-box' className='project-box'>
          <Link to='/kanban'>
            <div className='project-thumbnail-box'>
            <img className='project-thumbnail-img'
            src='http://feelgrafix.com/data/landscape/landscape-1.jpg' />
            React Kanban
            <span className='project-thumbnail-desc'></span>
            </div>
          </Link>
        </div>
        <div id='express-box' className='project-box'>
          <Link to='/express'>
            <div className='project-thumbnail-box'>
            <img className='project-thumbnail-img'
            src='http://feelgrafix.com/data/landscape/landscape-1.jpg' />
            Express Gallery
            <span className='project-thumbnail-desc'></span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default ProjectContent

/*****PROJECTS*****
Xtinct Online
React Kanban
Express Gallery
Pixel Maker
Chat room server
***********/