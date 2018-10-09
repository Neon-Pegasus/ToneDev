import React from 'react';
import {
  Link, Router,
} from 'react-router-dom';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Welcome to ToneDev</h1>
        <Router>
          <Link to="/orgs">View Top 5 Organizations</Link>
          <br />
          <Link to="/repos">View By Repo</Link>
          <br />
          <Link to="/user">User Stats</Link>
        </Router>
      </div>
    );
  }
}

export default Home;
