import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from '../../../src/components/forms/ContactForm';
import { StyledSuccessMessage } from '../../../src/components/styledComponents/StyledMessages';
import Button from '../../../src/components/buttons/Button';
import Input from '../../../src/components/common/Input';

describe('<ContactForm />', () => {
  it('should only render StyledSuccessMessage if submitSuccess is true', () => {
    const wrapper = shallow(<ContactForm submitSuccess />);
    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(true);

    wrapper.setProps({ submitSuccess: false });
    expect(wrapper.find(StyledSuccessMessage).exists()).toBe(false);
  });

  it('should only render Button if submitSuccess is false', () => {
    const wrapper = shallow(<ContactForm submitSuccess={false} />);
    expect(wrapper.find(Button).exists()).toBe(true);

    wrapper.setProps({ submitSuccess: true });
    expect(wrapper.find(Button).exists()).toBe(false);
  });

  it('should show correct error message if error is true', () => {
    const errorMessage = 'Something unexpected happened!';
    const wrapper = shallow(<ContactForm error={errorMessage} />);
    expect(wrapper.find('p').text()).toContain(errorMessage);
  });

  it('should disable button if loading or hasErrors is true', () => {
    const wrapper = shallow(<ContactForm loading={false} hasErrors={false} />);
    expect(wrapper.find(Button).prop('disabled')).toEqual(false);

    wrapper.setProps({ loading: true });
    expect(wrapper.find(Button).prop('disabled')).toEqual(true);

    wrapper.setProps({ loading: false, hasErrors: true });
    expect(wrapper.find(Button).prop('disabled')).toEqual(true);
  });

  it('should be auto filled values for userEmail and userName, if passed as props', () => {
    const email = 'email@test.com';
    const userName = 'user name';

    const wrapper = shallow(
      <ContactForm userEmail={email} userName={userName} />
    );

    expect(wrapper.find(Input).at(0).prop('defaultValue')).toEqual(email);
    expect(wrapper.find(Input).at(1).prop('defaultValue')).toEqual(userName);
  });

  it('should call handleSubmit when form is submitted', () => {
    const mockSubmit = jest.fn();

    const wrapper = shallow(<ContactForm handleSubmit={mockSubmit} />);
    wrapper.simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
