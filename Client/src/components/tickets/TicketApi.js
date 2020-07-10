import React from "react";
//REACT_APP_API_SERVER_URL
const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;
export const getAllTicketsDynamicQuery = async (criteria, query, signal) => {
	try {
		const response = await fetch(
			`${API_SERVER_URL}/tickets/tickets-criteria/${criteria}/${query}`,
			{ signal: signal }
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

export const addTicketComment = async (ticketId, comment, email, token) => {
	console.log("Ticket API env: ", process.env.REACT_APP_API_SERVER_URL);
	fetch(`${API_SERVER_URL}/tickets/add-comment`, {
		method: "PATCH",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			ticketId: ticketId,
			comment: comment,
			email: email,
		}),
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
};
