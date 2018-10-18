import React from 'react';
import { Wave } from 'better-react-spinkit';

const LoadingSpinner = () => (
  <div>
    <p>Getting Data...</p>
    <Wave color="#ff9f1c" size={100} />
  </div>
);

export default LoadingSpinner;
