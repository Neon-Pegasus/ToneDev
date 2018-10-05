import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Link, Switch,
} from 'react-router-dom';
import queryString from 'query-string';
import Home from './components/Home';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // const { location, history } = this.props;
    const query = queryString.parse(window.location.search);
    console.log(query);
    console.log(query.token);
    if (query.token) {
      window.localStorage.setItem('x-auth-token', query.token);
      // window.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
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
