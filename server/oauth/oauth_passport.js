const GitHubStrategy = require('passport-github').Strategy;
const passport = require('passport');
require('dotenv').config();

const url = process.env.GITHUB_CALLBACK_URL;

const githubStrat = new GitHubStrategy({
  clientID: `${process.env.GITHUB_CLIENT_ID}`,
  clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
  callbackURL: `${url}/auth/github/callback`,
},
(accessToken, refreshToken, profile, cb) => {
  const userData = {
    userId: profile.id,
    username: profile.username,
    token: accessToken,
  };
  return cb(null, userData);
});

const serialize = (user, cb) => (
  cb(null, user)
);

passport.serializeUser(serialize);
passport.deserializeUser(serialize);
passport.use(githubStrat);
