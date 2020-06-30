const router = require("express").Router();
const Ticket = require("../models/ticket.model");
const checkAuth = require("../utils/check-auth");

router.route("/create").post(checkAuth, (req, res) => {
	let today = new Date();
	let dueDate = new Date();
	dueDate.setDate(today.getDate() + 5);

	const data = req.body;
	const createdBy = data.createdBy;
	const title = data.title;
	const description = data.description;
	const status = data.status;
	const priority = Number(data.priority);
	const category = data.category;
	const lastModified = today;

	const newTicket = new Ticket({
		title,
		description,
		status,
		lastModified,
		priority,
		category,
		createdBy,
		dueDate,
	});

	newTicket
		.save()
		.then(() => res.json("Ticket created!"))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/update").patch((req, res) => {
	const errorEmailMessage = "There was an error finding this ticket";
	const data = req.body;
	const createdBy = data.createdBy;
	const title = data.title;
	const description = data.description;
	const status = data.status;
	const priority = Number(data.priority);
	const category = data.category;
	const lastModified = new Date();
	const _id = data._id;

	let updatedTicket = new Ticket({
		title,
		description,
		status,
		lastModified,
		priority,
		category,
		createdBy,
		dueDate,
	});
	Ticket.findOne({ _id: _id })
		.exec()
		.then((ticket) => {
			if (ticket.length <= 0) {
				res.status(409).json({
					error: errorEmailMessage,
				});
			} else {
				console.log("update route ticket: ", updatedTicket);
				// Ticket.updateOne(
				// 	{
				// 		_id: _id,
				// 	},
				// 	{
				// 		$set: updatedUser,
				// 		$currentDate: { lastModified: true },
				// 	}
				// )
				// 	.then(() => res.json("User updated!"))
				// 	.catch((err) => res.status(400).json(`Error: ${err}`));
			}
		});
});

router.route("/list-all").get((req, res) => {
	Ticket.find()
		.then((tickets) => res.json(tickets))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/find-id/:ticketId").get(checkAuth, (req, res) => {
	const ticketId = req.params.ticketId;
	Ticket.find({ _id: ticketId })
		.then((tickets) => res.json(tickets))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/user-list/:email").get((req, res) => {
	const email = req.params.email;
	Ticket.find({ createdBy: email })
		.then((tickets) => res.json(tickets))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/tickets-criteria/:criteria/:query").get((req, res) => {
	const criteria = req.params.criteria;
	const query = req.params.query;
	const queryOptionsObj = { $regex: query, $options: "i" };
	const queryObj = {};
	queryObj[criteria] = queryOptionsObj;
	Ticket.find(queryObj)
		.then((tickets) => res.json(tickets))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
