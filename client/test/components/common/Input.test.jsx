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

  it('should have the correct type based on type prop', () => {
    const wrapper = shallow(<Input type="button" />);
    expect(wrapper.find('input').prop('type')).toEqual('button');
  });

  it('should have the correct name based on name prop', () => {
    const wrapper = shallow(<Input name="input name" />);
    expect(wrapper.find('input').prop('name')).toEqual('input name');
  });

  it('should have the correct maxLength based on maxLength prop', () => {
    const wrapper = shallow(<Input maxLength="1337" />);
    expect(wrapper.find('input').prop('maxLength')).toEqual('1337');
  });

  it('should have the correct placeholder based on placeholder prop', () => {
    const wrapper = shallow(<Input placeholder="This is a placeholder" />);
    expect(wrapper.find('input').prop('placeholder')).toEqual(
      'This is a placeholder'
    );
  });

  it('should have be required if required prop is true', () => {
    const wrapper = shallow(<Input required />);
    expect(wrapper.find('input').prop('required')).toEqual(true);
    wrapper.setProps({ required: false });
    expect(wrapper.find('input').prop('required')).toEqual(false);
  });

  it('should have the correct value based on the value prop', () => {
    const wrapper = shallow(<Input value={123} />);
    expect(wrapper.find('input').prop('value')).toEqual(123);
  });

  it('should call onChange passed by props, when changed', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<Input onChange={mockOnChange} />);
    wrapper.find('input').simulate('change');
    expect(mockOnChange).toHaveBeenCalled();
  });
});
