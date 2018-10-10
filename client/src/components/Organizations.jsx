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
  //       console.log(response);
  //       this.setState({
  //         orgs: response,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  renderView(name) {
    // console.log(name.org);
    // return <Summary orgName={name.org} />;
    this.setState({
      showSummary: true,
      orgName: name.org,
    });
  }

  render() {
    const { orgs } = this.state;
    if (this.state.showSummary === true) {
      return (
        <div>
          <Summary orgName={this.state.orgName}/>
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
