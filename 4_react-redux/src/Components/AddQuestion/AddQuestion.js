import React from 'react';
import { connect } from 'react-redux';
import {addQuestion} from '../../Actions/Actions';
import styles from './AddQuestion.module.css'

class AddQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            title: '',
            text: '',
            tags:[]
        }
    }

    handleChange(e) {
        if(e.target.id === 'title') {
            this.setState({title:e.target.value})
        }

        if(e.target.id === 'text') {
            this.setState({text:e.target.value})
        }

        if(e.target.id === 'tags') {
            const tags = e.target.value.split(',')
            this.setState({tags:tags})
        }
    }

    loggingState() {
        console.log(this.state);
    }

    render() {
        return (
            <div onChange={(e) => this.handleChange(e)} className={styles.addQContainer}>
                <h3>New question</h3>
                <span>Title</span><input type="text" id="title"></input>
                <span>Text</span><input type="text" id="text"></input>
                <span>Tags</span><input type="text" id="tags"></input>
                <button onClick={() => this.props.addQuestion(this.state)} className={styles.addQuestionButton}>Add</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (question) => dispatch(addQuestion(question))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddQuestion);