import React from 'react';

function QuestionCard(props) {
    return (
        <div className="question-card">
            <div className="question-stats">
                <p>0 votes</p>
                <p>0 votes</p>
                <p>0 votes</p>
            </div>
            <div className="question">
                <h4 className="question-content-title">Lorem title of question</h4>
                <p className="question-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at erat et mi sodales mollis. Fusce
                    et
                    laoreet nulla. Phasellus ac nibh eu ex pretium ullamcorper efficitur quis sem. Nullam placerat magna
                    ac
                    vestibulum placerat. Quisque eu molestie nisi. Fusce eu pharetra ante. Nam sed eros id lorem ornare
                    vehicula nec quis risus.
                </p>
            </div>
        </div>
    );
}

export default QuestionCard;