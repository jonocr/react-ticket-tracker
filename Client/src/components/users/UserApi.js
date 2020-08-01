export const findManyUsersByEmail = async (email, signal) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_SERVER_URL}/users/find-users-email/${email}`,
			{ signal: signal }
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

export const login = async (user) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_SERVER_URL}/users/login`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(user),
			}
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};

export const loadUsers = async (token, signal) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_SERVER_URL}/users`,
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
