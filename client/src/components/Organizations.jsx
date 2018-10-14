import React from 'react';
import axios from 'axios';
import Summary from './SummaryView';


class Organizations extends React.Component {
  constructor(props) {
    super(props);
    console.log('what is props', props.location.state);
    this.state = {
      orgs: [],
      showSummary: false,
    };
    this.renderView = this.renderView.bind(this);
  }

  // TODO: make a GET request to github microservice through nodeGateway display the org names
  componentDidMount() {
    axios.get('/api/gateway/github/orglist')
      .then((response) => {
        // console.log('ORGS GET: ', response.data);
        const orglist = response.data;
        const orgs = [];
        orglist.map((org) => {
          if (org.orgName !== null) {
            orgs.push(org.orgName);
          }
          return orgs;
        });
        this.setState({
          orgs,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // getOrgData(org) {

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
        {orgs.map(org => (
          <div key={org}>
            <button type="submit" key={org} onClick={() => this.renderView({ org })}>
              {org}
            </button>
            <br />
          </div>
        ))}
      </div>
    );
  }
}


export default Organizations;
