const { expect } = require('chai');
const React = require('react');
const about = require('../portfolioPages/about.jsx');
const { mount, shallow } = require('enzyme');
import SideButtons from '../portfolioPages/sideButtons.jsx';
import AboutContent from '../portfolioPages/aboutContent';

describe('<AboutContent />', () => {
  const wrapper = shallow(<AboutContent />)
  it('Should render a div', () => {
    expect(wrapper.type()).to.equal('div')
  });
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
  });
})

