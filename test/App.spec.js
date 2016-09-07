const { expect } = require('chai');
const React = require('react');
const about = require('../portfolioPages/about.jsx');
const { mount, shallow } = require('enzyme');
import SideButtons from '../portfolioPages/sideButtons.jsx';
import AboutContent from '../portfolioPages/aboutContent';

describe('<AboutContent />', () => {
  it('Should Render my name', () => {
    const wrapper = shallow(<AboutContent />)
    expect(wrapper.contains('Vincent Newkirk')).to.be.true;
  });
})

