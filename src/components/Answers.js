import React from 'react';
import AnswerCard from "./AnswerCard";

function Answers({answers}) {
    return (
        <div>
            {answers.map(answer => <AnswerCard answer={answer}/>)}
            <p style={{fontSize: '20px'}}>Your Answer</p>
            <textarea className="answer-text-area"></textarea>

        </div>

    );
}

export default Answers;