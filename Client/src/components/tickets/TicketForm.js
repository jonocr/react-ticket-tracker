import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../utils/AuthContext";
import AutoComplete from "../utils/AutoComplete";

const TicketForm = (props) => {
	const { userData } = useContext(AuthContext);
	const [editTicket, setEditTicket] = useState(false);
	const [ticket, SetTicket] = useState({
		status: "open",
		priority: 3,
		createdBy: userData.user.email,
	});

	const handleCreateClick = (e) => {
		e.preventDefault();
		props.clickHandle(ticket);
	};

	const searchAgent = (email) => {
		console.log(email);
	};

	const renderAdmin = () => {
		return (
			<div>
				<div className="form-group">
					<AutoComplete
						items={["j@gmail.com", "g@g.com", "p@p.com", "carlos@p.com"]}
						search={searchAgent}
					></AutoComplete>
				</div>
				<div className="form-group">
					<label htmlFor="createdByInput">Created By</label>
					<input
						type="text"
						className="form-control"
						id="createdByInput"
						placeholder="Title of the Issue"
						value={ticket.createdBy}
						readOnly
					/>
				</div>
				<div className="form-group">
					<label htmlFor="prioritySelect">Priority</label>
					<select
						className="form-control"
						id="prioritySelect"
						value={ticket.priority}
						onChange={(e) => SetTicket({ ...ticket, priority: e.target.value })}
					>
						<option value="1">Low</option>
						<option value="2">Medium</option>
						<option value="3">High</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="statusSelect">Status</label>
					<select
						className="form-control"
						id="statusSelect"
						value={ticket.status}
						onChange={(e) => SetTicket({ ...ticket, status: e.target.value })}
					>
						<option value="open">Open</option>
						<option value="close">Close</option>
					</select>
				</div>
			</div>
		);
	};

	useEffect(() => {
		console.log("Ticket Form props: ", props.data);
		if (props.data && JSON.stringify(props.data) !== JSON.stringify({})) {
			SetTicket(props.data);
			setEditTicket(true);
		}
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
						value={ticket.title}
						onChange={(e) => SetTicket({ ...ticket, title: e.target.value })}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="categorySelect">Category</label>
					<select
						className="form-control"
						id="categorySelect"
						value={ticket.category}
						onChange={(e) => SetTicket({ ...ticket, category: e.target.value })}
					>
						<option>IT</option>
						<option>Billing</option>
						<option>Development</option>
						<option>Sales</option>
						<option>Other</option>
					</select>
				</div>

				{userData.user.department !== "Client" && renderAdmin()}

				<div className="form-group">
					<label htmlFor="descriptionTextArea">Description of the Issue</label>
					<textarea
						className="form-control"
						id="descriptionTextArea"
						rows="3"
						value={ticket.description}
						readOnly={!!editTicket}
						onChange={(e) =>
							SetTicket({ ...ticket, description: e.target.value })
						}
					></textarea>
				</div>
				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							{props.buttonText}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TicketForm;
