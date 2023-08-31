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
        onSave({
            title,
            description,

        });
    };


    return (
        <div className="page-title">
            <h3>All questions</h3>
            <p>{questionLength} questions</p>
            <button onClick={handleAskButton(setIsAskingQuestion)}>Ask question</button>
            {isAskingQuestion ?

                <form className='QuestionForm' onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            name="title"
                            id="title"
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            name="description"
                            id="tidescriptiontle"
                        />
                    </div>
                    <div className="button">
                        <button type="submit" >Create</button>
                    </div>


                </form>
                :
                null}
        </div>
    );
}

export default QuestionsTitle;