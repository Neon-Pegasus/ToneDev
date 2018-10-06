import React from 'react';
import Summary from '../SummaryView';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      // SOuserName: '',
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="SOuserName">
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Summary />

      </div>
    );
  }
}

export default User;
