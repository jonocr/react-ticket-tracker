import React from "react";

const TicketCommentForm = (props) => {
	const clickHandle = (e) => {
		e.preventDefault();
		const comment = e.target.commentTextArea.value;
		e.target.commentTextArea.value = "";
		props.onSubmit(comment);
		props.closeModal();
	};
	return (
		<div className="ticket-comment-form">
			<form onSubmit={clickHandle}>
				<div className="form-group">
					<textarea
						class="form-control"
						id="commentTextArea"
						rows="3"
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
