import React from 'react';
import { Link } from 'react-router';
import style from '../scss/projectThumbnail.scss';


const ProjectContent = () => (
  <div id='project-content' className='content-box'>
    <div id='xtinct-box' className='project-box'>
      <Link to='/xtinct'>
        <div className='project-thumbnail-box'>
        <span className='project-header'>Xtinct.online</span>
        <img className='project-thumbnail-img'
        src='http://i.imgur.com/j7B7Ap4.png' />
        <span className='project-thumbnail-desc'>An interactive map visualizing animal extinction rates</span>
        </div>
      </Link>
    </div>
    <div id='kanban-box' className='project-box'>
      <Link to='/kanban'>
        <div className='project-thumbnail-box'>
        <span className='project-header'>React Kanban</span>
        <img className='project-thumbnail-img'
        src='http://i.imgur.com/hKfFIm1.png' />
        <span className='project-thumbnail-desc'>Kanban Board using React and Redux</span>
        </div>
      </Link>
    </div>
    <div id='express-box' className='project-box'>
      <Link to='/express'>
        <div className='project-thumbnail-box'>
        <span className='project-header'>Express Gallery</span>
        <img className='project-thumbnail-img'
        src='http://i.imgur.com/o9ZR7Tb.png' />
        <span className='project-thumbnail-desc'>Custom CMS with password encryption</span>
        </div>
      </Link>
    </div>
  </div>
)

export default ProjectContent
