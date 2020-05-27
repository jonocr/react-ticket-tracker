const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

router.route("/").get((req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:email").get((req, res) => {
	const email = req.params.email;
	User.find({ email: email })
		.then((users) => {
			res.json(users);
		})
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/update").patch((req, res) => {
	res.status(200).json({
		message: "User Patched",
	});
	// const id = req.params.userId;
	// User.find()
	//     .then(users => res.json(users))
	//     .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/:userId").delete((req, res) => {
	res.status(200).json({
		message: "User Deleted",
	});
	// const id = req.params.userId;
	// User.find()
	//     .then(users => res.json(users))
	//     .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/signup").post((req, res, next) => {
	const errorEmailMessage = "Email address already registered in the system";
	const data = req.body;
	const userName = data.userName;
	const roles = data.roles;
	const email = data.email;
	const isManager = data.isManager;
	const team = data.team ? data.team : [];
	const department = data.department;

	User.find({ email: email })
		.exec()
		.then((user) => {
			if (user.length >= 1) {
				res.status(409).json({
					error: errorEmailMessage,
				});
			} else {
				bcrypt.hash(data.password, 10, (err, hash) => {
					if (err) {
						res.status(500).json({
							error: err,
						});
					} else {
						const password = hash;

						const newUser = new User({
							userName,
							email,
							password,
							department,
							roles,
							isManager,
							team,
						});

						newUser
							.save()
							.then(() => res.json("User registered!"))
							.catch((err) => res.status(400).json(`Error: ${err}`));
					}
				});
			}
		});
});

router.route("/login").post((req, res) => {
	const errorAuthMessage = "Auth failed";
	const successAuthMessage = "Auth successful";

	const failedAuth = () => {
		return res.status(401).json({
			message: errorAuthMessage,
		});
	};
	User.find({ email: req.body.email })
		.exec()
		.then((user) => {
			if (user.length < 1) {
				failedAuth();
			}
			bcrypt.compare(req.body.password, user[0].password, (err, result) => {
				if (err || !result) {
					failedAuth();
				}
				if (result) {
					return res.status(200).json({
						message: successAuthMessage,
					});
				}
				failedAuth();
			});
		})
		.catch((err) => res.status(500).json(`Error: ${err}`));
});

module.exports = router;

// {
// 	"username" : "jono" ,
// 	"password" : "12345",
// 	"roles" : ["developer"],
// 	"email" : "d@gmail.com",
// 	"manager" : ""
// }

// bcrypt.compare(data.password, hash).then(function (result) {
//     // result == true
//     console.log("compare correct: ", result);
// });
// bcrypt.compare("someOtherPlaintextPassword", hash).then(function (result) {
//     console.log("compare : ", result);
//     // result == false
// });
