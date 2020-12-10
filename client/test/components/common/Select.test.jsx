import React from 'react';
import { shallow } from 'enzyme';
import Select from '../../../src/components/common/Select';

describe('<Select />', () => {
  it('should be defined', () => {
    expect(Select).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Select label="testing content" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct label text', () => {
    const wrapper = shallow(<Select label="This is a label" />);
    expect(wrapper.find('label').at(0).text()).toContain('This is a label');
  });

  it('should contain correct errorLabel text', () => {
    const wrapper = shallow(<Select errorLabel="Name is required" />);
    expect(wrapper.find('label').at(1).text()).toContain('Name is required');
  });

  it('should have correct name based on name prop', () => {
    const wrapper = shallow(<Select name="Select name" />);
    expect(wrapper.find('select').prop('name')).toEqual('Select name');
  });

  it('should call onChange passed as prop, when select is changed', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<Select onChange={mockOnChange} />);
    wrapper.find('select').simulate('change');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should place children inside select element, as defined by props', () => {
    const wrapper = shallow(
      <Select>
        <option>1</option>
        <option>2</option>
      </Select>
    );
    const { children } = wrapper.find('select').props();
    expect(children.length).toEqual(2);
  });
});
