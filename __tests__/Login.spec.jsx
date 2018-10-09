import React from 'react';
import Login from '../client/src/components/Login';

test('App renders component correctly', () => {
  const component = global.shallow(<Login />);
  expect(component).toMatchSnapshot();
});
