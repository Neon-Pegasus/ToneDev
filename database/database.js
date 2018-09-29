const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(`postgres://ynjmqvmr:kXHdmqrI7KoThL4g3qxdH3tGum1gsWSL@tantor.db.elephantsql.com:5432/ynjmqvmr`);

sequelize
  .authenticate()
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.error('unable to connect to db', err);
  });

const User = sequelize.define('User', {
  firstName: {
    type: Sequelize.STRING,
  },
});

sequelize.sync()
  .then(() => {
    User.create({
      firstName: 'Joanne',
    });
  })
  .catch((err) => {
    console.log('this is error', err);
  });

module.exports.User = User;
