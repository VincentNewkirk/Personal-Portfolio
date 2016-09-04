'use strict';
import React from 'react';
import { Link } from 'react-router';

class HeaderButton extends React.Component {
  render(){
    return (
      <div className='header-button'><Link to={this.props.linkPath}>{this.props.title}</Link></div>
    )
  }
}

export default HeaderButton;