import React from 'react';
import { shallow } from 'enzyme';
import Input, {
  StyledLabelContainer,
} from '../../../src/components/common/Input';

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
});
