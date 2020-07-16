const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
	{
		_id: {
			type: mongoose.Schema.Types.ObjectId,
		},
		title: {
			type: String,
			required: true,
			minlength: 5,
		},
		description: {
			type: String,
			required: true,
			minlength: 5,
		},
		status: {
			type: String,
			required: true,
		},
		lastModified: {
			type: Date,
			default: Date.now,
		},
		priority: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		createdBy: {
			type: String,
			required: true,
		},
		dueDate: {
			type: Date,
		},
		comments: {
			type: Array,
			default: [],
		},
		assignedTo: {
			type: String,
			default: "",
		},
		assignedBy: {
			type: String,
			default: "",
		},
		ClientMsg: {
			type: Number,
			required: true,
			default: 0,
		},
		AgentMsg: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
