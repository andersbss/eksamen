import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginForm from '../../../src/components/forms/LoginForm';
import { StyledSuccessMessage } from '../../../src/components/styledComponents/StyledMessages';
import Button from '../../../src/components/styledComponents/StyledButton';
import Theme from '../../../src/styles/Theme';

const error = ['Invalid input'];

describe('<LoginForm />', () => {
  it('should only render login Button if loggedIn is false', () => {
    const wrapper = shallow(<LoginForm loggedIn={false} />);
    expect(wrapper.find(Button).exists()).toBe(true);

    wrapper.setProps({ loggedIn: true });
    expect(wrapper.find(Button).exists()).toBe(false);
  });

  it('should disable button if loading or hasErrors is true', () => {
    const wrapper = shallow(<LoginForm loggedIn={false} loading hasErrors />);
    expect(wrapper.find(Button).prop('disabled')).toEqual(true);

    wrapper.setProps({ loading: false });
    expect(wrapper.find(Button).prop('disabled')).toEqual(true);

    wrapper.setProps({ hasErrors: false });
    expect(wrapper.find(Button).prop('disabled')).toEqual(false);
  });

  it('should have correct Button content depending on loading true/false', () => {
    const wrapper = shallow(<LoginForm loading={false} />);
    expect(wrapper.find(Button).contains('LOGG INN'));

    wrapper.setProps({ loading: true });
    expect(wrapper.find(Button).contains('LOGGER INN...'));
  });

  it('should only render StyledSuccessMessage if loggedIn is true', () => {
    const wrapper = shallow(<LoginForm loggedIn />);
    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(true);

    wrapper.setProps({ loggedIn: false });
    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(false);
  });

  it('should only show error message if error is true', () => {
    const wrapper = mount(
      <Theme>
        <LoginForm error={error} />
      </Theme>
    );

    expect(wrapper.find('p').at(0).text()).toContain('Invalid input');
  });

  it('should call handleLogin when form is submitted', () => {
    const mockSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={mockSubmit} />);
    wrapper.simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
