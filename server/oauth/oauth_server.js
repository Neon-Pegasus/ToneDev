const express = require('express');
const bodyParser = require('body-parser');
const GitHubStrategy = require('passport-github').Strategy;
const passport = require('passport');
const path = require('path');
require('dotenv').config();

const port = 3333;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use(require('express-session')({ secret: 'kitty', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: `${process.env.GITHUB_CLIENT_ID}`,
  clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
  callbackURL: `http://127.0.0.1:${port}/auth/github/callback`,
},
(accessToken, refreshToken, profile, cb) => {
  console.log('accesstoke = ', accessToken);
  console.log('refreshtoken = ', refreshToken);
  // console.log('profile = ', profile);
  return cb(null, profile.id);
}));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
