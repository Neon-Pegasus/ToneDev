import React from 'react';
import axios from 'axios';
import {
  Link, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
// import TextAnalysis from './user_input/TextAnalysis';


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
        <h1 id="welcome-title">
          Welcome
          {' '}
          {`${username}`}
        </h1>
        {/* <TextAnalysis /> */}
        <div id="home-menu">
          <div className="home-menu-item">
            <Link to="/input-analysis">Live Comment Analysis</Link>
            <p>
              Enter the text you want to analyze to get some quick feedback before you hit send
            </p>
          </div>
          <div className="home-menu-item">
            <Link to="/orgs">View Top Organizations</Link>
            <p>
             See how contributors from the top organizations on
             Github are communicating on code reviews
            </p>
          </div>
          <div className="home-menu-item">
            <Link to="/stackOverflow">StackOverflow Analysis</Link>
            <p>
              Get an analysis of your answers on Stackoverflow
            </p>
          </div>
          <div className="home-menu-item">
            <Link to="/githubSummary">View your GitHub Analysis</Link>
            <p>
              See how you communicate on GitHub issues
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
