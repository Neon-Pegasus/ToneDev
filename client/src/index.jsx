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
      isLoggedIn: false,
    };
    this.changeMenu = this.changeMenu.bind(this);
  }

  componentWillMount() {
    const { isLoggedIn } = this.state;
    this.setState({
      username: cookie.load('username'),
      isLoggedIn: !isLoggedIn,
    });
  }

  changeMenu() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const { username, isLoggedIn } = this.state;
    return (
      <div>
        <div>
          <nav>
            {isLoggedIn ? (
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/" onClick={this.changeMenu} onKeyUp={this.changeMenu}>Logout</Link></li>
              </ul>
            ) : (null)}
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path="/home" render={() => <Home username={username} />} />
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
