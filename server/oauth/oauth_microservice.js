const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/github', passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    const { username, token } = req.session.passport.user;
    res.cookie('username', username);
    res.cookie('token', token);
    res.redirect('/home');
  });

module.exports = router;
