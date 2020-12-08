import React from 'react';
import { shallow } from 'enzyme';
import PaginationButton, {
  StyledButton,
} from '../../../src/components/buttons/PaginationButton';

describe('<PaginationButton />', () => {
  it('should have correct number based on number prop', () => {
    const wrapper = shallow(<PaginationButton number="1" />);
    expect(wrapper.find(StyledButton).text()).toContain('1');
  });
});
