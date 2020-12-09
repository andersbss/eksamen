import React from 'react';
import { shallow } from 'enzyme';
import PaginationButton, {
  StyledButton,
} from '../../../src/components/common/PaginationButton';

describe('<PaginationButton />', () => {
  it('should have correct number based on number prop', () => {
    const wrapper = shallow(<PaginationButton number="1" />);
    expect(wrapper.find(StyledButton).text()).toContain('1');
  });

  it('should run setPage prop onClick', () => {
    const mockSetPage = jest.fn();

    const wrapper = shallow(<PaginationButton setPage={mockSetPage} />);

    expect(mockSetPage).toHaveBeenCalledTimes(0);
    wrapper.find(StyledButton).simulate('click');
    expect(mockSetPage).toHaveBeenCalledTimes(1);
  });
});
