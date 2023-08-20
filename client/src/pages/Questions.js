import React from "react";
import './Questions.css';
import dummyQuestions from "../static/dummyData";
import Question from "../components/Question";
import { Link } from "react-router-dom";

function Questions() {
  
 
  return (
    <div className="questions-wrapper">
      <div className='questions-board'>
        <div className="board-title">All Questions</div>
        <Link to='/editer' style={{textDecoration: 'none'}}>
        <div className="create-ask">Ask Question</div>
        </Link>
      </div>
      <div className="questions-container">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      
    </div>
  );
}

export default Questions;