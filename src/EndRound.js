import React from "react"
import { PAGES } from './constants'

function EndRound(props) {
  return (
    <div className="welcome-page">
      <h1>The End!</h1>
      <h2>Your score: {props.score}/10</h2>
      <button onClick={() => props.changePage(PAGES.QUESTION_ROUND)} >Play Another Round</button>
    </div>
  ) 
}

export default EndRound