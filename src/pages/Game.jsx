import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getQuestions } from '../services/api';
import { questionsAction } from '../redux/actions/index';

class Game extends React.Component {
  state = {
    questions: [],
    contador: 0,
    isLoading: true,
    allQuestions: [],
  };

  async componentDidMount() {
    const { history, dispatch } = this.props;
    const { contador } = this.state;
    const localToken = localStorage.getItem('token');
    const questions = await getQuestions(localToken);
    const { results } = questions;
    const allQuestions = [results[contador].correct_answer,
      ...results[contador].incorrect_answers,
    ];
    if (questions.response_code === 0) {
      this.setState({ isLoading: false, questions: results, allQuestions });
      dispatch(questionsAction(questions));
    } else {
      this.setState({ isLoading: false });
      localStorage.removeItem('token');
      history.push('/');
    }
  }

  // function shuffleArray(arr) {
  //   // Loop em todos os elementos
  //   for (let i = arr.length - 1; i > 0; i--) {
  //       // Escolhendo elemento aleatório
  //   const j = Math.floor(Math.random() * (i + 1));
  //   // Reposicionando elemento
  //   [arr[i], arr[j]] = [arr[j], arr[i]];
  // }
  //   return arr;
  // }

  render() {
    const { questions, contador, isLoading, allQuestions } = this.state;
    if (!isLoading) {
      console.log(allQuestions);
    }
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
            <div>
              {allQuestions.map((element) => <button>{element}</button>)}
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
