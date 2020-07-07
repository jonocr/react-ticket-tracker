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
		<form onSubmit={clickHandle}>
			<div className="form-group">
				<textarea class="form-control" id="commentTextArea" rows="3"></textarea>
				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Add Comment
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default TicketCommentForm;
