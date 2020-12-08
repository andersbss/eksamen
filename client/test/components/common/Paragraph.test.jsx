import React from 'react';
import { shallow } from 'enzyme';
import Jumbotron, {
  StyledTitle,
} from '../../../src/components/common/Paragraph';

describe('<Paragraph />', () => {
  it('should contain correct header', () => {
    const wrapper = shallow(<Jumbotron header="this is a header" />);
    expect(wrapper.find(StyledTitle).text()).toContain('this is a header');
  });

  it('should contain correct content', () => {
    const wrapper = shallow(<Jumbotron content="testing content" />);
    expect(wrapper.find('p').text()).toContain('testing content');
  });
});
