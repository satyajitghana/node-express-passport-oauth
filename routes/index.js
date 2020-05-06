var express = require('express');
var router = express.Router();

const api_url = '/api/v1/auth'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    page: req.url,
    title: 'Express'
  });
});

router.get('/login', function (req, res, next) {
  res.render('login', {
    api_url: api_url,
    page: req.url,
    title: 'Login'
  });
});

router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

router.get('/dashboard', require('connect-ensure-login').ensureLoggedIn(), function (req, res, next) {
  console.log(req.user);
  res.render('dashboard', {
    user: req.user,
    page: req.url,
    title: 'Dashboard'
  });
});

module.exports = router;