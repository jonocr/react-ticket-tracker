import React from "react";

const TicketComments = (props) => {
	return (
		<div className="comments-list">
			<div className="collapse" id="collapseExample">
				{props.data.map((comment, index) => (
					<div className="card card-body">
						{console.log("Comment: ", comment.lastModified.split("T")[1])}
						<div className="row comment-head">
							<div className="comment-author">
								<strong>Author:</strong>
								{comment.email}
							</div>
							<div className="comment-date">
								<strong>Date:</strong>
								{comment.lastModified.split("T")[0]}
								&nbsp;
								{comment.lastModified.split("T")[1].split(".")[0]}
							</div>
						</div>
						<div className="comment-text">{comment.comment}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TicketComments;
