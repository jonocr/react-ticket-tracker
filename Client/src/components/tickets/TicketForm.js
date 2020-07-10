import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../utils/AuthContext";
import AutoComplete from "../utils/AutoComplete";
import Modal from "../layout/Modal";
import TicketCommentForm from "../tickets/TicketCommentForm";
import TicketComments from "../tickets/TicketComments";
import { findManyUsersByEmail } from "../users/UserApi";
import { addTicketComment } from "../tickets/TicketApi";

const TicketForm = (props) => {
	const abortController = new AbortController();
	const signal = abortController.signal;
	const { userData } = useContext(AuthContext);
	const [loading, seLoading] = useState(true);
	const [editTicket, setEditTicket] = useState(false);
	const [userSearchBar, SetUserSearchBar] = useState();
	const [usersFound, setUsersFound] = useState([]);
	const [ticket, SetTicket] = useState({
		status: "open",
		priority: 3,
		createdBy: userData.user.email,
		assignedTo: "",
		assignedBy: "",
		comment: [],
	});

	useEffect(() => {
		//REACT_APP_API_SERVER_URL:http://localhost:8000
		console.log("Ticket FORM env: ", process.env);
		if (props.data && JSON.stringify(props.data) !== JSON.stringify({})) {
			SetTicket(props.data);
			setEditTicket(true);
		}
		seLoading(false);
	}, []);

	useEffect(() => {
		if (userSearchBar !== undefined) {
			findManyUsersByEmail(userSearchBar, signal).then((response) => {
				if (response !== undefined) {
					setUsersFound(
						response.map((user, index) => {
							if (user.department !== "Client") {
								return {
									value: user.email,
									id: user.email,
									index: index,
								};
							} else {
								return false;
							}
						})
					);
				}
			});
		}

		return function cleanup() {
			abortController.abort();
		};
	}, [userSearchBar]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.clickHandle(ticket);
	};

	const searchAgent = (email) => {
		SetUserSearchBar(email);
	};

	const addComment = (comment) => {
		addTicketComment(ticket._id, comment, userData.user.email, userData.token);
	};

	const renderAdmin = () => {
		return (
			<div>
				<div className="row">
					<div className="form-group col col-md-3">
						<label htmlFor="createdByInput">Assigned To</label>
						<AutoComplete
							items={usersFound}
							search={searchAgent}
							defaultValue={ticket.assignedTo}
							onChange={(email) =>
								SetTicket({
									...ticket,
									assignedTo: email,
									assignedBy: userData.user.email,
								})
							}
						></AutoComplete>
					</div>
					<div className="form-group col col-md-3">
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
					<div className="form-group col col-md-3">
						<label htmlFor="prioritySelect">Priority</label>
						<select
							className="form-control"
							id="prioritySelect"
							value={ticket.priority}
							onChange={(e) =>
								SetTicket({ ...ticket, priority: e.target.value })
							}
						>
							<option value="1">Low</option>
							<option value="2">Medium</option>
							<option value="3">High</option>
						</select>
					</div>

					<div className="form-group col col-md-3">
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
			</div>
		);
	};

	const renderAdminComments = () => {
		return (
			<Modal
				component={<TicketCommentForm onSubmit={addComment} />}
				title={"Comment"}
				openText={"Add A Comment"}
			></Modal>
		);
	};

	const loadPage = () => {
		return (
			<div>
				<form onSubmit={handleSubmit}>
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
							onChange={(e) =>
								SetTicket({ ...ticket, category: e.target.value })
							}
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
						<label htmlFor="descriptionTextArea">
							Description of the Issue
						</label>
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
				<div className="container">
					<div className="row">
						<button
							className="btn btn-primary"
							type="button"
							data-toggle="collapse"
							data-target="#collapseExample"
							aria-expanded="false"
							aria-controls="collapseExample"
						>
							Show Comments
						</button>
						{userData.user.department !== "Client" && renderAdminComments()}
					</div>
				</div>
				<TicketComments data={ticket.comments}></TicketComments>
			</div>
		);
	};

	return <div>{!loading && loadPage()}</div>;
};

export default TicketForm;
