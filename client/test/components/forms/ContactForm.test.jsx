import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import ContactForm, {
  StyledSuccessMessage,
} from '../../../src/components/forms/ContactForm';
import Button from '../../../src/components/buttons/Button';
import Input from '../../../src/components/common/Input';
import { theme } from '../../../src/styles/Theme';

describe('<ContactForm />', () => {
  it('should render StyledSuccessMessage if submitSuccess is true', () => {
    const wrapper = shallow(<ContactForm submitSuccess />);
    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(true);

    wrapper.setProps({ submitSuccess: false });
    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(false);
  });

  it('should disable button if loading is true', () => {
    const wrapper = shallow(<ContactForm loading />);
    expect(wrapper.find(Button).prop('disabled')).toEqual(true);

    wrapper.setProps({ loading: false });
    expect(wrapper.find(Button).prop('disabled')).toEqual(false);
  });
});
