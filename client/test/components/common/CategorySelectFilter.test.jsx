import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import CategorySelectFilter from '../../../src/components/common/CategorySelectFilter';
import StyledSelect from '../../../src/components/styledComponents/StyledSelect';
import { theme } from '../../../src/styles/Theme';

describe('<CategorySelectFilter />', () => {
  it('should contain correct options, based on category prop', () => {
    // 3 categories, + 1 header(default) <option> = 4
    const categories = [
      {
        _id: '1',
        title: 'category1',
      },
      {
        _id: '2',
        title: 'category2',
      },
      {
        _id: '3',
        title: 'category3',
      },
    ];
    const wrapper = shallow(<CategorySelectFilter categories={categories} />);

    expect(wrapper.find('option').length).toEqual(4);
    expect(wrapper.text()).toContain('category1' && 'category2' && 'category3');
  });
});
