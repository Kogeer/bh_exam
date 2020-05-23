import React from 'react';
import Tags from './Tags';
import { Link } from 'react-router-dom';
import styles from './QuestionLine.module.css';

export default function QuestionLine(props) {
    console.log(props);
    let style = styles.qLContainer;
    const isAccepted = props.question.answers.find(answer => answer.isAccepted === 1)
    if(isAccepted) {
        style = styles.qLAContainer;
    }
    
    return(
        <div className={style}>
            <div className={styles.qLHeader}><Link to={`/question/${props.question.id}`} >{props.question.title}</Link> User:{props.question.user}</div>
            <div>{props.question.text}</div>
            <div>
                {
                    props.question.tags.map((tag,idx) => {
                        return <Tags tag={tag} key={idx} />
                    })
                }
            </div>
        </div>
    )
}