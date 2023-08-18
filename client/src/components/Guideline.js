import React from 'react';
import './Guideline.css';

function Guideline() {
    return (
        <div className="Guideline-Wrapper">
            <p className="Guideline-Title">좋은 질문을 작성하는 법</p>
            <p className="Guideline-Text">You’re ready to ask a programming-related question and this form will help guide you through the process.</p>
            <p className="Guideline-Text">Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
            <p className="Guideline-List-Title">Steps</p>
            <ul className="Guideline-List-Text">
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>Describe what you tried and what you expected to happen.</li>
                <li>Add "tags" which help surface your question to members of the community.</li>
                <li>Review your question and post it to the site.</li>
            </ul>
        </div>        
    );
}

export default Guideline;