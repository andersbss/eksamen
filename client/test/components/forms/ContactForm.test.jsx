import React from 'react';
import { shallow } from 'enzyme';
import ContactForm, {
  StyledSuccessMessage,
} from '../../../src/components/forms/ContactForm';
import Button from '../../../src/components/buttons/Button';
import Textarea from '../../../src/components/common/Textarea';
import Input from '../../../src/components/common/Input';

describe('<ContactForm />', () => {
  it('should render StyledSuccessMessage if submitSuccess is true', () => {
    const isSuccess = true;
    const wrapper = shallow(<ContactForm submitSuccess={isSuccess} />);

    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(true);

    wrapper.setProps({ submitSuccess: false });

    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(false);
  });
});
