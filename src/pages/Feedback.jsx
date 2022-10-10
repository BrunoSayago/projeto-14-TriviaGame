import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    return (
      <div data-testid="feedback-text">
        <h4>/feedback</h4>
        <Header />
      </div>
    );
  }
}

export default Feedback;
