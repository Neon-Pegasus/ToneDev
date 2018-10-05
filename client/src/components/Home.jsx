import React from 'react';
import {
  Link,
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
        <Link to="/orgs">View Top 5 Organizations</Link>
        <br />
        <Link to="/repos">View By Repo</Link>
        <br />
        <Link to="/summary">See Your Stats</Link>
      </div>
    );
  }
}

export default Home;
