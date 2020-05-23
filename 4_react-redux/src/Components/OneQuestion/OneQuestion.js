import React from 'react';
import { connect } from 'react-redux';
import AddAnswer from './AddAnswer';
import Answers from './Answers';
import Question from './Question';
import { Link } from 'react-router-dom';


function OneQuestion(props) {
    if(props.user === '') {
        return <Link to="/">Jelentkezz be!</Link>
    }
    return(
        <div>
            <Question question={props.question} />
            <AddAnswer questId={props.question.id}/>
            <Answers answers={props.question.answers} questId={props.question.id}/>
        </div>
    )
}

function mapStateToProps(state,props) {
    return {
        question: (state.questions.find(quest => quest.id === +props.match.params.id) || {}),
        user: state.user
    }
}

export default connect(mapStateToProps)(OneQuestion);