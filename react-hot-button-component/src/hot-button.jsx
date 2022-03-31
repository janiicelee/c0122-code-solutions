import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    if (this.state.clickCount < 4) {
      return <button className="dark-purple" onClick= {this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 7) {
      return <button className="light-purple" onClick= {this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 10) {
      return <button className="coral" onClick= {this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 13) {
      return <button className="light-orange" onClick= {this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 16) {
      return <button className="yellow" onClick= {this.handleClick}>Hot Button</button>;
    } else {
      return <button className="white" onClick= {this.handleClick}>Hot Button</button>;
    }
  }
}
