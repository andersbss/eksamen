import React from 'react';
import { shallow } from 'enzyme';
import Jumbotron from '../../../src/components/common/Jumbotron';

describe('<Jumbotron />', () => {
  it('should be defined', () => {
    expect(Jumbotron).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Jumbotron headerText="this is a header" />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should contain correct headerText', () => {
    const wrapper = shallow(<Jumbotron headerText="this is a header" />);
    expect(wrapper.find('h1').text()).toContain('this is a header');
  });
});
