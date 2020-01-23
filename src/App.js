import React, { Component } from 'react';
import './scss/main.scss';
import { AllHtmlEntities } from 'html-entities';

const entities = new AllHtmlEntities();

class App extends Component {
  state = {
    data: null,
    currentQuestion: 0,
    quizState: 'Check Answer',
    confirmButtonContent: 'Confirm answer',
    score: 0
  }

  handleNextQuestion = () => {
    if (this.state.quizState === 'Wrong' || this.state.quizState === 'Correct')
      this.setState({ currentQuestion: this.currentQuestion + 1 })
  }

  // componentDidMount() {
  //   fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }))
  // }

  render() {
    const { currentQuestion, data, quizState } = this.state;
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

          <div className='quiz-question'>fasdfsdafdasfdasfs{data === null ? null : entities.decode(this.state.data.results[currentQuestion].question)}</div>
          <div className="quiz-answers">
            <button onClick={() => this.setState({ quizState: 'Correct, Go to Next Question' })} className="correct answer">{data === null ? null : data.results[currentQuestion].correct_answer}</button>
            <button onClick={() => this.setState({ quizState: 'red' })} className="incorrect answer">{data === null ? null : data.results[currentQuestion].incorrect_answers[0]}aaaaa</button>
            <button onClick={() => this.setState({ quizState: 'red' })} className="incorrect answer">{data === null ? null : data.results[currentQuestion].incorrect_answers[1]}</button>
            <button onClick={() => this.setState({ quizState: 'red' })} className="incorrect answer">{data === null ? null : data.results[currentQuestion].incorrect_answers[2]}</button>
          </div>
          <button onClick={this.handleNextQuestion}> {quizState}</button>
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
}

export default App;
