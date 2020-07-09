import React from "react";

const TicketComments = (props) => {
	return (
		<div>
			<div className="collapse" id="collapseExample">
				{props.data.map((comment, index) => (
					<div className="card card-body">
						<p>{comment.email}</p>
						<p>{comment.comment}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TicketComments;
