import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 1 };
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.imageId = this.imageId.bind(this);
  }

  nextImage() {
    clearInterval(this.timerId);
    this.timerId = setInterval(() => this.nextImage(), 3000);
    if (this.state.currentImage >= this.props.data.length) {
      this.setState({ currentImage: 1 });
    } else {
      this.setState(prev => ({
        currentImage: prev.currentImage + 1
      }));
    }
  }

  prevImage() {
    clearInterval(this.timerId);
    this.timerId = setInterval(() => this.nextImage(), 3000);
    if (this.state.currentImage <= 1) {
      this.setState({ currentImage: this.props.data.length });
    } else {
      this.setState(prev => ({
        currentImage: prev.currentImage - 1
      }));
    }
  }

  imageId(event) {
    clearInterval(this.timerId);
    this.timerId = setInterval(() => this.nextImage(), 3000);
    const id = parseInt(event.target.id);
    this.setState({ currentImage: id });

  }

  componentDidMount() {
    this.timerId = setInterval(() => this.nextImage(), 3000);
  }

  render() {
    const pokedex = this.props.data;
    return (
      <div>
        <div className="row">
          <i className="fas fa-angle-left" onClick={this.prevImage}></i>
          <div className="image">
            {pokedex.map(image => {
              return (this.state.currentImage === image.id && (
                  <img key={image.id} src={image.image} />
              ));
            })}
          </div>
          <i className="fas fa-angle-right" onClick={this.nextImage}></i>
        </div>
        <div className="row">
          {pokedex.map(image => {
            return (
              this.state.currentImage === image.id
                ? <i key={image.id} id={image.id} className='fas fa-circle' onClick={this.imageId}/>
                : <i key={image.id} id={image.id} className='far fa-circle' onClick={this.imageId}/>
            );
          })}
        </div>
      </div>
    );
  }
}
