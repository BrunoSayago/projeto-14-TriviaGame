import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Ranking extends Component {
  render() {
    return (
      <div data-testid="ranking-title">
        <h4>/Ranking</h4>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-go-home"
          >
            Play Again
          </button>
        </Link>
      </div>
    );
  }
}
