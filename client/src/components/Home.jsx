import React from 'react';
import {
  Route, Link, Switch,
} from 'react-router-dom';
import Organizations from './Organizations';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Welcome to ToneDev</h1>
        <Link to="/orgs">View Top 5 Organizations</Link>
        <Switch>
          <Route path="/orgs" component={Organizations} />
        </Switch>

      </div>
    );
  }
}

export default Home;
