import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    const { name, email, score } = this.props;
    const emailMD = md5(email).toString();
    return (
      <>
        <div>Header</div>
        <div>
          <img src={ `https://www.gravatar.com/avatar/${emailMD}` } alt="img" data-testid="header-profile-picture" />
          <span data-testid="header-player-name">
            { name }
          </span>
          <span data-testid="header-score">{ score }</span>
        </div>
      </>
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
