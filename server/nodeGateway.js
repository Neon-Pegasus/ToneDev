const express = require('express');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const { logInChecker } = require('./oauth/authChecker');
const authRouter = require('./oauth/oauth_microservice');

const port = process.env.PORT || 8888;

const gateway = express();

gateway.use(express.static(path.join(__dirname, '../client/dist')));
gateway.use(bodyParser.json());
gateway.use(bodyParser.urlencoded({ extended: true }));
gateway.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
gateway.use(cookieParser());

//  authentication
require('./oauth/oauth_passport');

gateway.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // 24 hrs
  keys: [process.env.COOKIE_KEY],
}));
gateway.use(passport.initialize());
gateway.use(passport.session());
gateway.use('/auth', authRouter);


// Stack Overflow data pulling Microservice
gateway.use('/api/user/so', logInChecker, (req, res) => {
  axios({
    method: req.method,
    url: 'https://so-answer-search-tonedev.herokuapp.com/api/user/so',
    headers: { 'Content-type': 'application/json' },
    params: req.query,
    body: req.body,
  })
    .then((data) => {
      const { username, answers } = data.data;
      return axios.post('https://tonedev-user-ibm.herokuapp.com', {
        username,
        SOAnswers: answers,
      });
    })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

//  IBM watson organization microservice
gateway.use('/api/gateway/org/sentiment', (req, res) => {
  axios({
    method: req.method,
    url: 'https://tonedev-micro-sentiment.herokuapp.com',
    data: req.body,
    headers: { 'Content-type': 'application/json' },
  })
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

// ORG NAMES route to Github Microservice
gateway.use('/api/gateway/github/orglist', (req, res) => {
  axios({
    method: req.method,
    url: 'https://tondev-micro-github.herokuapp.com/api/gateway/github/orglist',
    headers: { 'Content-type': 'application/json' },
    params: req.params,
    body: req.body,
  })
    .then(((data) => {
      // console.log(data);
      res.send(data.data);
    }))
    .catch((err) => {
      res.send(err.message);
    });
});

// ORG DATA route to Github Microservice
gateway.use('/api/gateway/github/orgdata', (req, res) => {
  axios({
    method: req.method,
    url: 'https://tondev-micro-github.herokuapp.com/api/gateway/github/orgdata',
    headers: { 'Content-type': 'application/json' },
    params: req.params,
    body: req.body,
  })
    .then((data) => {
      // send post request to IBM Orgs microservice
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

// TODO: add more endpoints for user, update current github enpoint for orgs
gateway.use('/api/gateway/github/user/:username', logInChecker, (req, res) => {
  axios({
    method: 'GET',
    url: 'https://tondev-micro-github.herokuapp.com/api/gateway/github/user/repo/data',
    headers: { 'Content-type': 'application/json' },
    params: { username: '' },
  })
    .then((result) => {
    // axios request to Joanne's MS
      console.log(result);
    })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

// LoginChecker
gateway.get('/api/loginChecker', logInChecker, (req, res) => {
  res.send('LoggedIn');
});

// catch all
gateway.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

module.exports.gateway = gateway;
module.exports.port = port;
