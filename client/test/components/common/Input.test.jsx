import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../src/components/common/Input';

describe('<Input />', () => {
  it('should contain correct label based on label prop', () => {
    const wrapper = shallow(<Input label="just a label" />);
    expect(wrapper.find('label').text()).toContain('just a label');
  });

  it('should contain correct error label based on errorLabel prop', () => {
    const errorMessage = 'This is an error';
    const wrapper = shallow(<Input errorLabel={errorMessage} />);
    expect(wrapper.find('label').at(1).text()).toContain(errorMessage);
    wrapper.setProps({ errorLabel: false });
    expect(wrapper.find('label').at(1).exists()).toBe(false);
  });

  it('should have correct name, maxLength, placeholder, value and type', () => {
    const name = 'This is a name';
    const maxLength = 5;
    const placeholder = 'This is a placeholder';
    const value = 1337;
    const type = 'button';
    const wrapper = shallow(
      <Input
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        type={type}
      />
    );
    const input = wrapper.find('input');
    expect(input.prop('name')).toEqual(name);
    expect(input.prop('maxLength')).toEqual(maxLength);
    expect(input.prop('placeholder')).toEqual(placeholder);
    expect(input.prop('value')).toEqual(value);
    expect(input.prop('type')).toEqual(type);
  });

  it('should be required if required prop is true', () => {
    const wrapper = shallow(<Input required />);
    expect(wrapper.find('input').prop('required')).toEqual(true);

    wrapper.setProps({ required: false });
    expect(wrapper.find('input').prop('required')).toEqual(false);
  });

  it('should call onChange passed by props, when changed', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<Input onChange={mockOnChange} />);
    wrapper.find('input').simulate('change');
    expect(mockOnChange).toHaveBeenCalled();
  });
});
