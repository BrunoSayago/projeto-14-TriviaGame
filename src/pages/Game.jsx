import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import '../App.css';
import { getQuestions } from '../services/api';
import { questionsAction, scoreAction, assertionsAction } from '../redux/actions/index';

class Game extends React.Component {
  state = {
    questions: [],
    contador: 0,
    isLoading: true,
    isPlaying: false,
    correctAnswer: [],
    allAnswersInOrder: [],
    incorrect: '',
    correct: '',
    timer: 0,
    seconds: 30,
    difficulty: '',
  };

  async componentDidMount() {
    const { history, dispatch } = this.props;
    const { contador } = this.state;
    const localToken = localStorage.getItem('token');
    const questions = await getQuestions(localToken);
    const { results } = questions;
    console.log(results);

    if (questions.response_code === 0) {
      const respostaCorreta = [results[contador].correct_answer];
      const respostasErradas = [...results[contador].incorrect_answers];
      this.startTimer();
      this.setState({
        isLoading: false,
        questions: results,
        correctAnswer: respostaCorreta,
        allAnswersInOrder: this.montaOrdem(respostaCorreta, respostasErradas),
        difficulty: results[contador].difficulty,
        isPlaying: true,
      });
      console.log([results[contador].correct_answer]);
      dispatch(questionsAction(questions));
    } else {
      this.setState({ isLoading: false });
      localStorage.removeItem('token');
      history.push('/');
    }
  }

  montaOrdem = (respostaCerta, respostasErradas) => {
    const todasRespostas = [...respostaCerta, ...respostasErradas];
    return this.shuffleArray(todasRespostas);
  };

  shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClick = (element) => {
    const { timer, correctAnswer } = this.state;
    const { dispatch } = this.props;
    console.log(element);
    const convertedCorrectAnswer = correctAnswer[0];
    if (element === convertedCorrectAnswer) {
      const points = this.scoreCount();
      dispatch(scoreAction(points));
      dispatch(assertionsAction());
    }

    clearInterval(timer);
    this.setState({
      isPlaying: false,
      incorrect: '3px solid red',
      correct: '3px solid rgb(6, 240, 15)',
    });
  };

  nextClick = () => {
    const { contador, questions } = this.state;
    const FOUR = 4;
    const { history } = this.props;
    if (contador === FOUR) {
      history.push('/feedback');
    } else {
      const respostaCorreta = [questions[contador + 1].correct_answer];
      const respostasErradas = [...questions[contador + 1].incorrect_answers];
      const emOrdem = this.montaOrdem(respostaCorreta, respostasErradas);
      this.setState({
        contador: contador + 1,
        isPlaying: true,
        incorrect: '',
        correct: '',
        timer: 0,
        seconds: 30,
        correctAnswer: respostaCorreta,
        allAnswersInOrder: emOrdem,
      }, () => this.startTimer());
    }
  };

  scoreCount = () => {
    const { difficulty, seconds } = this.state;
    let modificador;
    const THREE = 3;
    const TWO = 2;
    const ONE = 1;
    const TEN = 10;
    switch (difficulty) {
    case 'hard':
      modificador = THREE;
      break;
    case 'medium':
      modificador = TWO;
      break;
    default:
      modificador = ONE;
    }
    const actualStore = TEN + (seconds * modificador);
    return actualStore;
  };

  startTimer = () => {
    const SEGUNDO = 1000;
    const { timer, seconds } = this.state;
    if (timer === 0 && seconds > 0) {
      const timerID = setInterval(this.countDown, SEGUNDO);
      this.setState({ timer: timerID });
    }
  };

  countDown = () => {
    const { timer, seconds } = this.state;
    if (seconds === 0) {
      clearInterval(timer);
      this.setState({
        isPlaying: false,
        timer: 0,
        incorrect: '3px solid red',
        correct: '3px solid rgb(6, 240, 15)',
      });
    } else {
      const segundos = seconds - 1;
      this.setState({
        seconds: segundos,
      });
    }
  };

  render() {
    const {
      questions,
      contador,
      isLoading,
      correctAnswer,
      incorrect,
      correct,
      seconds,
      isPlaying,
      allAnswersInOrder,
    } = this.state;

    const convertedCorrectAnswer = correctAnswer[0];

    return (
      <div>
        {isLoading && <Loading />}
        {!isLoading && (
          <div>
            <Header />
            <div className="game-content-plusButton">
              <div className="game-content">
                <div className="game-question-box">
                  <p data-testid="question-category" className="question-category">
                    {questions[contador].category}
                  </p>
                  <p data-testid="question-text">
                    {questions[contador].question}
                  </p>
                  <p name="timer">
                    {`Tempo: ${seconds}`}
                  </p>
                </div>

                <div data-testid="answer-options" className="answer-options">
                  {allAnswersInOrder.map((element, index) => (
                    <button
                      key={ element }
                      type="button"
                      disabled={ !isPlaying }
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
              {
                !isPlaying && (
                  <button
                    data-testid="btn-next"
                    type="button"
                    disabled={ isPlaying }
                    onClick={ this.nextClick }
                  >
                    Next
                  </button>)
              }
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
