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
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Logout</Link></li>
            </ul>
          </nav>
        </div>
        <h1>Welcome to ToneDev</h1>
        <Link to="/orgs">View Top 5 Organizations</Link>
        <br />
        <Link to="/repos">View By Repo</Link>
        <br />
        <Link to="/user">User Stats</Link>
      </div>
    );
  }
}

export default Home;
