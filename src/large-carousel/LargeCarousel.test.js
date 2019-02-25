import LargeCarousel from './LargeCarousel';
import React from 'react';
import { shallow } from 'enzyme';

const dummyImages = {
  hits: [
    { webformatURL: 'abc', tags: 'a b', id: 1 },
    { webformatURL: 'abcd', tags: 'a bc', id: 2 },
    { webformatURL: 'abxe', tags: 'a b', id: 3 },
    { webformatURL: 'abxa', tags: 'a bv ', id: 4 },
    { webformatURL: 'abxz', tags: 'ac b ', id: 5 },
    { webformatURL: 'abxy', tags: 'ac b ', id: 6 },
  ],
};

describe('Large carousel', () => {
  it('should create ok', () => {
    const wrapper = shallow(<LargeCarousel images={dummyImages}/>);
    expect(wrapper).toBeDefined();
    wrapper.unmount();
  });

  it('shouldnt decrement startIndex when already 0 and pressing prev', () => {
    const wrapper = shallow(<LargeCarousel images={dummyImages}/>);
    const prevButton = wrapper.find('#prev');
    prevButton.simulate('click');
    expect(wrapper.instance().state.startImage).toBe(0);
    expect(wrapper.instance().state.endImage).toBe(4);
    wrapper.unmount();
  });

  it('should increment startIndex & endIndex when going forward', () => {
    const wrapper = shallow(<LargeCarousel images={dummyImages}/>);
    const forwardButton = wrapper.find('#next');
    forwardButton.simulate('click');
    expect(wrapper.instance().state.startImage).toBe(1);
    expect(wrapper.instance().state.endImage).toBe(5);
    wrapper.unmount();
  });

  it('should set currentIndex to 0 when going forward then back', () => {
    const wrapper = shallow(<LargeCarousel images={dummyImages}/>);
    const forwardButton = wrapper.find('#next');
    forwardButton.simulate('click');
    const backButton = wrapper.find('#prev');
    backButton.simulate('click');

    expect(wrapper.instance().state.startImage).toBe(0);
    expect(wrapper.instance().state.endImage).toBe(4);
    wrapper.unmount();
  });
});
