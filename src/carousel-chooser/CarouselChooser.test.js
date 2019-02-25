import React from 'react';
import CarouselChooser from './CarouselChooser';
import { mount } from 'enzyme';
import LargeCarousel from '../large-carousel/LargeCarousel';
import SmallCarousel from '../small-carousel/SmallCarousel';

const dummyImages = { hits: [{ webformatURL: 'abc', tags: 'a b', id: 1 }] };

describe('CarouselChooser', async() => {

  it('shouldnt create a carousel if no images', () => {
    const wrapper = mount(<CarouselChooser images={null}/>);
    const large = wrapper.find(LargeCarousel);
    const small = wrapper.find(SmallCarousel);
    expect(large.length).toBe(0);
    expect(small.length).toBe(0);
    wrapper.unmount();
  });

  it('should create large carousel', () => {
    const wrapper = mount(<CarouselChooser images={dummyImages}/>);
    const large = wrapper.find(LargeCarousel);
    expect(large.length).toBe(1);
    wrapper.unmount();
  });

  it('should create small carousel when width set to 479', () => {
    // set viewport
    global.innerWidth = 479;

    const wrapper = mount(<CarouselChooser images={dummyImages}/>);
    const small = wrapper.find(SmallCarousel);
    expect(small.length).toBe(1);
    wrapper.unmount();
  });
});
