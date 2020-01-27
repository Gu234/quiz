import React, { Component } from 'react';
import './scss/main.scss';
import { AllHtmlEntities } from 'html-entities';
import Answer from './components/answer'

const entities = new AllHtmlEntities();

class App extends Component {
  state = {
    quizState: 'initial',
    data: null,
    correct_answer_index: Math.floor(Math.random() * 4),
    currentQuestion: 0,
    confirmButtonContent: 'Choose an answer',
    score: 0
  }


  componentDidMount() {

    let data = localStorage.getItem("data");

    if (data) {
      data = JSON.parse(data);
      this.setState({ data });
    } else {
      fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => {
          this.setState({ data });
          localStorage.setItem("data", JSON.stringify(data));
        });
    }

  }

  render() {
    const { currentQuestion, data, quizState, correct_answer_index } = this.state;
    if (!data) return null;

    return (<>
      <div className="container">
        <div className="decoration-top">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="jumbotron">
          <div className='jumbotron-item1'>ARE YOU READY?!</div>
          <div className='jumbotron-item2'>QUIZ TIME!</div>
        </div>
        <div className="quiz">

          <div className='quiz-question'>{entities.decode(data.results[currentQuestion].question)}</div>
          <div className="quiz-answers">
            {this.getAnswers().map((answer, index) =>
              <Answer onClick={this.handleAnswerButton}
                is_correct_answer={correct_answer_index === index ? true : false}
                id={index}
                quizState={quizState}
                key={index}>{entities.decode(answer)}
              </Answer>
            )}
          </div>
          <button onClick={this.handleNextQuestion}
            className={this.setNextQuestionButtonClass()}>
            {this.setNextQuestionButtonMessage()}
          </button>
        </div>
        <div className="decoration-bottom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
    )
  }

  getAnswers() {
    const currentQuestion = this.state.currentQuestion;
    const answers = [...this.state.data.results[currentQuestion].incorrect_answers];
    const correct_answer = this.state.data.results[currentQuestion].correct_answer;
    answers.splice(this.state.correct_answer_index, 0, correct_answer);
    return answers
  }

  handleNextQuestion = () => {
    if (this.state.quizState === 'red' || this.state.quizState === 'green')
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        quizState: 'initial',
        correct_answer_index: Math.floor(Math.random() * 4)
      })
  }

  handleAnswerButton = (index) => {

    if (this.state.correct_answer_index === index)
      this.setState({ quizState: 'green', score: this.state.score + 1 })
    else
      this.setState({ quizState: 'red' })

  }

  setNextQuestionButtonClass() {
    switch (this.state.quizState) {
      case 'red':
        return 'red'
      case 'green':
        return 'green'
      default:
        return 'hidden'
    }
  }

  setNextQuestionButtonMessage() {
    if (this.state.quizState === 'green')
      return 'Correct! Go to next'
    return 'Wrong! Go to next'
  }
}

export default App;
