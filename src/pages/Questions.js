import React, {useEffect, useState} from 'react';
import QuestionList from "../components/QuestionList";
import QuestionsTitle from "../components/QuestionsTitle";

const fetchQuestions = async () => {
    try {
        const response = await fetch("/questions");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching questions", error);
        throw error;
    }
};

function Questions(props) {
    const [questions, setQuestions] = useState();

    useEffect(() => {
        setQuestions(fetchQuestions());
    }, []);

    return (
        <div className="sub-page-container">
            {console.log(questions)}
            <QuestionsTitle/>
            <QuestionList/>

        </div>
    );
}

export default Questions;