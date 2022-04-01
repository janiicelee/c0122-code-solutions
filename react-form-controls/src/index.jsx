import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('An email was submitted: ' + this.state.value);
    console.log('state: ', this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsLetterForm />,
  document.querySelector('#root')
);
