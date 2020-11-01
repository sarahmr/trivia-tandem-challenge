import React from "react"

class Start extends React.Component {

  handleRoundStart = () => {
    this.props.changePage("question round")
  }

  render() {
    return(
      <div className="welcome-page">
        <h1>WHO WANTS TO PLAY</h1>
        <h1>TRIVIA?</h1>
        <button onClick={this.handleRoundStart} >Start Round</button>
      </div>
    )
  }
}

export default Start