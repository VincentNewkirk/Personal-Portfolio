'use strict';
import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div id='header' background-color={this.props.color}>
      </div>
    )
  }
}

export default Header;