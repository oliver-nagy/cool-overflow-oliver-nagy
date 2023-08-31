import React from 'react';
import AnswerCard from "./AnswerCard";

function Answers({answers}) {
    return (
        <div>
            {answers.map(answer => <AnswerCard answer={answer}/>)}
        </div>
    );
}

export default Answers;