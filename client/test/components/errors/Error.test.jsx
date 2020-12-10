import React from 'react';
import { shallow, mount } from 'enzyme';
import Error, { StyledError } from '../../../src/components/errors/Error';
import Theme from '../../../src/styles/Theme';

const error = ['Invalid input'];

describe('<Error />', () => {
  it('should be defined', () => {
    expect(Error).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Error error={error} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct error text', () => {
    const wrapper = mount(
      <Theme>
        <Error error={error} visible />
      </Theme>
    );
    expect(wrapper.find(StyledError).text()).toContain('Invalid input');
  });
});
