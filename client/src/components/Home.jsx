import React from 'react';
import axios from 'axios';
import {
  Link, Redirect,
} from 'react-router-dom';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    };
    this.testingCookies = this.testingCookies.bind(this);
  }

  testingCookies() {
    const { loggedIn } = this.state;
    axios.get('/api/user/so')
      .then((res) => {
        if (res.data === 'Please Login again') {
          window.alert(res.data);
        }
        this.setState({
          loggedIn: !loggedIn,
        });
      })
      .catch((err) => {
        console.log('line 22', err);
      });
  }

  render() {
    const { loggedIn } = this.state;
    if (!loggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        {/* <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Logout</Link></li>
            </ul>
          </nav>
        </div> */}
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
