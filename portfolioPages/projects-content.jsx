import React from 'react';
import { Link } from 'react-router';


class ProjectContent extends React.Component{
  render(){
    return(
      <div id='project-content'>
        <div id='xtinct-box'>
          <Link to='/xtinct'>Xtinct.online</Link>
          <Link to='/kanban'>React Kanban</Link>
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