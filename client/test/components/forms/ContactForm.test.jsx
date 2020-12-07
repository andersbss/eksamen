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

  it('should be auto filled values for { userEmail, userName }', () => {
    const email = 'email@test.com';
    const userName = 'user name';

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ContactForm userEmail={email} userName={userName} />
      </ThemeProvider>
    );

    expect(wrapper.find(Input).at(0).prop('value')).toEqual('email@test.com');
    expect(wrapper.find(Input).at(1).prop('value')).toEqual('user name');
  });
});
