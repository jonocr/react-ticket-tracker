const router = require("express").Router();
const Ticket = require("../models/ticket.model");
const checkAuth = require("../utils/check-auth");
const mongoose = require("mongoose");

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
		_id: new mongoose.Types.ObjectId(),
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
		.catch((err) => {
			console.log("ERROR: ", err);
			res.status(400).json(`Error: ${err}`);
		});
});

router.route("/update").patch(checkAuth, (req, res) => {
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
	const dueDate = data.dueDate;
	const assignedTo = data.assignedTo;
	const assignedBy = data.assignedBy;

	let updatedTicket = new Ticket({
		title,
		description,
		status,
		lastModified,
		priority,
		category,
		createdBy,
		dueDate,
		assignedTo,
		assignedBy,
	});
	Ticket.findOne({ _id: _id })
		.exec()
		.then((ticket) => {
			if (ticket.length <= 0) {
				res.status(409).json({
					error: errorEmailMessage,
				});
			} else {
				Ticket.updateOne(
					{
						_id: _id,
					},
					{
						$set: updatedTicket,
					}
				)
					.then(() => res.json("Ticket updated!"))
					.catch((err) => res.status(400).json(`Error: ${err}`));
			}
		});
});

router.route("/add-comment").patch(checkAuth, (req, res) => {
	const errorEmailMessage = "There was an error finding this ticket";
	const data = req.body;
	const _id = data.ticketId;
	const email = data.email;
	const text = data.comment;
	const lastModified = new Date();

	const comment = {
		email: email,
		comment: text,
		lastModified: lastModified,
	};
	Ticket.updateOne(
		{
			_id: _id,
		},
		{
			$push: {
				comments: { email: email, comment: text, lastModified: lastModified },
			},
		}
	)
		.then(() => res.json("Ticket updated!"))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/list-all").get(checkAuth, (req, res) => {
	Ticket.find()
		.then((tickets) => res.json(tickets))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/find-id/:ticketId").get(checkAuth, (req, res) => {
	const ticketId = req.params.ticketId;
	Ticket.findOne({ _id: ticketId })
		.then((tickets) => res.json(tickets))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/user-list/:email").get(checkAuth, (req, res) => {
	const email = req.params.email;
	Ticket.find({ createdBy: email })
		.then((tickets) => res.json(tickets))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router
	.route("/tickets-criteria/:criteria/:query")
	.get(checkAuth, (req, res) => {
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
