import React from 'react';
import Tags from '../Questions/Tags';
import styles from './Question.module.css';

export default function Question(props) {
    return(
        <div className={styles.qContainer}>
            <div className={styles.qHeader}>{props.question.title}<span>User:{props.question.user}</span></div>
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