const Sequelize = require('sequelize');
require('dotenv').config();

// const twitScrapeDb = new Sequelize(`${process.env.TWEET_DB}`);
const twitScrapeDb = new Sequelize('postgres://gaauvmwu:BHXlde1Ds8tSIEUFSKQ7nbMr8qfZIHzJ@pellefant.db.elephantsql.com:5432/gaauvmwu');

twitScrapeDb
  .authenticate()
  .then(() => {
    console.log('connected to Twitter DB');
  })
  .catch((err) => {
    console.error('unable to connect to Twitter db', err);
  });

const Org = twitScrapeDb.define('Org', {
  orgName: {
    type: Sequelize.STRING,
  },
});

const Tweets = twitScrapeDb.define('Tweets', {
  tweet: { type: Sequelize.STRING },
  tweetWritten: { type: Sequelize.STRING },
});

twitScrapeDb.sync()
  .then(() => {
    Org.create({
      orgName: 'Google',
    })
      .then(() => {
        Tweets.create({
          tweet: 'some text for sample purposes, some text for sample purposes, some text for sample purposes some text for sample purposes, some text for sample purposes, some text for sample purposes',
          tweetWritten: 'some date values',
        });
      });
  });

module.exports.Org = Org;
module.exports.Tweets = Tweets;
