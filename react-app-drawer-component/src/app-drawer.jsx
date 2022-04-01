import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClick: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleMenuBar = this.handleMenuBar.bind(this);
  }

  handleClick() {
    this.setState({ isClick: !this.state.isClick });
  }

  handleMenuBar() {
    const click = this.state.isClick;
    if (click === false) return 'menu-modal';
    if (click === true) return 'menu-modal display';
  }

  render() {
    if (this.state.isClick === false) {
      return (
        <div>
          <i className="icon fa-solid fa-bars" onClick={this.handleClick}></i>
          <div className="modal display">
            <div className="menu-modal display">
              <h3>Menu</h3>
              <ul>
                <li onClick={this.handleClick}>About</li>
                <li onClick={this.handleClick}>Get Started</li>
                <li onClick={this.handleClick}>Sign In</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <i className="icon fa-solid fa-bars display" onClick={this.handleClick}></i>
          <div className="modal">
            <div className="menu-modal">
              <h3>Menu</h3>
              <ul>
                <li onClick={this.handleClick}>About</li>
                <li onClick={this.handleClick}>Get Started</li>
                <li onClick={this.handleClick}>Sign In</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AppDrawer;
