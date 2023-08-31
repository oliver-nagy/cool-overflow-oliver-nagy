import React, { useEffect, useState } from 'react';
import QuestionList from "../components/QuestionList";
import QuestionsTitle from "../components/QuestionsTitle";
import {json} from "react-router-dom";

const fetchQuestions = async () => {
    try {
        const response = await fetch("questions/");
        return await response.json();
    } catch (error) {
        console.log("Error fetching questions", error);
        throw error;
    }
}

const vote = async (questionId, voteValue) => {
    try {
        const response = await
            fetch("questions/vote", {
                method: 'PATCH',
                body: JSON.stringify({
                    id: questionId,
                    number: voteValue,
                }),
                headers: {
                    'Content-type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
    } catch (e) {
        console.log(e);
    }
}
const handleVote = (amount, questionId) => {
    vote(amount, questionId);
}

const createQuestion = (question) => {
    return fetch("questions/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
    }).then((res) => res.json());
};

function Questions(props) {
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        fetchQuestions().then(questions => setQuestions(questions))
    }, []);

    const handleCreateQuestion = (question) => {
        createQuestion(question)
            .then(() => {})
    };

    if (questions === null) <><h1>Loading..</h1></>

    if (questions != null)
        return (
            <div className="sub-page-container">
                <QuestionsTitle questionLength={questions.length}
                onSave={handleCreateQuestion} />
                
                <QuestionList questions={questions} handleVote={handleVote}/>
            </div>
        );

}

export default Questions;