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
          Welcome to ToneDev
          {' '}
          {`${username}!!!`}
        </h1>
        {/* <Link to="/orgs">View Top 5 Organizations</Link> */}
        <Link to={{
          pathname: '/orgs',
          state: {
            notify: true,
          },
        }}>
          adsf
        </Link>
        <br />
        <Link to="/repos">View By Repo</Link>
        <br />
        <Link to="/user">User Stats</Link>
        <button type="button" onClick={this.testingCookies}>testingCookies</button>
      </div>
    );
  }
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Home;
