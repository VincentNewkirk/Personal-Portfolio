'use strict';
import React from 'react';
import { Link } from 'react-router';

class contact extends React.Component {
  render(){
    return(
      <div id='contact-page'>
        <h1>Contact Info</h1>
        <div className='back-button'><Link to='/'>Back</Link></div>
      </div>
    )
  }
}

export default contact;