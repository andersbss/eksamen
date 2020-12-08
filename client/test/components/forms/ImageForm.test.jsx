import React from 'react';
import { shallow, mount } from 'enzyme';
import ImageForm from '../../../src/components/forms/ImageForm';
import Image from '../../../src/components/images/Image';

describe('<ImageForm />', () => {
  it('should call handleSubmit when form is submitted', () => {
    const mockSubmit = jest.fn();
    const wrapper = shallow(<ImageForm handleSubmit={mockSubmit} />);
    wrapper.find('form').simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });

  it('should call handleChange when input field is changed', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<ImageForm onChange={mockOnChange} />);
    wrapper.find('input').simulate('change');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should display correct error message if error is true', () => {
    const errorMessage = 'Something went wrong';
    const wrapper = shallow(<ImageForm error={errorMessage} />);
    expect(wrapper.find('p').text()).toContain(errorMessage);
  });
});
