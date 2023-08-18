import React from "react";
import './Questions.css';
import dummyQuestions from "../static/dummyData";
import Question from "../components/Question";

function Questions() {
 
  return (
    <>
      <div className='questions-board'>
        <div className="board-title">All Questions</div>
        <div className="create-ask">Ask Question</div>
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
      
    </>
  );
}

export default Questions;