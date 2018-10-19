import React from 'react';
import Input from './Input';

const TextAnalysis = () => {
  console.log('Text Analysis working');
  return (
    <div>
      <p className="la-description">
        Enter text to get an analysis:
      </p>
      <Input />
    </div>
  );
};

export default TextAnalysis;
