import React from 'react'
import { CARD_DISPLAY } from './constants'

class QuestionCard extends React.Component {

  state = {
    display: CARD_DISPLAY.FRONT,
    correct: true,
    flip: false
  }

  renderChoices = () => {
    let choices = []

    choices.push(this.props.answer, this.props.incorrect)

    return choices.flat().sort().map((choice, index) => <button onClick={() => this.displayAnswer(choice)} key={index}>{choice}</button>)
  }

  displayAnswer = (choice) => {
    this.setState({ flip: true })

    setTimeout(() => {
      this.setState({ display: CARD_DISPLAY.BACK })
    }, 200)

    if (choice !== this.props.answer) {
      this.props.updateScore(false)
      this.setState({
        correct: false
      })
    } else {
      this.props.updateScore(true)
      this.setState({
        correct: true
      })
    }
  }

  displayBack = () => {
    if (this.state.correct) {
      return (
        <div>
          <h1>Correct!</h1>
          <h3>The answer is {this.props.answer}</h3>
          <button onClick={this.props.nextCard} >Next</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Wrong!</h1>
          <h3>The correct answer was {this.props.answer}</h3>
          <button onClick={this.props.nextCard} >Next</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="question-area">
        <div className="question-card">
          <div className={this.state.flip ? "question-card-inner, flip" : "question-card-inner"} >
            { this.state.display === CARD_DISPLAY.FRONT ? 
              <div className="question-card-front">
                <div>
                  <h2>Question {this.props.questionNumber + 1}</h2>
                  <h3>{this.props.question}</h3>
                </div>            
                <div className="choices">
                  <h4>Choose Your Answer:</h4>
                  <div>
                    {this.renderChoices()}
                  </div>
                </div>
              </div> 
            :
              <div className="question-card-back">
                {this.displayBack()}
              </div> 
            }       
          </div>
        </div> 
      </div>
    )
  }
}

export default QuestionCard