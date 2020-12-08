import React from 'react';
import { shallow } from 'enzyme';
import ArticleItem, {
  FallbackImage,
} from '../../../src/components/items/ArticleItem';
import Image from '../../../src/components/images/Image';

describe('<ArticleItem />', () => {
  it('should contain Image if image is true', () => {
    const wrapper = shallow(<ArticleItem image />);
    expect(wrapper.find(Image).exists()).toBe(true);
    expect(wrapper.find(FallbackImage).exists()).toBe(false);
  });

  it('should contain FallbackImage if image is false', () => {
    const wrapper = shallow(<ArticleItem image={false} />);
    expect(wrapper.find(FallbackImage).exists()).toBe(true);
    expect(wrapper.find(Image).exists()).toBe(false);
  });
});
