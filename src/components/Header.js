import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import logo from '../trivia.png';

class Header extends Component {
  render() {
    const { name, email, score } = this.props;
    const emailMD = md5(email).toString();
    return (
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <div className="header-user-info">
          <img
            src={ `https://www.gravatar.com/avatar/${emailMD}` }
            alt="img"
            data-testid="header-profile-picture"
            className="player-photo-header"
          />
          <span data-testid="header-player-name">
            { name }
          </span>
          <div className="header-score-div">
            <span>Pontos:</span>
            <span data-testid="header-score">{ score }</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.user.email,
  name: state.user.user.name,
  score: state.player.score,
});

Header.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
