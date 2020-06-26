import React, { useEffect, useState } from "react";

const TicketSearchPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [tickets, setTickets] = useState([]);

	useEffect(() => {
		setTickets(getAllTickets);
	}, []);

	const findUserByEmail = (email) => {
		fetch(`http://localhost:8000/users/${email}`)
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				setUser(responseData[0]);
				setTeamUsers(responseData[0].team);
				setLoading(false);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};

	const getAllTickets = async () => {
		fetch(`http://localhost:8000/users/`, {
			method: "GET",
			contentType: "application/json",
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				setAllUsers(responseData);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};
};

export default TicketSearchPage;
