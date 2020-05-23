import React from 'react';
import QuestionLine from './QuestionLine';
import { connect } from 'react-redux';
import AddQuestion from '../AddQuestion/AddQuestion';

function Questions(props) {
    return (
        <div>
            <AddQuestion />
            {
                props.questions.map((question,idx) => {
                    return <QuestionLine question={question} key={idx} />
                })
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(Questions)