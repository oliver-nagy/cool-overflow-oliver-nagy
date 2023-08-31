import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Answers from "../components/Answers";

const fetchQuestion = async (questionId) => {
    try {
        const response = await fetch(`/questions/${questionId}`);
        return await response.json();
    } catch (error) {
        console.log("Error fetching questions", error);
        throw error;
    }
}

const fetchAnswers = async (questionId) => {
    try {
        const response = await fetch(`/answers/${questionId}`);
        return await response.json();
    } catch (error) {
        console.log("Error fetching answers", error);
        throw error;
    }
}

const formatDate = (dateString) => {
    return dateString.split("T")[0] + " "
        + dateString.split("T")[1].split(".")[0];
}

function Question() {
    const {questionId} = useParams();
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState();

    useEffect(() => {
        fetchQuestion(questionId).then(question => setQuestion(question));
        fetchAnswers(questionId).then(answers => setAnswers(answers));
    }, []);

    if (question == null) return <p>Loading...</p>

    return (
        <>
            <div className="question-container">
                <div className="question-title-container">
                    <p style={{fontSize: '25px'}}>{question.title}</p>
                    <p style={{fontSize: '14px'}}><span style={{color: 'grey'}}>Asked</span> {formatDate(question.created)}</p>
                </div>
                <div className="question-description-container">
                    <div className="question-votes">
                        <button className="vote-button">Up</button>
                        <h2 style={{margin: '5px 0'}}>{question.score}</h2>
                        <button className="vote-button">Down</button>
                    </div>
                    <p style={{padding: '0 0'}}>{question.description}</p>
                </div>
                <div style={{padding: '0 40px'}}>
                    {
                        answers ? <Answers answers={answers}/> : <h1>Loading...</h1>
                    }
                </div>
            </div>
        </>
    );
}

export default Question;