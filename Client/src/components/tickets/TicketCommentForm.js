import React, { useState } from "react";

const TicketCommentForm = (props) => {
	const [comment, setComment] = useState("");
	const clickHandle = (e) => {
		e.preventDefault();
		props.onSubmit(comment);
		setComment("");
		props.closeModal();
	};
	return (
		<div className="ticket-comment-form">
			<form onSubmit={clickHandle}>
				<div className="form-group">
					<textarea
						className="form-control"
						id="commentTextArea"
						rows="3"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					></textarea>
				</div>
				<div className="form-group row submit-button">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Add Comment
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TicketCommentForm;
