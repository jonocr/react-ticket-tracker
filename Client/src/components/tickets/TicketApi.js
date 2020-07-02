export const getAllTicketsDynamicQuery = async (criteria, query) => {
	try {
		const response = await fetch(
			`http://localhost:8000/tickets/tickets-criteria/${criteria}/${query}`
		);
		console.log("tickets-criteria response: ", response.clone().json());
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};
