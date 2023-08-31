import React from 'react';
import QuestionCard from "./QuestionCard";

function QuestionList({ questions,handleVote }) {

    return (
        <div className="question-list-container">
            {questions.map(questions => <QuestionCard question={questions} handleVote={handleVote}/>)}
        </div>
    );
}

export default QuestionList;