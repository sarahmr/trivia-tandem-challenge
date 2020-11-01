import React from 'react'
import QuestionCard from './QuestionCard'
import QuestionData from './Apprentice_TandemFor400_Data.json'
import { PAGES } from './constants'

class QuestionRounds extends React.Component {

  state = {
    triviaQuestions: [],
    questionNumber: 0
  }

  componentDidMount() {
    this.questionCollection()
    this.setState({
      questionNumber: 0
    })
  }

  questionCollection = () => {
    let questionCollection = []

    let count = 0
    while (count < 10) {
      let randomIndex = Math.floor(Math.random() * QuestionData.length)

      if (!questionCollection.includes(QuestionData[randomIndex])) {      
        questionCollection.push(QuestionData[randomIndex])
        count++
      }
    }

    this.setState({
      triviaQuestions: questionCollection
    })
  }

  nextCard = () => {
    this.setState(prevState => {
      return { questionNumber: prevState.questionNumber + 1 }
    }, () => {
      if (this.state.questionNumber > 9) {
        this.props.changePage(PAGES.END_GAME)
      }
    })
  }

  render() {
    let {questionNumber, triviaQuestions} = this.state

    if (triviaQuestions.length === 0 || questionNumber > triviaQuestions.length - 1) {
      return null
    }

    return (
      <QuestionCard 
        questionNumber={questionNumber}
        key={triviaQuestions[questionNumber]["question-number"]} 
        question={triviaQuestions[questionNumber].question}
        answer={triviaQuestions[questionNumber].correct}
        incorrect={triviaQuestions[questionNumber].incorrect} 
        nextCard={this.nextCard}
        updateScore={this.props.updateScore}
      />
    )
  }
}

export default QuestionRounds