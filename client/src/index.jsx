import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Link, Switch,
} from 'react-router-dom';
// import queryString from 'query-string';
import Home from './components/Home';
import Login from './components/Login';
import Organizations from './components/Organizations';
import SummaryView from './components/SummaryView';
import User from './components/user/User';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*   componentWillMount() {
      // const { location, history } = this.props;
      const query = queryString.parse(window.location.search);
      console.log(query);
      console.log(query.token);
      if (query.token) {
        window.localStorage.setItem('x-auth-token', query.token);
        // window.history.push('/');
      }
    } */

  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
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
