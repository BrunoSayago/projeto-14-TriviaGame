import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getQuestions } from '../services/api';
import { questionsAction } from '../redux/actions/index';

class Game extends React.Component {
  state = {
    questions: [],
    contador: 0,
  };

  async componentDidMount() {
    const { history, dispatch } = this.props;
    const localToken = localStorage.getItem('token');
    const questions = await getQuestions(localToken);

    if (questions.response_code === 0) {
      this.setState({ questions });
      dispatch(questionsAction(questions));
    } else {
      localStorage.removeItem('token');
      history.push('/');
    }
  }

  render() {
    const { questions } = this.state;
    const { results } = questions;
    console.log(results);
    return (
      <>
        <Header />

        <span>
          Ola.
        </span>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  response_code: state.response_code,
});

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Game);
