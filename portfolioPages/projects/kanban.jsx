import React from 'react';
import SideButtons from '../sideButtons.jsx';
import Header from '../headerPicture.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const KanbanPage = () => (
  <div id='xtinct-page'>
    <SideButtons />
    <Header title='React Kanban Board'/>
    <div className='content-box'>
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
          <span>React/Redux Kanban Board. Live at
          <a href='react-kanban.herokuapp.com'>react-kanban.herokuapp.com</a>
          </span>
      </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default KanbanPage