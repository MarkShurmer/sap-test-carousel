import React, { Component } from 'react';
import CarouselChooser from './carousel-chooser/CarouselChooser';
import StyledApp from './styles/StyledApp';
import StyledH1 from './styles/StyledH1';
import fetchImages from './data-service/data-service';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: undefined,
    };
  }

  async componentDidMount() {

    try {
      const images = await fetchImages();
      this.setState({ images, isLoading: false });
    } catch(err) {
      this.setState({ error: err });
    }
  }

  render() {
    return (
      <StyledApp>
        <header>
          <StyledH1>Carousel Test</StyledH1>
        </header>
        <CarouselChooser images={this.state.images}/>
      </StyledApp>
    );
  }
}

export default App;
