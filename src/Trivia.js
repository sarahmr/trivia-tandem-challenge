import React from "react"
import Start from "./Start"
import QuestionRounds from './QuestionRounds'
import EndRound from './EndRound'

class Trivia extends React.Component {

  state = {
    currentPage: "start",
    score: 0
  }

  changePage = (page) => {
    console.log(page)
    this.setState({
      currentPage: page
    })
  }

  updateScore = (bool) => {
    console.log("here", bool)
    if (bool) {
      this.setState(prevState => {
        return { score: prevState.score + 1 }
      })
    }
  }


  render() {
    return (
      <div>
        {this.state.currentPage === "start" ?  <Start changePage={this.changePage} /> : null}
        
        {this.state.currentPage === "question round" ?  <QuestionRounds changePage={this.changePage} updateScore={this.updateScore} /> : null}

        {this.state.currentPage === "end round" ? <EndRound score={this.state.score} changePage={this.changePage} /> : null}       
      </div>
    )
  }
}

export default Trivia