import React from 'react';
import AnswerButton from './AnswerButton';

export default function Answers(props) {
    return (
        <div>
            {
                props.answers.map((answer,idx) => {
                return (
                    <div key={idx}>
                        {answer.text}
                        {<AnswerButton text={answer.text} questId={props.questId} isAccepted={answer.isAccepted}/>}
                    </div>
                )
                })
            }
        </div>
    )
}