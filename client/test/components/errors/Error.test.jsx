import React from 'react';
import { shallow } from 'enzyme';
import Error, { StyledError } from '../../../src/components/errors/Error';

describe('<Error />', () => {
  it('should be defined', () => {
    expect(Error).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Error error="Something unexpected happened" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct error text', () => {
    const wrapper = shallow(<Error error="Something unexpected happened" />);
    expect(wrapper.find(StyledError).text()).toContain(
      'Something unexpected happened'
    );
  });
});
