import React from "react"

class Start extends React.Component {

  handleRoundStart = () => {
    this.props.changePage("question round")
  }

  render() {
    return(
      <div>
        <h1>Who Wants to Play</h1>
        <h1>Trivia?</h1>
        <button onClick={this.handleRoundStart} >Start Round</button>
      </div>
    )
  }
}

export default Start