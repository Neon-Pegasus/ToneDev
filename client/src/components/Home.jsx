import React from 'react';
import axios from 'axios';
import {
  Link,
} from 'react-router-dom';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.testingCookies = this.testingCookies.bind(this);
  }

  testingCookies() {
    axios.get('/api/user/so')
      .then((res) => {
        console.log('res.send', res)
        console.log('what is res', res.data);
      })
      .catch((err) => {
        if (err.message === 'Please Login again') {
          window.alert('Please Login');
        }
        console.log(err);
      })
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
        <button type="button" onClick={this.testingCookies}>testingCookies</button>
      </div>
    );
  }
}

export default Home;
