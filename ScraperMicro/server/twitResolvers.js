const { Org } = require('../dataBase/dbIndex.js');

module.exports = {
  Query: {
    allOrgs: () => Org.findAll({ attributes: 'orgName' }),
  },
};
