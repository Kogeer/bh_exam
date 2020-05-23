import React from 'react';
import { addAnswer } from '../../Actions/Actions';
import { connect } from 'react-redux';
import styles from './AddAnswer.module.css';

class AddAnswer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questId : this.props.questId,
            answer : ''
        }
    }

    handleChange(e) {
        this.setState({answer:e.target.value})
    }
    render() {
        return (
            <div className={styles.aContainer}>
                <h4>Write answer</h4>
                <input type="text" onChange={(e) => this.handleChange(e)}></input>
                <button onClick={() => this.props.addAnswer(this.state.answer,this.state.questId)}>ok</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAnswer: (answer,questId) => dispatch(addAnswer(answer,questId))
    }
}

export default connect(null,mapDispatchToProps)(AddAnswer);