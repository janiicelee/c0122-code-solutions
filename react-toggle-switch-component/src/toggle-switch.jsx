import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClick: false };
  }

  handleClick() {
    this.setState({ isClick: !this.state.isClick });
  }

  render() {
    if (this.state.isClick === false) {
      return (
      <div>
        <label className="switch" onClick={this.handleClick}>
          <div type="checkbox"></div>
          <span className="slider-on round"></span>
        </label>
        <div className="text">ON</div>
      </div>
      );
    } else {
      return (
        <div>
          <label className="switch" onClick={this.handleClick}>
            <div type="checkbox"></div>
            <span className="slider-off round"></span>
          </label>
          <div className="text">OFF</div>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
