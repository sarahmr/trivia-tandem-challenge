import React from "react"
import Start from "./Start"
import QuestionRounds from './QuestionRounds'
import EndRound from './EndRound'
import { PAGES } from './constants'

class Trivia extends React.Component {

  state = {
    currentPage: PAGES.START_GAME,
    score: 0
  }

  changePage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  updateScore = (bool) => {
    if (bool) {
      this.setState(prevState => {
        return { score: prevState.score + 1 }
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.currentPage === PAGES.START_GAME &&  <Start changePage={this.changePage} /> }
        
        {this.state.currentPage === PAGES.QUESTION_ROUND &&  <QuestionRounds changePage={this.changePage} updateScore={this.updateScore} /> }

        {this.state.currentPage === PAGES.END_GAME && <EndRound score={this.state.score} changePage={this.changePage} /> }       
      </div>
    )
  }
}

export default Trivia