import React, { Component } from 'react';
import StyledImageTitleLarge from './ImageTitleLarge';
import StyledImageContainer from '../styles/StyledImageContainer';
import StyledImageWrapper from '../styles/StyledImageWrapper';
import StyledButtonContainer from './ButtonContainer';

class LargeCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startImage: 0,
      endImage: props.images.hits.length > 4 ? 4 : props.images.hits.length - 1
    };
  }

  goPrevious = () => {
    if(this.state.startImage > 0) {
      this.setState({ startImage: this.state.startImage - 1, endImage: this.state.endImage - 1 })
    }
  };

  goNext = () => {
    if(this.state.endImage < (this.props.images.hits.length - 1)) {
      this.setState({ startImage: this.state.startImage + 1, endImage: this.state.endImage + 1 })
    }
  };

  render() {
    const { images } = this.props;

    if(!images) {
      return null;
    }

    const currentImages = images.hits.slice(this.state.startImage, this.state.endImage + 1);

    return (
      <React.Fragment>
        <StyledImageContainer>
          {currentImages.map((imgInfo, index) => (
            <StyledImageWrapper key={imgInfo.id}>
              <img src={imgInfo.webformatURL} alt={imgInfo.tags} width={250} height={250}/>
              <StyledImageTitleLarge>Image {this.state.startImage + index + 1}</StyledImageTitleLarge>
            </StyledImageWrapper>
          ))}
        </StyledImageContainer>
        <StyledButtonContainer>
          <button id="prev" onClick={this.goPrevious}>Prev</button>
          <button id="next" onClick={this.goNext}>Next</button>
        </StyledButtonContainer>
      </React.Fragment>
    );
  }
}

export default LargeCarousel;
