export const getAllTicketsDynamicQuery = async (criteria, query, signal) => {
	try {
		const response = await fetch(
			`http://localhost:8000/tickets/tickets-criteria/${criteria}/${query}`,
			{ signal: signal }
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

export const addTicketComment = async (ticketId, comment, email, token) => {
	fetch("http://localhost:8000/tickets/add-comment", {
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
