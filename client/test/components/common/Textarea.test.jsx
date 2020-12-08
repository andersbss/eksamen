import React from 'react';
import { shallow } from 'enzyme';
import Textarea, {
  StyledErrorLabel,
} from '../../../src/components/common/Textarea';

describe('<Textarea />', () => {
  it('should contain correct label text', () => {
    const wrapper = shallow(<Textarea label="This is a label" />);
    expect(wrapper.find('label').at(0).text()).toContain('This is a label');
  });

  it('should contain correct errorLabel text', () => {
    const wrapper = shallow(<Textarea errorLabel="Name is required" />);
    expect(wrapper.find(StyledErrorLabel).text()).toContain('Name is required');
  });
});
