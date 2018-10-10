import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Organizations = () => (
  <div>
    <Link to="/summary" orgName="Google">Google</Link>
    <br />
    <Link to="/summary">Twitter</Link>
    <br />
    <Link to="/summary">Facebook</Link>
    <br />
    <Link to="/summary">Microsoft</Link>
    <br />
    <Link to="/summary">Amazon</Link>
  </div>
);


export default Organizations;
