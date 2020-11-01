import React from "react"
import { PAGES } from './constants'

function Start(props) {
  return(
    <div className="welcome-page">
      <h1>WHO WANTS TO PLAY</h1>
      <h1>TRIVIA?</h1>
      <button onClick={() => props.changePage(PAGES.QUESTION_ROUND)} >Start Round</button>
    </div>
  )
}

export default Start