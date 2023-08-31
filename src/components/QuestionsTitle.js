import React, { useState } from 'react';

function handleAskButton(setIsAskingQuestion) {
    return () => setIsAskingQuestion(prevState => !prevState);
}

function QuestionsTitle({ questionLength, onSave }) {
    const [isAskingQuestion, setIsAskingQuestion] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        setIsAskingQuestion(prevState => !prevState);
        onSave({
            title,
            description,

        });
    };


    return (
        <div className="page-title">
            <div className="questions-page-title-container">
                <div className="questions-title">
                    <p>All questions</p>
                </div>
                <div className="questions-stats">
                    <p>{questionLength} questions</p>
                    <button onClick={handleAskButton(setIsAskingQuestion)}>Ask question</button>
                </div>
            </div>

            {isAskingQuestion ?
                <form className='question-form' onSubmit={onSubmit}>
                    <div className="question-form-element">
                        <label style={{fontSize: '18px', fontWeight: "bold"}} className="question-form-title" htmlFor="title">Title</label>
                        <p style={{fontSize: '12px'}}>Be specific and imagine you’re asking a question to another person.</p>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            name="title"
                            id="title"
                            placeholder="e.g. How is it possible to pass your P.A. if Adam Metal is your assigned Mentor?"
                        />
                    </div>
                    <div className="question-form-element">
                        <label style={{fontSize: '18px', fontWeight: "bold"}} className="question-form-description" htmlFor="description">What are the details of your question?</label>
                        <p style={{fontSize: '12px'}}>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            name="description"
                            id="tidescriptiontle"
                        />
                        <div className="new-question-button button">
                            <button type="submit">Ask question</button>
                        </div>
                    </div>
                </form>
                :
                null}
        </div>
    );
}

export default QuestionsTitle;