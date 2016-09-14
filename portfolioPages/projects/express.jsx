import React from 'react';
import SideButtons from '../sideButtons.jsx';
import Header from '../headerPicture.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ExpressPage = () => (
  <div id='express-Page'>
    <SideButtons />
    <Header title='Express Gallery'/>
    <div className='content-box'>
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
          <span>Custom CMS with user authentication. Live at
          <a href='expressgallery.herokuapp.com'>expressgallery.herokuapp.com</a>
          </span>
      </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default ExpressPage