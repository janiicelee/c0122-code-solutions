import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClick: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClick: true });
  }

  render() {
    return (
      <label className="switch" onClick={this.handleClick}>
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    );
  }
}

export default ToggleSwitch;
