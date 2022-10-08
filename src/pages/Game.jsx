import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import '../App.css';
import { getQuestions } from '../services/api';
import { questionsAction } from '../redux/actions/index';

class Game extends React.Component {
  state = {
    questions: [],
    contador: 0,
    isLoading: true,
    // isDisabled: true,
    correctAnswer: [],
    wrongAnswers: [],
    incorrect: '',
    correct: '',
  };

  async componentDidMount() {
    const { history, dispatch } = this.props;
    const { contador } = this.state;
    const localToken = localStorage.getItem('token');
    const questions = await getQuestions(localToken);
    const { results } = questions;

    if (questions.response_code === 0) {
      this.setState({
        isLoading: false,
        questions: results,
        correctAnswer: [results[contador].correct_answer],
        wrongAnswers: [...results[contador].incorrect_answers],
      });
      dispatch(questionsAction(questions));
    } else {
      this.setState({ isLoading: false });
      localStorage.removeItem('token');
      history.push('/');
    }
  }

  shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClick = (element) => {
    const { correctAnswer } = this.state;
    console.log(element);
    const convertedCorrectAnswer = correctAnswer[0];
    if (element === convertedCorrectAnswer) {
      this.setState({ incorrect: '3px solid red', correct: '3px solid rgb(6, 240, 15)' });
    } else {
      this.setState({ incorrect: '3px solid red', correct: '3px solid rgb(6, 240, 15)' });
    }
  };

  render() {
    const {
      questions, contador, isLoading, correctAnswer, wrongAnswers,
      incorrect, correct,
      // isDisabled,
    } = this.state;

    const allAnswers = [...correctAnswer, ...wrongAnswers];
    const convertedCorrectAnswer = correctAnswer[0];

    // if (!isLoading) {
    // }
    return (
      <div>
        {isLoading && <Loading />}
        {!isLoading && (
          <div>
            <Header />
            <p data-testid="question-category">
              {questions[contador].category}
            </p>
            <p data-testid="question-text">
              {questions[contador].question}
            </p>
            <div data-testid="answer-options">
              {this.shuffleArray(allAnswers).map((element, index) => (
                <button
                  key={ element }
                  type="button"
                  // disabled={ isDisabled }
                  style={
                    element === convertedCorrectAnswer
                      ? { border: correct } : { border: incorrect }
                  }
                  data-testid={
                    element === convertedCorrectAnswer
                      ? 'correct-answer' : `wrong-answer-${index}`
                  }
                  onClick={ () => this.handleClick(element) }
                >
                  { element }
                </button>))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
  response_code: state.response_code,
});

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Game);
