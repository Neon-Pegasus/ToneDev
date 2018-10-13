/* exports.logInChecker = req => new Promise((resolve, reject) => {
  if (!req.cookies.token) {
    const err = new Error('Please Login again');
    err.shouldRedirect = true;
    reject(err);
  }
  resolve();
}); */

exports.logInChecker = (req, res, next) => {
  if (!req.cookies.token) {
    res.send('Please Login again');
  }
  next();
};
