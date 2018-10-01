// import { User } from '../database/database';
const { User } = require('../database/database.js');

module.exports = {
  Query: {
    allUsers: () => User.findAll({ attributes: 'firstName' }),
  },
};
