import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
// import queryString from 'query-string';
import Home from './components/Home';
import Login from './components/Login';
import Organizations from './components/Organizations';
import SummaryView from './components/SummaryView';
import User from './components/user/User';

class App extends React.Component {
  constructor(props) {
    // adding comment
    super(props);
    this.state = {
      // username: '',
    };
  }

  /*   componentDidMount() {
    if (document.cookie.username) {
      const githubUsername = document.cookie.username;
      this.setState({
        username: githubUsername,
      });
    } else {
      this.setState({
        username: null,
      });
    }
  } */

  render() {
    console.log('document cookie', document.cookie);
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
        <div>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" render={() => <Home />} />
            <Route path="/login" component={Login} />
            <Route path="/orgs" component={Organizations} />
            <Route path="/summary" component={SummaryView} />
            <Route path="/user" component={User} />
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
