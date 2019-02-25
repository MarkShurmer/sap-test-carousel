import React, { Component } from 'react';
import StyledImageTitleSmall from './StyledImageTitleSmall';
import StyledImageWrapperSmall from './StyledImageWrapperSmall';
import StyledButtonContainerSmall from './StyledButtonContainerSmail';
import arrowImage from '../assets/arrow.svg';
import SmallCarouselContainer from './SmallCarouselContainer';
import PropTypes from 'prop-types';

class SmallCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  goPrevious = () => {
    if(this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  };

  goNext = () => {
    if(this.state.currentIndex < (this.props.images.hits.length - 1)) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  render() {
    const { images } = this.props;
    const imageInfo = images.hits[this.state.currentIndex];

    return (
      <SmallCarouselContainer>
        <StyledImageWrapperSmall>
          <img src={imageInfo.webformatURL} alt={imageInfo.tags}/>
          <StyledImageTitleSmall>Image {this.state.currentIndex + 1}</StyledImageTitleSmall>
          <StyledButtonContainerSmall>
            <button onClick={() => this.goPrevious()}><img src={arrowImage} alt="back"/></button>
            <button onClick={() => this.goNext()}><img src={arrowImage} alt="forward"/></button>
          </StyledButtonContainerSmall>
        </StyledImageWrapperSmall>
      </SmallCarouselContainer>
    );
  }
}

SmallCarousel.propTypes = {
  images: PropTypes.object
};

export default SmallCarousel;
