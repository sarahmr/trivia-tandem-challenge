import React from "react"

class EndRound extends React.Component {
  render() {
    return (
      <div className="welcome-page">
        <h1>The End!</h1>
        <h2>Your score: {this.props.score}/10</h2>
        <button onClick={() => this.props.changePage("question round")} >Another Round?</button>
      </div>
    )
  }
}

export default EndRound