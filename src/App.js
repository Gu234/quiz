import React, { Component } from 'react';
import './scss/main.scss';

class App extends Component {
  state = {
    data: null,
    currentQuestion: 0,
    quizState: 'check',
    confirmButtonContent: 'Confirm answer'
  }

  handleNextQuestion = () => {
    if (this.state.quizState === 'Wrong' || this.state.quizState === 'Correct')
      this.setState({ currentQuestion: this.currentQuestion + 1 })
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render() {
    const { currentQuestion, data, quizState } = this.state;
    return (
      <div className="container">
        <div className="quiz">

          <h1 className="quiz-title">Quiz App</h1>
          <h2>{data === null ? null : this.state.data.results[currentQuestion].question}</h2>
          <button onClick={() => this.setState({ quizState: 'green' })} className="correct answer">{data === null ? null : data.results[currentQuestion].correct_answer}</button>
          <button onClick={() => this.setState({ quizState: 'red' })} className="incorrect answer">{data === null ? null : data.results[currentQuestion].incorrect_answers[0]}</button>
          <button onClick={() => this.setState({ quizState: 'red' })} className="incorrect answer">{data === null ? null : data.results[currentQuestion].incorrect_answers[1]}</button>
          <button onClick={() => this.setState({ quizState: 'red' })} className="incorrect answer">{data === null ? null : data.results[currentQuestion].incorrect_answers[2]}</button>
          <button onClick={this.handleNextQuestion}> {quizState}</button>
        </div>
      </div>
    )
  }
}

export default App;
