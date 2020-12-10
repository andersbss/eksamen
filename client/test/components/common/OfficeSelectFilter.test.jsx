import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import OfficeSelectFilter from '../../../src/components/common/OfficeSelectFilter';
import StyledSelect from '../../../src/components/styledComponents/StyledSelect';
import { theme } from '../../../src/styles/Theme';

// 3 locations, + 1 header(default) <option> = 4 option elements
const locations = ['Norway', 'Sweden', 'Denmark'];

describe('<OfficeSelectFilter />', () => {
  it('should be defined', () => {
    expect(OfficeSelectFilter).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<OfficeSelectFilter locations={locations} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct options, based on location prop', () => {
    const wrapper = shallow(<OfficeSelectFilter locations={locations} />);
    const options = wrapper.find('option');

    expect(options.length).toEqual(4);
    expect(wrapper.text()).toContain('Norway' && 'Sweden' && 'Denmark');
    expect(options.at(1).prop('value')).toEqual('Norway');
    expect(options.at(2).prop('value')).toEqual('Sweden');
    expect(options.at(3).prop('value')).toEqual('Denmark');
  });

  it('should call setChosenLocation when selected is changed', () => {
    const mockOnChange = jest.fn();

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <OfficeSelectFilter
          setChosenLocation={mockOnChange}
          locations={locations}
        />
      </ThemeProvider>
    );

    wrapper.find(StyledSelect).simulate('change');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should only have "FILTER" option when no filter is chosen', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <OfficeSelectFilter locations={locations} chosenLocation="INGEN" />
      </ThemeProvider>
    );

    expect(wrapper.find('option').at(0).text()).toContain('FILTER');
  });

  it('should only have "INGEN" option when no filter is chosen', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <OfficeSelectFilter locations={locations} chosenLocation="FILTER" />
      </ThemeProvider>
    );

    expect(wrapper.find('option').at(0).text()).toContain('INGEN');
  });
});
