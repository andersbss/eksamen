import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RegisterForm from '../../../src/components/forms/RegsiterForm';
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
});
