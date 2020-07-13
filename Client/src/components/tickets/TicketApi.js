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

export const getTicketById = async (id, token, signal) => {
	try {
		const response = await fetch(`${API_SERVER_URL}/tickets/find-id/${id}`, {
			signal: signal,
			method: "GET",
			contentType: "application/json",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

export const findTicketsbyEmail = async (email, token, signal) => {
	try {
		const response = await fetch(
			`${API_SERVER_URL}/tickets/user-list/${email}`,
			{
				signal: signal,
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			}
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

const getAllTickets = async (signal, token) => {
	fetch(`${API_SERVER_URL}/tickets/list-all`, {
		signal: signal,
		method: "GET",
		contentType: "application/json",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.then((responseData) => {
			// setTickets(responseData);
		})
		.catch((err) => {
			console.log("error at fetching: ", err);
		});
};
