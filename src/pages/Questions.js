import React from 'react';
import QuestionList from "../components/QuestionList";
import QuestionsTitle from "../components/QuestionsTitle";

function Questions(props) {
    return (
        <div className="sub-page-container">
            <QuestionsTitle/>
            <QuestionList/>

        </div>
    );
}

export default Questions;