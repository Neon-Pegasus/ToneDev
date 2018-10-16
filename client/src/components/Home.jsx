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
  }

  componentDidMount() {
    const { loggedIn } = this.state;
    axios.get('/api/loginChecker')
      .then((res) => {
        if (res.data === 'Please Login again') {
          window.alert(res.data);
          this.setState({
            loggedIn: !loggedIn,
          });
        }
      })
      .catch((err) => {
        // comment
        window.alert('Please Login again');
        console.log(err.message);
        this.setState({
          loggedIn: !loggedIn,
        });
      });
  }

  render() {
    const { loggedIn } = this.state;
    const { username } = this.props;
    if (!loggedIn) {
      return <Redirect to="/" />;
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
          <div className="home-menu-item">
            <Link to="/user">User Stats</Link>
            <p>
              Get an analysis of your code reviews on Github and your commnets on Stackoverflow
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Home;
