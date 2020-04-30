const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:userId').get((req, res) => {
    const id = req.params.userId;
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/signup').post((req, res, next) => {
    const data = req.body;
    const userName = data.username;
    const password = data.password;
    const roles = data.roles;
    const email = data.email;
    const manager = data.manager;
    const team = [];


    bcrypt.hash(data.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        } else {
            console.log("hash passqord: ", hash);

            bcrypt.compare(data.password, hash).then(function(result) {
                // result == true
                console.log("compare correct: ", result);
            });
            bcrypt.compare("someOtherPlaintextPassword", hash).then(function(result) {
                console.log("compare : ", result);
                // result == false
            });
            
            const newUser = new User({
                userName, password, hash, roles, manager, team
            });

        }
    });


    // newUser.save()
    //     .then( () => res.json('User registered!'))
    //     .catch( err => res.status(400).json(`Error: ${err}`));


});

module.exports = router;


// {
// 	"username" : "Jono",
// 	"password" : "12345",
// 	"roles" : ["developer"],
// 	"email" : "d@gmail.com",
// 	"manager" : ""
// }