import React from "react";

const TicketComments = (props) => {
	const renderComment = () => {
		console.log("Comments List: ", props.data[0]);
		return (
			<div className="collapse" id="collapseExample">
				{props.data.map((comment, index) => (
					<div className="card card-body" key={index}>
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
		);
	};
	return <div className="comments-list">{renderComment()}</div>;
};

export default TicketComments;
