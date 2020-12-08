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
});
