import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import CategorySelectFilter from '../../../src/components/common/CategorySelectFilter';
import StyledSelect from '../../../src/components/styledComponents/StyledSelect';
import { theme } from '../../../src/styles/Theme';

// 3 categories, + 1 header(default) <option> = 4 option elements
const categories = [
  {
    _id: 1,
    title: 'category1',
  },
  {
    _id: 2,
    title: 'category2',
  },
  {
    _id: 3,
    title: 'category3',
  },
];

describe('<CategorySelectFilter />', () => {
  it('should contain correct options, based on category prop', () => {
    const wrapper = shallow(<CategorySelectFilter categories={categories} />);
    const options = wrapper.find('option');

    expect(options.length).toEqual(4);
    expect(wrapper.text()).toContain('category1' && 'category2' && 'category3');
    expect(options.at(1).prop('value')).toEqual(1);
    expect(options.at(2).prop('value')).toEqual(2);
    expect(options.at(3).prop('value')).toEqual(3);
  });

  it('should call setChosenCategory when selected is changed', () => {
    const mockOnChange = jest.fn();

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CategorySelectFilter
          setChosenCategory={mockOnChange}
          categories={categories}
        />
      </ThemeProvider>
    );

    wrapper.find(StyledSelect).simulate('change');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should only have "FILTER" option when no filter is chosen', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CategorySelectFilter categories={categories} chosenCategory="INGEN" />
      </ThemeProvider>
    );

    expect(wrapper.find('option').at(0).text()).toContain('FILTER');
  });

  it('should only have "INGEN" option when no filter is chosen', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CategorySelectFilter categories={categories} chosenCategory="FILTER" />
      </ThemeProvider>
    );

    expect(wrapper.find('option').at(0).text()).toContain('INGEN');
  });
});
