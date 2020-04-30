const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch( err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    console.log("roles ", req.body);
    const data = req.body;
    const userName = data.username;
    const password = data.password;
    const roles = data.roles;
    const email = data.email;
    const manager = data.manager;
    const team = [];

    const newUser = new User({
        userName, password, email, roles, manager, team
    });

    newUser.save()
        .then( () => res.json('User registered!'))
        .catch( err => res.status(400).json(`Error: ${err}`));


});

module.exports = router;


// {
// 	"username" : "Jono",
// 	"password" : "12345",
// 	"roles" : ["developer"],
// 	"email" : "d@gmail.com",
// 	"manager" : ""
// }