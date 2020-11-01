import React from 'react'

class QuestionCard extends React.Component {

  state = {
    display: "front",
    correct: true
  }

  renderChoices = () => {
    let choices = []

    choices.push(this.props.answer, this.props.incorrect)

    return choices.flat().sort().map((choice, index) => <button onClick={() => this.displayAnswer(choice)} key={index}>{choice}</button>)
  }

  displayAnswer = (choice) => {
    // console.log(choice, this.props.answer)
    this.setState({
      display: "back"
    })
    // flip card
    if (choice !== this.props.answer) {
      // console.log("Wrong!")
      this.props.updateScore(false)
      this.setState({
        correct: false
      })
    } else {
      // console.log("Correct!")
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
          <p>The answer is {this.props.answer}!</p>
          <button onClick={this.props.nextCard} >Next</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Wrong!</h1>
          <p>The correct answer was {this.props.answer}.</p>
          <button onClick={this.props.nextCard} >Next</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        { this.state.display === "front" ? 
          <div>
            <h1>Question {this.props.questionNumber}:</h1>
            <h2>{this.props.question}</h2>
            <h3>Choose Your Answer</h3>
            <div>
              {this.renderChoices()}
            </div>
          </div> 
        :
          <div>
            {this.displayBack()}
          </div> 
        }
        
      </div>
    )
  }
}

export default QuestionCard