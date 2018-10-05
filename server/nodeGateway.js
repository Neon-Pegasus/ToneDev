const express = require('express');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const oauth = require('./oauth/oauth_service');

const port = process.env.PORT || 4000;

const gateway = express();

gateway.use(express.static(path.join(__dirname, '../client/dist')));
gateway.use(bodyParser.json());
gateway.use(bodyParser.urlencoded({ extended: true }));

//  authentication
gateway.use(passport.initialize());
passport.use(oauth.githubStrat);
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

gateway.get('/auth/github', passport.authenticate('github'));

gateway.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    console.log(res);
    res.redirect('/');
  });


//  IBM watson organization microservice
gateway.use('/gateway/search', (req, res) => {
  axios({
    method: req.method,
    url: 'https://tonedev-micro-sentiment.herokuapp.com',
    params: req.params,
    body: req.body,
  })
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

gateway.listen(port, () => console.log(`gateway server listening on ${port}`));
