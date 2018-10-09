import React from 'react';
import User from '../client/src/components/user/User';

test('App renders component correctly', () => {
  const component = global.shallow(<User />);
  expect(component).toMatchSnapshot();
});
