import React from 'react';
import { acceptAnswer, declineAnswer } from '../../Actions/Actions';
import { connect } from 'react-redux';

function AnswerButton(props) {
    if(props.isAccepted) {
        return <button onClick={() => props.declineAnswer(props.text,props.questId)}>Revoke</button>
    }
    return <button onClick={() => props.acceptAnswer(props.text,props.questId)}>Accept</button>
}

function mapDispatchToProps(dispatch) {
    return {
        acceptAnswer: (answer,questId) => dispatch(acceptAnswer(answer,questId)),
        declineAnswer: (answer,questId) => dispatch(declineAnswer(answer,questId))
    }
}

export default connect(null,mapDispatchToProps)(AnswerButton)