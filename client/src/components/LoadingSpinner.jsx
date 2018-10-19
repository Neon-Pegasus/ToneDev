import React from 'react';
import { Wave } from 'better-react-spinkit';

const LoadingSpinner = () => (
  <div>
    <p>Getting Data...</p>
    <Wave color="#4b0082" size={100} />
  </div>
);

export default LoadingSpinner;
