import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import User from './Components/User/User';
import Questions from './Components/Questions/Questions';
import Header from './Components/Header/Header';
import OneQuestion from './Components/OneQuestion/OneQuestion';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/setuser" component={User}/>
          <Route path="/question/:id" component={OneQuestion} />
          <Route path="/" >
            {!this.props.user ? <User /> : <Questions />}
          </Route>
        </Switch>

      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
