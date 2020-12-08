import React from 'react';
import { shallow } from 'enzyme';
import RegisterForm, {
  StyledSuccessMessage,
} from '../../../src/components/forms/RegsiterForm';
import Button from '../../../src/components/buttons/Button';
import Input from '../../../src/components/common/Input';

describe('<RegisterForm />', () => {
  it('should call handleSubmit function when form is submitted', () => {
    const mockSubmit = jest.fn();

    const wrapper = shallow(<RegisterForm handleSubmit={mockSubmit} />);
    wrapper.simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });

  it('should only render StyledSuccessMessage if loggedIn is true', () => {
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

  it('should disable Button if loading or hasErrors is true', () => {
    const wrapper = shallow(<RegisterForm loading hasErrors />);
    expect(wrapper.find(Button).prop('disabled')).toEqual(true);

    wrapper.setProps({ loading: false });
    expect(wrapper.find(Button).prop('disabled')).toEqual(true);

    wrapper.setProps({ hasErrors: false });
    expect(wrapper.find(Button).prop('disabled')).toEqual(false);
  });

  it('should call handleChange for each input field, when changed', () => {
    const mockHandle = jest.fn();
    const wrapper = shallow(<RegisterForm handleChange={mockHandle} />);
    wrapper.find(Input).at(0).simulate('change');
    wrapper.find(Input).at(1).simulate('change');
    wrapper.find(Input).at(2).simulate('change');
    wrapper.find(Input).at(3).simulate('change');
    expect(mockHandle).toHaveBeenCalledTimes(4);
  });
});
