import React from 'react';
import { shallow } from 'enzyme';
import LargeTitle, {
  StyledTitle,
} from '../../../src/components/titles/LargeTitle';

describe('<LargeTitle />', () => {
  it('should be defined', () => {
    expect(LargeTitle).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<LargeTitle content="This is content" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct content text', () => {
    const wrapper = shallow(<LargeTitle content="This is content" />);
    expect(wrapper.find(StyledTitle).text()).toContain('This is content');
  });
});
