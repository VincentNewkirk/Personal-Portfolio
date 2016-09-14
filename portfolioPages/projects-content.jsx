import React from 'react';
import { Link } from 'react-router';


class ProjectContent extends React.Component{
  render(){
    return(
      <div id='project-content' className='content-box'>
        <div id='xtinct-box'>
          <Link to='/xtinct'>
            <div className='project-thumbnail-box'>
            Xtinct.online
            <span className='project-thumbnail-desc'></span>
            </div>
          </Link>
          <Link to='/kanban'>
            <div className='project-thumbnail-box'>
            React Kanban
            <span className='project-thumbnail-desc'></span>
            </div>
          </Link>
          <Link to='/express'>
            <div className='project-thumbnail-box'>
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