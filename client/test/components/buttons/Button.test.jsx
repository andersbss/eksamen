import React from 'react';
import { shallow } from 'enzyme';
import Button, { StyledButton } from '../../../src/components/buttons/Button';

describe('<Button />', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Button content="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain "Content', () => {
    const wrapper = shallow(<Button content="content" />);
    expect(wrapper.text()).toContain('content');
  });

  it('should run method on click', () => {
    const mockFunction = jest.fn();

    const wrapper = shallow(<Button onClick={mockFunction} />);
    wrapper.find(StyledButton).simulate('click');

    expect(mockFunction).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    const isValid = true;
    const wrapper = shallow(<Button disabled={isValid} />);
    expect(wrapper.find(StyledButton).prop('disabled')).toEqual(true);
  });
});
