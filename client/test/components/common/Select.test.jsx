import React from 'react';
import { shallow } from 'enzyme';
import Select, {
  StyledErrorLabel,
} from '../../../src/components/common/Select';

describe('<Select />', () => {
  it('should contain correct label text', () => {
    const wrapper = shallow(<Select label="This is a label" />);
    expect(wrapper.find('label').at(0).text()).toContain('This is a label');
  });

  it('should contain correct errorLabel text', () => {
    const wrapper = shallow(<Select errorLabel="Name is required" />);
    expect(wrapper.find(StyledErrorLabel).text()).toContain('Name is required');
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
});
