import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Header.module.css';

function Header(props) {
    return (
        <div className={styles.headerContainer}>
            <div>
                <Link to="/">My QA site</Link>
            </div>
            <div>
                <div>
                    <Link to="/setuser">Set user</Link>
                </div>
                <div>Current user:{props.user}</div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);