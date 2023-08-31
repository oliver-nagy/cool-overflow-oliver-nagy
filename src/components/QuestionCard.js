import React from 'react';
import {Link} from "react-router-dom";

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
                <p className="question-content-title">
                    <Link className="question-link" to={`${question.id}`}>{question.title}</Link>
                </p>
                <p className="question-content">
                    {question.description}
                </p>
            </div>
        </div>
    );
}

export default QuestionCard;