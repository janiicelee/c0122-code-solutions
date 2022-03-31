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
      <label className="switch">
        <div onClick={this.handleClick}></div>
        <span className="slider-on round"></span>
      </label>
      );
    } else {
      return (
    <label className="switch">
      <div onClick={this.handleClick}></div>
      <span className="slider-off round"></span>
    </label>
      );
    }
  }
}

export default ToggleSwitch;
