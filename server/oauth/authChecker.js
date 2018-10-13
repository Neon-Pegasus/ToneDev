exports.logInChecker = req => new Promise((resolve, reject) => {
  if (!req.cookies.token) {
    reject(new Error('Please Login again'));
  }
  resolve();
});
