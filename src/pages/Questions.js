import React, {useEffect, useState} from 'react';
import QuestionList from "../components/QuestionList";
import QuestionsTitle from "../components/QuestionsTitle";

const fetchQuestions = async () => {
    try {
        const response = await fetch("questions/");
        return await response.json();
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

    if (questions === null) <><h1>Loading..</h1></>

    if (questions != null)
    return (
        <div className="sub-page-container">
            <QuestionsTitle questionLength={questions.length}/>
            <QuestionList questions={questions}/>
        </div>
    );

}

export default Questions;