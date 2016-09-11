'use strict';
import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className='header' background-color={this.props.color}>
        <h1 id='header-title'>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header;