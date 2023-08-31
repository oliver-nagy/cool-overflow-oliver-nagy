import React from 'react';

function AnswerCard({answer}) {
    return (
        <div>
            <p>{answer.text}</p>
            <p>{answer.date.split('T')[0] + " " + answer.date.split('T')[1].split(".")[0]}</p>
        </div>
    );
}

export default AnswerCard;