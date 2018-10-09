import React from 'react';
import Home from '../client/src/components/Home';

test('App renders component correctly', () => {
  const component = global.shallow(<Home />);
  expect(component).toMatchSnapshot();
});
