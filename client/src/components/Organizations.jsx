import React from 'react';
// import {
//   Link,
// } from 'react-router-dom';
// import axios from 'axios';
import Summary from './SummaryView';


class Organizations extends React.Component {
  constructor() {
    super();
    this.state = {
      orgs: ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook'],
      showSummary: false,
    };
    this.renderView = this.renderView.bind(this);
  }

  // TODO: make a GET request to github microservice through nodeGateway display the org names
  // componentDidMount() {
  //   axios.get('api/gateway/github/orglist')
  //     .then((response) => {
  //       console.log('HELLO FROM ORGS GET: ', response);
  //       // this.setState({
  //       //   orgs: response,
  //       // });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  renderView(name) {
    this.setState({
      showSummary: true,
      orgName: name.org,
    });
  }

  render() {
    const { orgs } = this.state;
    const { orgName } = this.state;
    const { showSummary } = this.state;

    if (showSummary === true) {
      return (
        <div>
          <Summary orgName={orgName} />
        </div>
      );
    }
    return (
      <div>
        <ul>
          {orgs.map(org => (
            <li key={org} onClick={() => this.renderView({ org })}>
              {org}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default Organizations;
