import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import cookie from 'react-cookies';
import Home from './components/Home';
import Login from './components/Login';
import Organizations from './components/Organizations';
import SummaryView from './components/SummaryView';
import User from './components/user/User';
import TextAnalysis from './components/user_input/TextAnalysis';
import GithubUserSummary from './components/user/GithubUserSummary';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      isLoggedIn: false,
    };
    this.changeMenu = this.changeMenu.bind(this);
  }

  componentWillMount() {
    const { isLoggedIn } = this.state;
    if (cookie.load('username')) {
      this.setState({
        username: cookie.load('username'),
        isLoggedIn: !isLoggedIn,
      });
    } else {
      this.setState({
        username: null,
      });
    }
  }

  changeMenu() {
    const { isLoggedIn } = this.state;
    this.setState({
      isLoggedIn: !isLoggedIn,
    });
  }

  render() {
    const { username, isLoggedIn } = this.state;
    return (
      <div>
        <div>
          {(isLoggedIn && username) ? (
            <div>
              <nav>
                <ul>
                  <li><h1 className="title-logo">ToneDev</h1></li>
                  <li><Link to="/home">Home</Link></li>
                  <li>
                    <Link to="/orgs">
                      Top
                      <br />
                      Organizations
                    </Link>
                  </li>
                  <li>
                    <Link to="/stackOverflow">
                      StackOverflow
                      <br />
                      Analysis
                    </Link>
                  </li>
                  <li>
                    <Link to="/githubSummary">
                      Your GitHub
                      <br />
                      Summary
                    </Link>
                  </li>
                  <li>
                    <Link to="input-analysis">
                      Live
                      <br />
                      Analysis
                    </Link>
                  </li>
                  <li><Link to="/" onClick={this.changeMenu} onKeyUp={this.changeMenu}>Logout</Link></li>
                </ul>
              </nav>
            </div>
          ) : (null)}
        </div>
        <div>
          <Switch>
            <Route exact path="/home" render={() => <Home username={username} />} />
            <Route exact path="/" render={() => <Login />} />
            <Route path="/orgs" component={Organizations} />
            <Route path="/summary" component={SummaryView} />
            <Route path="/input-analysis" component={TextAnalysis} />
            <Route path="/stackOverflow" component={User} />
            <Route path="/githubSummary" render={() => <GithubUserSummary username={username} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), document.getElementById('app'));
