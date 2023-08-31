import React, {useState} from 'react';

function handleAskButton(setIsAskingQuestion) {
    return () => setIsAskingQuestion(prevState => !prevState);
}

function QuestionsTitle({questionLength}) {
    const [isAskingQuestion, setIsAskingQuestion] = useState(false);

    return (
        <div className="page-title">
            <h3>All questions</h3>
            <p>{questionLength} questions</p>
            <button onClick={handleAskButton(setIsAskingQuestion)}>Ask question</button>
            {isAskingQuestion ? <h1>IGEN</h1> : null}
        </div>
    );
}

export default QuestionsTitle;