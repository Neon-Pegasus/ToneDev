module.exports = {
  env: {
      "node": true,
      "es6": true,
      "browser": true,
  },
  extends: ["airbnb"],
  parserOptions: {
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  rules: {
      "no-underscore-dangle": "off"
  },
};
