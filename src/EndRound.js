import React from "react"

class EndRound extends React.Component {
  render() {
    return (
      <div>
        <h2>The End!</h2>
        <p>Your score: {this.props.score}/10</p>
        <button onClick={() => this.props.changePage("question round")} >Another Round?</button>
      </div>
    )
  }
}

export default EndRound