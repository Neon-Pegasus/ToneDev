import React from 'react';
import axios from 'axios';
import {
  Link, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';


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
          // comment
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
    const { username } = this.props;
    if (!loggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <h1>
          Welcome
          {' '}
          {`${username}`}
        </h1>
        <div id="home-menu">
          <div className="home-menu-item">
            <Link to="/orgs">View Top Organizations</Link>
            <p>
             See how contributors from the top organizations on
             Github are communicating on code reviews
            </p>
          </div>
          {/* <Link to={{
            pathname: '/orgs',
            state: {
              notify: true,
            },
          }}
          >
            View Top 5 Organizations
          </Link> */}
          <div className="home-menu-item">
            <Link to="/user">User Stats</Link>
            <p>
              Get an analysis of your code reviews on Github and your commnets on Stackoverflow
            </p>
          </div>
          <button type="button" onClick={this.testingCookies}>testingCookies</button>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Home;
