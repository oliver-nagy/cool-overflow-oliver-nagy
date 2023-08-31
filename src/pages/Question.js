import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const fetchQuestion = async (questionId) => {
    try {
        const response = await fetch(`/questions/${questionId}`);
        return await response.json();
    } catch (error) {
        console.log("Error fetching questions", error);
        throw error;
    }
}

function Question() {
    const { questionId } = useParams();
    const [question, setQuestion] = useState();

    useEffect(() => {
        fetchQuestion(questionId).then(question => setQuestion(question));
    }, []);

    if (question == null) return <h1>Loading...</h1>

    return (
        <div>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
        </div>
    );
}

export default Question;