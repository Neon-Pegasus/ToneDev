import React from 'react';
import PieChart from '../client/src/components/PieChart';

test('App renders component correctly', () => {
  const component = global.shallow(<PieChart />);
  expect(component).toMatchSnapshot();
});
