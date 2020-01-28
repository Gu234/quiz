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
    if (!this.state.data) {
      fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => this.setState({ data })
        )
    }
  }

  render() {
    const { currentQuestion, data } = this.state;
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
          {this.isQuizFinished() ?
            <>
              <div className='quiz-score-description'>Your score:</div>
              <div className='quiz-score'>{this.state.score}/10</div>
              <button onClick={this.reloadPage}>Again?</button>

            </>
            : <>
              <div className='quiz-question'>{entities.decode(data.results[currentQuestion].question)}</div>
              <div className="quiz-answers">
                {this.getAnswers().map((answer) =>
                  <Answer onClick={() => this.setSelectedAnswer(answer)}
                    is_correct_answer={this.isCorrectAnswer(answer)}
                    isSelectedAnswer={this.isSelectedAnswer()}

                    key={answer}>{entities.decode(answer)}
                  </Answer>
                )}
              </div>
              <button onClick={this.showNextQuestion}
                className={this.setNextQuestionButtonClass()}>
                {this.setNextQuestionButtonMessage()}
              </button>
            </>
          }
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

  setSelectedAnswer(selectedAnswer) {
    this.setState({ selectedAnswer })
  }

  isSelectedAnswer() {
    return !!this.state.selectedAnswer
  }

  isCorrectAnswer(answer) {
    return answer === this.correctAnswer()
  }

  correctAnswer() {
    return this.currentQuestion().correct_answer
  }

  currentQuestion() {
    return this.state.data.results[this.state.currentQuestion]
  }

  getAnswers() {
    const answers = [...this.currentQuestion().incorrect_answers];
    answers.splice(this.state.correct_answer_index, 0, this.correctAnswer());
    return answers
  }

  showNextQuestion = () => {

    if (this.isSelectedAnswerCorrect()) {
      this.setState({ score: this.state.score + 1 })
    }

    this.setSelectedAnswer(null);

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      correct_answer_index: Math.floor(Math.random() * 4)
    })
  }

  isSelectedAnswerCorrect() {
    if (!this.isSelectedAnswer()) return false
    return this.isCorrectAnswer(this.state.selectedAnswer)
  }

  quizState() {
    if (!this.isSelectedAnswer())
      return 'initial'

    if (this.isSelectedAnswerCorrect())
      return 'green'
    else
      return 'red'
  }

  setNextQuestionButtonClass() {
    switch (this.quizState()) {
      case 'red':
        return 'red'
      case 'green':
        return 'green'
      default:
        return 'hidden'
    }
  }

  setNextQuestionButtonMessage() {
    if (this.isSelectedAnswerCorrect())
      return 'Correct! Next question'
    return 'Wrong! Next question'
  }

  isQuizFinished() {
    return this.state.currentQuestion === this.state.data.results.length
  }

  reloadPage() {
    window.location.reload();

  }
}
export default App;
