import React from 'react';
import { shallow } from 'enzyme';
import Toast from '../../../src/components/common/Toast';

describe('<Toast />', () => {
  it('should contain correct header text', () => {
    const wrapper = shallow(<Toast header="this is a header" />);
    expect(wrapper.find('h3').text()).toContain('this is a header');
  });

  it('should contain correct content text', () => {
    const wrapper = shallow(<Toast content="this is content" />);
    expect(wrapper.find('p').text()).toContain('this is content');
  });
});
