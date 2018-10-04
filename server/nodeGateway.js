const express = require('express');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 4000;

const gateway = express();

gateway.use(express.static(path.join(__dirname, '../client/dist')));
gateway.use(bodyParser.json());
gateway.use(bodyParser.urlencoded({ extended: true }));

gateway.listen(port, () => console.log(`gateway server listening on ${port}`));

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
