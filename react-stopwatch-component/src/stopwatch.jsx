import React from 'react';

class StopWatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { elapsedSeconds: 0, isClick: false };
    this.tick = this.tick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    this.setState({ elapsedSeconds: this.state.elapsedSeconds + 1 });
  }

  handleClick() {
    if (this.state.isClick === false) {
      this.setState({ isClick: !this.state.isClick });
      this.intervalId = setInterval(() => this.tick(), 1000);
    } else {
      this.setState({ isClick: !this.state.isClick });
      clearInterval(this.intervalId);
    }
  }

  reset() {
    if (this.state.isClick === false) {
      this.setState({ elapsedSeconds: 0 });
    }
  }

  render() {
    if (this.state.isClick === false) {
      return (
        <div>
          <div id="circle" onClick={this.reset}>
            <div className="text">
              <p>{this.state.elapsedSeconds}</p>
            </div>
          </div>
          <div className="icon" onClick={this.handleClick}>
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div id="circle">
          <div className="text">
            <p>{this.state.elapsedSeconds}</p>
          </div>
        </div>
        <div className="icon" onClick={this.handleClick}>
          <i className="fa-solid fa-pause"></i>
        </div>
      </div>
    );
  }
}

export default StopWatch;
