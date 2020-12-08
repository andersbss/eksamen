import React from 'react';
import { shallow } from 'enzyme';
import MediumTitle, {
  StyledTitle,
} from '../../../src/components/titles/MediumTitle';

describe('<MediumTitle />', () => {
  it('should contain correct content text', () => {
    const wrapper = shallow(<MediumTitle content="This is content" />);
    expect(wrapper.find(StyledTitle).text()).toContain('This is content');
  });
});
