import React from 'react';
import QuestionCard from "./QuestionCard";

function QuestionList({ questions }) {

    return (
        <div className="question-list-container">
            {questions.map(questions => <QuestionCard question={questions} />)}
        </div>
    );
}

export default QuestionList;