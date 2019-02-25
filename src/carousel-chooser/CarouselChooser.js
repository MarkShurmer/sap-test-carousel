import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sizes from 'react-sizes';
import LargeCarousel from '../large-carousel/LargeCarousel';
import SmallCarousel from '../small-carousel/SmallCarousel';

class CarouselChooser extends Component {

  render() {
    const { showLarge, images } = this.props;

    if(!images) {
      return (
        <div>Is loading</div>
      )
    }

    if(showLarge) {
      return (
        <LargeCarousel images={images}/>
      );
    }

    return (
      <SmallCarousel images={images}/>
    );
  }
}

CarouselChooser.propTypes = {
  showLarge: PropTypes.bool,
};

const mapSizesToProps = ({ width }) => ({
  showLarge: !!(width && width >= 480),
});

export default sizes(mapSizesToProps)(CarouselChooser);
