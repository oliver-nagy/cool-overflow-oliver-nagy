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

function Question() {
    const {questionId} = useParams();
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState();

    useEffect(() => {
        fetchQuestion(questionId).then(question => setQuestion(question));
        fetchAnswers(questionId).then(answers => setAnswers(answers));
    }, []);

    if (question == null) return <h1>Loading...</h1>

    return (
        <>
            <div>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
            </div>
            <div>
                {
                    answers ? <Answers answers={answers}/> : <h1>Loading...</h1>
                }
            </div>
        </>
    );
}

export default Question;