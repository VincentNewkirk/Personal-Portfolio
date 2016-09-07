const { expect } = require('chai');
const React = require('react');
const about = require('../portfolioPages/about.jsx');
const { mount, shallow } = require('enzyme');
import SideButtons from '../portfolioPages/sideButtons';
import AboutContent from '../portfolioPages/aboutContent';
import Radium from 'radium';
let RadiumLink = Radium(Link);
import { Link } from 'react-router';

describe('<AboutContent />', () => {
  const wrapper = shallow(<AboutContent />)
  it('Should render a div', () => {
    expect(wrapper.type()).to.equal('div')
  })
  it('The rendered div should have an id of "about-content"', () => {
    expect(wrapper.find('#about-content')).to.have.length(1)
  })
  it('Should Render my name', () => {
    expect(wrapper.contains('Vincent Newkirk')).to.be.true
  })
  it('Should render an h1 tag with my name', () => {
    expect(wrapper.containsMatchingElement(<h1>Vincent Newkirk</h1>))
    .to.equal(true)
  })
  it('Should render a <p> tag with id of "bio-desc"', () => {
    expect(wrapper.find('#bio-desc').type()).to.equal('p')
  })
});

describe('<SideButtons />', () => {
  const wrapper = shallow(<SideButtons />)
  it('Should render 4 menu items with class name of "menu-item"', () => {
    expect(wrapper.find('.menu-item')).to.have.length(4)
  })
  it('Link for about should be "About"', () => {
    expect(wrapper.contains('About')).to.be.true
  })
  it('Link for projects should be "Projects"', () => {
    expect(wrapper.contains('Projects')).to.be.true
  })
  it('Link for contact should be "Contact"', () => {
    expect(wrapper.contains('Contact')).to.be.true
  })
  it('Link for skills should be "Skills"', () => {
    expect(wrapper.contains('Skills')).to.be.true
  });
});