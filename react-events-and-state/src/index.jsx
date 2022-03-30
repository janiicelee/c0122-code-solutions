import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    // this binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // this.setState is a method and needs to be called with an argument
  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return <button>Thanks!</button>;
    }
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
