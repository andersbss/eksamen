import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RegisterForm, {
  StyledSuccessMessage,
} from '../../../src/components/forms/RegsiterForm';
import Button, { StyledButton } from '../../../src/components/buttons/Button';
import Input from '../../../src/components/common/Input';
import { theme } from '../../../src/styles/Theme';

describe('<RegisterForm />', () => {
  it('should call handleSubmit function when form is submitted', () => {
    const mockSubmit = jest.fn();

    const wrapper = shallow(<RegisterForm handleSubmit={mockSubmit} />);
    wrapper.simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });

  it('should render StyledSuccessMessage if loggedIn is true', () => {
    const wrapper = shallow(<RegisterForm loggedIn />);
    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(true);

    wrapper.setProps({ loggedIn: false });
    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(false);
  });

  it('should show correct error message if error', () => {
    const errorMessage = 'Something unexpected happened!';
    const wrapper = shallow(<RegisterForm error={errorMessage} />);
    expect(wrapper.find('p').at(0).text()).toContain(errorMessage);
  });
});
