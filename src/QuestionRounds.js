import React from 'react'
import QuestionCard from './QuestionCard'
import QuestionData from './Apprentice_TandemFor400_Data.json'

class QuestionRounds extends React.Component {

  state = {
    triviaQuestions: [],
    questionNumber: 1
  }

  componentDidMount() {
    this.questionCollection()
    this.setState({
      questionNumber: 1
    })
  }

  questionCollection = () => {
    let questionCollection = []

    let count = 0
    while (count < 10) {
      let randomIndex = Math.floor((Math.random() * (QuestionData.length - 1)) + 1)

      if (!questionCollection.includes(QuestionData[randomIndex])) {      
        questionCollection.push(QuestionData[randomIndex])
        count++
      }
    }

    this.setState({
      triviaQuestions: questionCollection
    })
  }

  renderQuestionCards = () => {

    // render question at index 0
    // select an answer
    // flip card
    // click next and go to next card

    // console.log(this.state.questionNumber - 1, this.state.triviaQuestions[(this.state.questionNumber - 1)])
    return (
      <QuestionCard 
      questionNumber={this.state.questionNumber}
      key={this.state.triviaQuestions[this.state.questionNumber - 1]["question-number"]} 
      question={this.state.triviaQuestions[this.state.questionNumber - 1].question}
      answer={this.state.triviaQuestions[this.state.questionNumber - 1].correct}
      incorrect={this.state.triviaQuestions[this.state.questionNumber - 1].incorrect} 
      nextCard={this.nextCard}
      updateScore={this.props.updateScore}
    />
    )  
  }

  nextCard = () => {
    this.setState(prevState => {
      return { questionNumber: prevState.questionNumber + 1 }
    }, () => {
      console.log(this.state.questionNumber)
      if (this.state.questionNumber > 10) {
        this.props.changePage("end round")
      }
    })
  }

  render() {
    if (this.state.triviaQuestions.length === 0 || this.state.questionNumber > 10) {
      return null
    }
    return (
      <div>
        {this.renderQuestionCards()}
      </div>
    )
  }
}

export default QuestionRounds