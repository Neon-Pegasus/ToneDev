import config from 'dotenv';
import Sequelize, { STRING } from 'sequelize'; 

console.log(process.env.DB);
const sequelize = new Sequelize('process.env.DB');

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
    type: STRING,
  },
});

User.sync();

const _User = User;
export { _User as User };