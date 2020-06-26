import React from "react";

const TicketList = (props) => {
	return (
		<div>
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
							<td>{ticket.title}</td>
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
