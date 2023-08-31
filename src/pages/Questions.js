import React, {useEffect, useState} from 'react';
import QuestionList from "../components/QuestionList";
import QuestionsTitle from "../components/QuestionsTitle";

const fetchQuestions = async () => {
    try {
        const response = await fetch("questions/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching questions", error);
        throw error;
    }
};

function Questions(props) {
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        fetchQuestions().then(questions => setQuestions(questions))
    }, []);

    if (questions === null) <><h1>Loading</h1></>

    if (questions != null)
    return (
        <div className="sub-page-container">
            <QuestionsTitle/>
            <QuestionList questions={questions}/>
        </div>
    );

}

export default Questions;