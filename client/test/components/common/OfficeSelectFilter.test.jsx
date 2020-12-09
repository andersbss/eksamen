import React from 'react';
import { shallow } from 'enzyme';
import OfficeSelectFilter from '../../../src/components/common/OfficeSelectFilter';

describe('<OfficeSelectFilter />', () => {
  it('should contain correct options, based on location prop', () => {
    // 3 locations, + 1 header(default) <option> = 4
    const locations = ['Norway', 'Sweden', 'Denmark'];
    const wrapper = shallow(<OfficeSelectFilter locations={locations} />);

    expect(wrapper.find('option').length).toEqual(4);
    expect(wrapper.text()).toContain('Norway' && 'Sweden' && 'Denmark');
  });
});
