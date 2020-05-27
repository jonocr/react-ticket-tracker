const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		userName: {
			type: String,
			required: true,
			minlength: 4,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			minlength: 4,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		roles: {
			type: Array,
			default: [],
		},
		isManager: {
			type: Boolean,
		},
		team: {
			type: Array,
			default: [],
		},
		isEmployee: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
