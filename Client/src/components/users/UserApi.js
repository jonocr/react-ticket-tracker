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
