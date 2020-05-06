var express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({
        message: "ZirconiumChat: you've reached the login endpoint"
    });
});

router.get('/facebook',
    passport.authenticate('facebook')
);

router.get('/return',
    passport.authenticate('facebook', {
        failureRedirect: '/login'
    }),
    function (req, res) {
        // console.log(req.user);
        res.redirect('/dashboard');
    });

module.exports = router;