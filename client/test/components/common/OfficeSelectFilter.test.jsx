import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import OfficeSelectFilter from '../../../src/components/common/OfficeSelectFilter';
import StyledSelect from '../../../src/components/styledComponents/StyledSelect';
import { theme } from '../../../src/styles/Theme';

describe('<OfficeSelectFilter />', () => {
  it('should contain correct options, based on location prop', () => {
    // 3 locations, + 1 header(default) <option> = 4
    const locations = ['Norway', 'Sweden', 'Denmark'];
    const wrapper = shallow(<OfficeSelectFilter locations={locations} />);

    expect(wrapper.find('option').length).toEqual(4);
    expect(wrapper.text()).toContain('Norway' && 'Sweden' && 'Denmark');
    expect(wrapper.find('option').at(1).prop('value')).toEqual('Norway');
    expect(wrapper.find('option').at(2).prop('value')).toEqual('Sweden');
    expect(wrapper.find('option').at(3).prop('value')).toEqual('Denmark');
  });

  it('should call setChosenLocation when selected is changed', () => {
    const mockOnChange = jest.fn();
    const locations = ['Norway', 'Sweden', 'Denmark'];

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
});
