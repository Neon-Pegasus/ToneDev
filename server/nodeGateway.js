const express = require('express');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRouter = require('./oauth/oauth_microservice');

// const oauth = require('./oauth/oauth_service');

const port = process.env.PORT || 8888;

const gateway = express();

gateway.use(express.static(path.join(__dirname, '../client/dist')));
gateway.use(bodyParser.json());
gateway.use(bodyParser.urlencoded({ extended: true }));
gateway.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

//  authentication
require('./oauth/oauth_passport');

gateway.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY],
}));
gateway.use(passport.initialize());
gateway.use(passport.session());
gateway.use('/auth', authRouter);
/* gateway.get('/auth/github', passport.authenticate('github'));

gateway.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login', session: false }),
  (req, res) => {
    res.setHeader('x-auth-token', req.user.token);
    res.status(200).redirect('/');
  }); */

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

// Stack Overflow data pulling Microservice
gateway.use('/search/userId', (req, res) => {
  axios({
    method: req.method,
    url: 'https://so-answer-search-tonedev.herokuapp.com',
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
