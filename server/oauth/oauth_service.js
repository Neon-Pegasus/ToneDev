const GitHubStrategy = require('passport-github').Strategy;
require('dotenv').config();

const port = process.env.PORT || 4000;

module.exports.githubStrat = new GitHubStrategy({
  clientID: `${process.env.GITHUB_CLIENT_ID}`,
  clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
  callbackURL: `http://127.0.0.1:${port}/auth/github/callback`,
},
(accessToken, refreshToken, profile, cb) => {
  // console.log('accesstoken = ', accessToken);
  console.log('cb=', cb);
  console.log('profile', profile);
  const userData = {
    userId: profile.id,
    username: profile.username,
    token: accessToken,
  };
  return cb(null, userData);
});
