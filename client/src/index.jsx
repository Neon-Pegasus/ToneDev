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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  componentWillMount() {
    this.setState({
      username: cookie.load('username'),
    });
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <div>
          <nav>
            {username ? (
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Logout</Link></li>
              </ul>
            ) : (null)}
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/" component={Login} />
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
