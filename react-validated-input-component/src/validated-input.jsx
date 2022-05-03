import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const password = this.state.value;
    let error = '';
    let icon = 'fas fa-times red';
    if (password === '') {
      error = 'A password is required';
    }

    if (password.length > 0 && password.length < 8) {
      error = 'Your password is too short';
    }

    if (password.length >= 8) {
      error = '';
      icon = 'fas fa-check green';
    }
    return (
      <div className="row">
        <form>
          <label>Password</label>
          <div>
            <input type="password" onChange={this.handleChange} value={this.state.value}></input>
            <i className={icon}></i>
            <p className='red'>{error}</p>
          </div>
        </form>
      </div>
    );
  }
}
