exports.logInChecker = (req, res, next) => {
  if (!req.cookies.token) {
    res.send('Please Login again');
  } else {
    next();
  }
};
