import React from 'react';
import { Link } from 'react-router-dom';
import {addUser} from '../../Actions/Actions';
import { connect } from 'react-redux';

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : ''
        }
    }

    inputUser(e) {
        this.setState({user:e.target.value})
    }
    
    render() {
        return(
            <div>
                <div>Set user</div>
                <input type="text" onChange={(e) => this.inputUser(e)} defaultValue={this.props.user}></input>
                <Link to='/questions' onClick={() => this.props.addUser(this.state.user)}>OK</Link>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)