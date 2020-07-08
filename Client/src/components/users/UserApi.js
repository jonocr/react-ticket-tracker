export const findManyUsersByEmail = async (email, signal) => {
	try {
		const response = await fetch(
			`http://localhost:8000/users/find-users-email/${email}`,
			{ signal: signal }
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};
