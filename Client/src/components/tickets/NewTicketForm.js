import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../utils/AuthContext";

const NewTicketForm = (props) => {
	const { userData } = useContext(AuthContext);
	const [ticket, SetTicket] = useState({
		status: "open",
		priority: 3,
		createdBy: userData.user.email,
	});

	const handleCreateClick = (e) => {
		e.preventDefault();
		console.log("Creating new Ticket ***handleClick***: ", ticket);
		props.clickHandle(ticket);
	};

	useEffect(() => {
		console.log("Ticket Form props: ", props.data);
		// if (
		// 	props.userData &&
		// 	JSON.stringify(props.userData) !== JSON.stringify({})
		// ) {
		// 	setUser(props.userData);
		// }
	}, []);

	return (
		<div>
			<form onSubmit={handleCreateClick}>
				<div className="form-group">
					<label htmlFor="subjectInput">Subject</label>
					<input
						type="text"
						className="form-control"
						id="subjectInput"
						placeholder="Title of the Issue"
						onChange={(e) => SetTicket({ ...ticket, title: e.target.value })}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="exampleFormControlSelect1">Category</label>
					<select
						className="form-control"
						id="exampleFormControlSelect1"
						onChange={(e) => SetTicket({ ...ticket, category: e.target.value })}
					>
						<option>IT</option>
						<option>Billing</option>
						<option>Development</option>
						<option>Sales</option>
						<option>Other</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="descriptionTextArea">Description of the Issue</label>
					<textarea
						className="form-control"
						id="descriptionTextArea"
						rows="3"
						onChange={(e) =>
							SetTicket({ ...ticket, description: e.target.value })
						}
					></textarea>
				</div>
				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Create Ticket
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewTicketForm;
