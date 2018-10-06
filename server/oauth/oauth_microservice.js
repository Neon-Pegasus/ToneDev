const express = require('express');
const passport = require('passport');

const router = express.Router();
// passport.authenticate('github')

router.get('/github', passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    console.log(req.user);
    res.setHeader('x-auth-token', req.user.token);
    res.redirect('/');
  });

module.exports = router;
