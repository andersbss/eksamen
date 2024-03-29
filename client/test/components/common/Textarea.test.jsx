import React from 'react';
import { shallow } from 'enzyme';
import Textarea from '../../../src/components/common/Textarea';

describe('<Textarea />', () => {
  it('should be defined', () => {
    expect(Textarea).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Textarea label="This is a label" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct label text', () => {
    const wrapper = shallow(<Textarea label="This is a label" />);
    expect(wrapper.find('label').at(0).text()).toContain('This is a label');
  });

  it('should contain correct errorLabel text', () => {
    const wrapper = shallow(<Textarea errorLabel="Name is required" />);
    expect(wrapper.find('label').at(1).text()).toContain('Name is required');
  });

  it('should have correct name, maxLength, placeholder, value, rows and cols', () => {
    const name = 'This is a name';
    const maxLength = '5';
    const placeholder = 'This is a placeholder';
    const value = '1337';
    const rows = '4';
    const cols = '10';
    const wrapper = shallow(
      <Textarea
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        rows={rows}
        cols={cols}
      />
    );
    const textarea = wrapper.find('textarea');
    expect(textarea.prop('name')).toEqual(name);
    expect(textarea.prop('maxLength')).toEqual(maxLength);
    expect(textarea.prop('placeholder')).toEqual(placeholder);
    expect(textarea.prop('value')).toEqual(value);
    expect(textarea.prop('rows')).toEqual(rows);
    expect(textarea.prop('cols')).toEqual(cols);
  });

  it('should run onChange when textarea is changed', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<Textarea onChange={mockOnChange} />);
    wrapper.find('textarea').simulate('change');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should be required if required prop is true', () => {
    const wrapper = shallow(<Textarea required />);
    expect(wrapper.find('textarea').prop('required')).toEqual(true);
    wrapper.setProps({ required: false });
    expect(wrapper.find('textarea').prop('required')).toEqual(false);
  });
});
