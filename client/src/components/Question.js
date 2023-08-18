import React, { useState } from "react";
import './Question.css';

import dummyQuestions from "../static/dummyData";

function Question() {

  const [vote, setVote] = useState(0);

  const handleIncrease = () => {
    setVote(prevVote => prevVote + 1);
  }

  const handleDecrease = () => {
    setVote(prevVote => prevVote - 1);
  }

  const tagsList = [];
  for (let i = 0; i < dummyQuestions.length; i++) {
    tagsList.push(dummyQuestions[i].tags);
  }


  const handleCutContentLength = (str) => {
    if (str.length > 120) {
      return str.slice(0, 120) + '...';
    }
    return str;
  }

  const handleCutTitleLength = (str) => {
    if (str.length > 80) {
      return str.slice(0, 80) + '...';
    }
    return str;
  }


  return (
    <>
      <li className="Question" id={dummyQuestions[0].id}>
        <div className="left-section">
          
          <div className="good" onClick={handleIncrease}>Good👍</div>
          <div className="vote-count">{vote}</div>
          <div className="bad" onClick={handleDecrease}>Bad👎</div>

        </div>

        <div className="right-section">
          <div className="content-section">
            <div className="title">{handleCutTitleLength(dummyQuestions[0].title)}</div>
            <div className="content">{handleCutContentLength(dummyQuestions[0].content)}</div>
          </div>
          

          <div className="bottom-section">
            <div className="tags">
              <div className="tag">{tagsList[0][0]}</div>
              <div className="tag">{tagsList[0][1]}</div>
            </div>
            <div className="user">
              <div className="user-photo"></div>
              <div className="username">{dummyQuestions[0].username}</div>
            </div>
            
          </div>
          
        </div>
      </li>
    </>
  );
}

export default Question;