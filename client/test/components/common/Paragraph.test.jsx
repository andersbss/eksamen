import React from 'react';
import { shallow } from 'enzyme';
import Paragraph, {
  StyledTitle,
} from '../../../src/components/common/Paragraph';

describe('<Paragraph />', () => {
  it('should be defined', () => {
    expect(Paragraph).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Paragraph content="testing content" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct header', () => {
    const wrapper = shallow(<Paragraph header="this is a header" />);
    expect(wrapper.find(StyledTitle).text()).toContain('this is a header');
  });

  it('should contain correct content', () => {
    const wrapper = shallow(<Paragraph content="testing content" />);
    expect(wrapper.find('p').text()).toContain('testing content');
  });
});
