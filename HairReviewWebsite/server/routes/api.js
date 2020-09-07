const express = require('express');
const router = express.Router();
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
/* GET api listing. */
router.get('/', (req, res) => {
 res.send('api works');
});


const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

var db;
MongoClient.connect('mongodb+srv://test1:testone1@cluster0-f9u8s.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err);
    db = database.db('hairproductreview');
});

// get profile
router.route('/users').get(function(req, res) {
    db.collection('Users').find().toArray( (err, results) =>
   {res.send(results)});
});


//DISPLAY HAIR PRODUCT

// get all hair styling products
router.route('/hairgel').get(function(req, res) {
    db.collection('HairProduct').find().toArray( (err, results) =>
   {res.send(results)});
});
// get specific hair styling products
router.route('/hairgels/:_id').get(function(req, res) {
    db.collection('HairProduct').findOne( {"_id": ObjectId(req.params._id)}, (err,
   results) => {
   res.send(results);
   });
});

// get all shampoo products
router.route('/hairshampoo').get(function(req, res) {
    db.collection('HairShampoo').find().toArray( (err, results) =>
   {res.send(results)});
});
// get specific shampoo products
router.route('/hairshampoo/:_id').get(function(req, res) {
    db.collection('HairShampoo').findOne( {"_id": ObjectId(req.params._id)}, (err,
   results) => {
   res.send(results);
   });
});

// get all other hair products
router.route('/hairothers').get(function(req, res) {
    db.collection('HairOthers').find().toArray( (err, results) =>
   {res.send(results)});
});
// get specific other hair products
router.route('/hairothers/:_id').get(function(req, res) {
    db.collection('HairOthers').findOne( {"_id": ObjectId(req.params._id)}, (err,
    results) => {
        res.send(results);
    });
});

// upvote product based on hair gel
router.route('/upvoteProduct/:_id').put(function(req, res) {
    db.collection('HairProduct').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
    res.send(results);
    console.log("node has been updated");
   });
});
// upvote product based on hair shampoo
router.route('/upvoteShampoo/:_id').put(function(req, res) {
    db.collection('HairShampoo').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
    res.send(results);
    console.log("node has been updated");
   });
});
// upvote product based on hair others
router.route('/upvoteOthers/:_id').put(function(req, res) {
    db.collection('HairOthers').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
    res.send(results);
    console.log("node has been updated");
   });
});

// downvote hair styling products
router.route('/downvoteProduct/:_id').put(function(req, res) {
    db.collection('HairProduct').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
    res.send(results);
    console.log("node has been downvoted");
   });
});
// downvote shampoo products
router.route('/downvoteShampoo/:_id').put(function(req, res) {
    db.collection('HairShampoo').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
    res.send(results);
    console.log("node has been downvoted");
   });
});
// downvote other hair products
router.route('/downvoteOthers/:_id').put(function(req, res) {
    db.collection('HairOthers').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
    res.send(results);
    console.log("node has been downvoted");
   });
});


//COMMENT FUNCTIONS:

// get all comments
router.route('/quote').get(function(req, res) {
    db.collection('c0mments').find().toArray( (err, results) =>
   {res.send(results)});
});

// get all comments for the product
router.route('/quotes/:ProductId').get(function(req, res) {
    db.collection('c0mments').findOne( {"ProductId": req.params.ProductId}, (err, results) => {
        res.send(results);
    });
});

// insert new comments
router.route('/quoteinsert').post(function (req, res) {
    db.collection('c0mments').insertOne(req.body, (err, results) => {
        if (err) return console.log(err);
        console.log('comment has been saved to database');
        res.send(results);
 });
});
// delete comments based on id
router.route('/quote/:_id').delete(function(req, res) {
    db.collection('c0mments').deleteOne( {"_id": ObjectId(req.params._id)}, (err,
   results) => {
   res.send(results);
   console.log('comment has been deleted');
   });
});



//POST UPVOTING:

// uppvote post based on id
router.route('/postupvote/:_id').put(function(req, res) {
    db.collection('HairProduct').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
    res.send(results);
    console.log("node has been updated");
   });
});

// downvote quantity post based on id
router.route('/postdownvote/:_id').put(function(req, res) {
    db.collection('HairProduct').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
    res.send(results);
    console.log("node has been updated");
   });
});



//FAVOURITES:

//view Favourites
router.route('/favourites').get(function(req, res) {
    db.collection('Favourites').find().toArray( (err, results) =>
   {res.send(results)});
});

// insert new favourites
router.route('/favouritesadd').post(function (req, res) {
    db.collection('Favourites').insertOne(req.body, (err, results) => {
        if (err) return console.log(err);
        console.log('saved to database');
        res.send(results);
 });
});

// delete favourites based on id
router.route('/favourites/:_id').delete(function(req, res) {
    db.collection('Favourites').deleteOne( {"_id": ObjectId(req.params._id)}, (err,
   results) => {
   res.send(results);
   });
});



//USER PACKAGE:

//authenticate user
router.route('/authuser').post(function(req, res2) {
    var username = req.body.username;
     var password = req.body.password;
    db.collection('Users').findOne({"username": username}, { password: 1, email: 1,
    _id: 0 }, function(err, result) {
        if (result == null)
        res2.send([{"auth": false}]);
        else {
            bcrypt.compare(password, result.password, function(err, res) {
            if(err || res == false) {
                res2.send([{"auth": false}]);
            } else {
                res2.send([{"auth": true, "role": result.role}]);
            }
            });
        }
    });
});

//register user
router.route('/reguser').post(function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function(err, hash) {
        db.collection('Users').insertOne({"username" : username, "password" : hash,
        "email" : email, "role": "user" }, (err, result) => {

        if (err) return console.log(err)
            console.log('user has been registered')
            res.send(result);
        });
    });
})


// get all user (match for existing user)
router.route('/getuser').get(function(req, res) {
    db.collection('Users').find().toArray( (err, results) =>
       {res.send(results)});
});
// get specific user (profilepage)
router.route('/getuser111/:username').get(function(req, res) {
    var fuckthisshit = req.params.username;
    console.log (fuckthisshit);
    db.collection('Users').findOne( {"username": fuckthisshit}, (err,
   results) => {
   res.send(results);
   });
});

// update password based on username
router.route('/updatepassword').put(function(req, res) {
    var username1 = req.body.username;
    var password1 = req.body.password;
    console.log(username1 + " " + password1);
    bcrypt.hash(password1, BCRYPT_SALT_ROUNDS, function(err, hash) {
        db.collection('Users').update( {"username": username1}, {
            $set: {"password": hash} }, (err, results) => {

        if (err) return console.log(err)
            console.log("node has been updated");
            res.send(results);
        });
    });
});


module.exports = router;