import React from "react";

const TicketList = (props) => {
	const renderNewCommentAlert = (ticket) => {
		if (
			(props.user === ticket.createdBy && ticket.ClientMsg > 0) ||
			(props.user === ticket.assignedTo && ticket.AgentMsg > 0)
		) {
			return (
				<svg
					width="1em"
					height="1em"
					viewBox="0 0 18 18"
					className="bi bi-chat-right-dots"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
					/>
					<path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
				</svg>
			);
		} else {
			return null;
		}
	};
	return (
		<div className="ticket-list">
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Subject</th>
						<th scope="col">Status</th>
						<th scope="col">Category</th>
					</tr>
				</thead>
				<tbody>
					{props.data.map((ticket, index) => (
						<tr
							key={index}
							onClick={(e) => {
								props.onClick(ticket);
							}}
						>
							<th scope="row">{index}</th>
							<td>
								{renderNewCommentAlert(ticket)}
								{ticket.title}
							</td>
							<td>{ticket.status}</td>
							<td>{ticket.category}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TicketList;
