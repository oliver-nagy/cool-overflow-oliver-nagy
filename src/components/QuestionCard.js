import React from 'react';

function QuestionCard({question, handleVote}) {

    return (
        <div className="question-card">
            <div className="question-stats">
                <p>{question.score} votes</p>
                <p>0 answers</p>
                <button onClick={() => handleVote(question.id, 1)}>Up vote</button>
                <button onClick={() => handleVote(question.id, -1)}>Down vote</button>
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