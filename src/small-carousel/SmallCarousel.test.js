import SmallCarousel from './SmallCarousel';
import React from 'react';
import {shallow} from 'enzyme';

const dummyImages = { hits: [{ webformatURL: 'abc', tags: 'a b', id: 1 }, { webformatURL: 'abcd', tags: 'a b c', id: 2 }] };

describe('`Small carousel', () => {
  it('should create ok', () => {
    const wrapper = shallow(<SmallCarousel images={dummyImages}/>);
    expect(wrapper).toBeDefined();
    wrapper.unmount();
  });

  it('shouldnt decrement currentIndex when already 0', () => {
    const wrapper = shallow(<SmallCarousel images={dummyImages}/>);
    const backButton = wrapper.find('button img[alt="back"]').parent();
    backButton.simulate('click');
    expect(wrapper.instance().state.currentIndex).toBe(0);
    wrapper.unmount();
  });

  it('should increment currentIndex when going forward', () => {
    const wrapper = shallow(<SmallCarousel images={dummyImages}/>);
    const forwardButton = wrapper.find('button img[alt="forward"]').parent();
    forwardButton.simulate('click');
    expect(wrapper.instance().state.currentIndex).toBe(1);
    wrapper.unmount();
  });

  it('should set currentIndex to 0 when going forward then back', () => {
    const wrapper = shallow(<SmallCarousel images={dummyImages}/>);
    const forwardButton = wrapper.find('button img[alt="forward"]').parent();
    forwardButton.simulate('click');
    const backButton = wrapper.find('button img[alt="back"]').parent();
    backButton.simulate('click');

    expect(wrapper.instance().state.currentIndex).toBe(0);
    wrapper.unmount();
  });
});
