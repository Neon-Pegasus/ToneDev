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
              <h1 className="title-logo">ToneDev</h1>
              <nav>
                <ul>
                  <li><Link to="/home">Home</Link></li>
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
