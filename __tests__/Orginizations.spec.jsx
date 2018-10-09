import React from 'react';
import Organizations from '../client/src/components/Organizations';

test('App renders component correctly', () => {
  const component = global.shallow(<Organizations />);
  expect(component).toMatchSnapshot();
});
