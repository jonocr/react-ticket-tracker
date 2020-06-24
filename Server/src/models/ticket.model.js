const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 10,
		},
		description: {
			type: String,
			required: true,
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
	},
	{
		timestamps: true,
	}
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
