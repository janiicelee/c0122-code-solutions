import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTopic: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // if the topic matches with the target id
    // update the state to null => will hide the topic details
    if (this.state.activeTopic === parseInt(event.target.id)) {
      this.setState({ activeTopic: null });
    } else {
      // if the topic does not match with the target id
      // update the state to the target id value
      this.setState({ activeTopic: parseInt(event.target.id) });
    }
  }

  render() {
    return (
      <div>
        { this.props.data.map((topics, index) => {
          return (
            <div key={topics.id}>
              <h2 id={index} onClick={this.handleClick}> {topics.topic} </h2>
              <p className={index === this.state.activeTopic ? '' : 'hidden'}> {topics.details} </p>
            </div>
          );
        })}
      </div>
    );
  }
}
