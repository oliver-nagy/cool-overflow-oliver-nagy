import React from 'react';
import QuestionCard from "./QuestionCard";

function QuestionList(props) {
    return (
        <div className="question-list-container">
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
        </div>
    );
}

export default QuestionList;