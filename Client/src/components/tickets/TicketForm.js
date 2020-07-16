import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../utils/AuthContext";
import AutoComplete from "../utils/AutoComplete";
import Modal from "../layout/Modal";
import TicketCommentForm from "../tickets/TicketCommentForm";
import TicketComments from "../tickets/TicketComments";
import { findManyUsersByEmail } from "../users/UserApi";
import {
	addTicketComment,
	getTicketById,
	checkViewedMsg,
} from "../tickets/TicketApi";

import { getMessagesTotal } from "../tickets/TicketApi";

const TicketForm = (props) => {
	const abortController = new AbortController();
	const signal = abortController.signal;
	const { userData, setUserData } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [newComment, setNewComment] = useState(null);
	const [editTicket, setEditTicket] = useState(false);
	const [userSearchBar, SetUserSearchBar] = useState();
	const [usersFound, setUsersFound] = useState([]);
	const [ticket, SetTicket] = useState({
		status: "open",
		category: "IT",
		priority: 3,
		createdBy: userData.user.email,
		assignedTo: "",
		assignedBy: "",
		comments: [],
	});

	//Loads Ticket info for update or empty for new Ticket
	useEffect(() => {
		if (props.data && JSON.stringify(props.data) !== JSON.stringify({})) {
			SetTicket(props.data);
			setEditTicket(true);
		}
		setLoading(false);
		return function cleanup() {
			abortController.abort();
		};
		// eslint-disable-next-line
	}, []);

	//Reloads the ticket with new comments
	useEffect(() => {
		if (ticket._id !== undefined) {
			getTicketById(ticket._id, userData.token, signal).then((response) => {
				SetTicket(response);
			});
		}

		return function cleanup() {
			abortController.abort();
		};
		// eslint-disable-next-line
	}, [newComment]);

	//For AutoComplete User Bar
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
		// eslint-disable-next-line
	}, [userSearchBar]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submit Form Ticket: ", ticket);
		props.clickHandle(ticket);
	};

	const searchAgent = (email) => {
		SetUserSearchBar(email);
	};

	//Add new comment, increments by 1 messages for Client or Agent
	const addComment = (comment) => {
		addTicketComment(
			ticket._id,
			comment,
			userData.user.email,
			userData.token,
			ticket.createdBy
		);
		setNewComment(comment);
	};

	const checkUserMgsCount = () => {
		if (
			(ticket.AgentMsg > 0 && ticket.assignedTo === userData.user.email) ||
			(ticket.ClientMsg > 0 && ticket.createdBy === userData.user.email)
		) {
			checkViewedMsg(
				ticket._id,
				userData.user.email,
				userData.token,
				ticket.createdBy
			);
			//TODO Refresh Context
			getMessagesTotal(
				userData.user.email,
				userData.user.department,
				userData.token
			).then((res) => {
				const msgTotal = res.length > 0 ? res[0].total : 0;
				setUserData({
					...userData,
					user: { ...userData.user, msg: msgTotal },
				});
			});
		}
	};

	const renderSubmitBtn = () => {
		if (
			userData.user.department !== "Client" ||
			(userData.user.department === "Client" && !editTicket)
		) {
			return (
				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							{props.buttonText}
						</button>
					</div>
				</div>
			);
		}
	};

	const loadPage = () => {
		return (
			<div className="ticket-form">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="subjectInput">Subject</label>
						<input
							type="text"
							className="form-control"
							id="subjectInput"
							placeholder="Title of the Issue"
							readOnly={!!editTicket}
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
							disabled={!!editTicket && userData.user.department === "Client"}
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
					{renderSubmitBtn()}
				</form>
				{editTicket && (
					<div>
						<label className="comments-section-title">Comments</label>
						<div className="container comments">
							<div className="row">
								<button
									className="btn btn-primary"
									type="button"
									data-toggle="collapse"
									data-target="#collapseExample"
									aria-expanded="false"
									aria-controls="collapseExample"
									onClick={checkUserMgsCount}
								>
									Show Comments
								</button>

								<Modal
									component={<TicketCommentForm onSubmit={addComment} />}
									title={"Comment"}
									openText={"Add A Comment"}
								></Modal>
							</div>
						</div>
						<TicketComments data={ticket.comments}></TicketComments>
					</div>
				)}
			</div>
		);
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

	return <div>{!loading && loadPage()}</div>;
};

export default TicketForm;
