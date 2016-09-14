import React from 'react';
import { Link } from 'react-router';
import style from '../scss/projectThumbnail.scss';


const ProjectContent = () => (
  <div id='project-content' className='content-box'>
    <div id='xtinct-box' className='project-box'>
      <Link to='/xtinct'>
        <div className='project-thumbnail-box'>
        <img className='project-thumbnail-img'
        src='http://feelgrafix.com/data/landscape/landscape-1.jpg' />
        <span className='project-thumbnail-desc'>Xtinct.online</span>
        </div>
      </Link>
    </div>
    <div id='kanban-box' className='project-box'>
      <Link to='/kanban'>
        <div className='project-thumbnail-box'>
        <img className='project-thumbnail-img'
        src='http://feelgrafix.com/data/landscape/landscape-1.jpg' />
        <span className='project-thumbnail-desc'>React Kanban</span>
        </div>
      </Link>
    </div>
    <div id='express-box' className='project-box'>
      <Link to='/express'>
        <div className='project-thumbnail-box'>
        <img className='project-thumbnail-img'
        src='http://feelgrafix.com/data/landscape/landscape-1.jpg' />
        <span className='project-thumbnail-desc'>Express Gallery</span>
        </div>
      </Link>
    </div>
  </div>
)

export default ProjectContent
