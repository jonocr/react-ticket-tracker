const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;
export const getAllTicketsDynamicQuery = async (
	criteria,
	query,
	token,
	signal
) => {
	try {
		const response = await fetch(
			`${API_SERVER_URL}/tickets/tickets-criteria/${criteria}/${query}`,
			{
				signal: signal,
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

export const addTicketComment = async (
	ticketId,
	comment,
	email,
	token,
	ticketCreator
) => {
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
			ticketCreator: ticketCreator,
		}),
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
};

export const checkViewedMsg = async (ticketId, email, token, ticketCreator) => {
	fetch(`${API_SERVER_URL}/tickets/check-messages-viewed`, {
		method: "PATCH",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			ticketId: ticketId,
			email: email,
			ticketCreator: ticketCreator,
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

export const getMessagesTotal = async (email, department, token) => {
	try {
		const response = await fetch(
			`${API_SERVER_URL}/tickets/get-total-new-messages/`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					department: department,
					token: token,
				}),
			}
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

export const getTicketsTotal = async (email, department, token, signal) => {
	try {
		const response = await fetch(
			`${API_SERVER_URL}/tickets/get-total-tickets/`,
			{
				signal: signal,
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					department: department,
					token: token,
				}),
			}
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

export const getOpenCloseTicketsTotal = async (
	email,
	department,
	open,
	token,
	signal
) => {
	try {
		const response = await fetch(
			`${API_SERVER_URL}/tickets/get-total-open-close-tickets/`,
			{
				signal: signal,
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					department: department,
					open: open,
					token: token,
				}),
			}
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

export const getTicketCommentsTotal = async (email, token, signal) => {
	try {
		const response = await fetch(
			`${API_SERVER_URL}/tickets/get-total-ticket-comments/`,
			{
				signal: signal,
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					token: token,
				}),
			}
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

export const findTicketsQuery = async (criteria, query, token, signal) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_SERVER_URL}/tickets/tickets-criteria/${criteria}/${query}`,
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

export const getAllTickets = async (token, signal) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_SERVER_URL}/tickets/list-all`,
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
