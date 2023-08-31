import React from 'react';

function QuestionCard({ question }) {
    return (
        <div className="question-card">
            <div className="question-stats">
                <p>0 votes</p>
                <p>0 answers</p>
            </div>
            <div className="question">
                <h4 className="question-content-title">{question.title}</h4>
                <p className="question-content">
                    {question.description}
                </p>
            </div>
        </div>
    );
}

export default QuestionCard;