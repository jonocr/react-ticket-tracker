export const findManyUsersByEmail = async (email) => {
	try {
		const response = await fetch(
			`http://localhost:8000/users/find-users-email/${email}`
		);
		return response.json();
	} catch (err) {
		console.log("error at fetching: ", err);
	}
};
