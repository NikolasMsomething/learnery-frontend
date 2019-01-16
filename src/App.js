import React, { Component } from 'react';
import Landing from './components/Landing';
import { Route, Switch, Redirect } from 'react-router-dom';
import Learn from './components/Learn';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Demo from './components/Demo';

class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/learn" component={Learn} />
            <Route path="/demo" component={Demo} />
            <Redirect to="/" />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default connect()(App);
