import React,{useContext} from 'react'

import {GlobalState} from "../../GlobalState"

import {Link} from "react-router-dom"

import "../../css/history.css"
function  History () {

    const state = useContext(GlobalState)
    const [history] = state.userAPI.history;
    console.log("the value of state in history",state);
  return (
    <div className = "history">
        <h2>History</h2>
        <hr/>
        <h4>You have {history.length} ordered</h4>
     </div>
  )
}

export default History;