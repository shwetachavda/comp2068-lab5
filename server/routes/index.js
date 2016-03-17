"use strict";
var express = require('express');
var router = express.Router();
// db references
var User = require('../models/user');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET product page. */
router.get('/products', function (req, res, next) {
    res.render('index', { title: 'Products' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    router.get('/contact', function (req, res, next) {
    req.flash('successmessage', 'Thank You. Your message has been sent.');
    req.flash('errormessage', 'An Error has occurred.');
    res.render('contact', { title: 'Contact', messages: null });
});
/* Email processing */
router.post('/contact', function (req, res, next) {
    sendgrid.send({
        to: 'tsiliopoulos@hotmail.com',
        from: req.body.email,
        subject: 'Contact Form Submission',
        text: "This message has been sent from the contact form at [MongoDB Demo]\r\n\r\n" +
            "Name: " + req.body.name + "\r\n\r\n" +
            "Phone: " + req.body.phone + "\r\n\r\n" +
            req.body.message,
        html: "This message has been sent from the contact form at [MongoDB Demo]<br><br>" +
            "<strong>Name:</strong> " + req.body.name + "<br><br>" +
            "<strong>Phone:</strong> " + req.body.phone + "<br><br>" +
            req.body.message
    }, function (err, json) {
        if (err) {
            res.status(500).json('error');
        }
        res.render('contact', {
            title: 'Contact',
            messages: req.flash('successmessage')
        });
    });
});
module.exports = router;

//# sourceMappingURL=index.js.map
