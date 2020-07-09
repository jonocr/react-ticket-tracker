import React from "react";
var $ = require("jquery");

const Modal = (props) => {
	const clickClose = () => {
		console.log("closing tag...");
		window.$("#exampleModal").modal("toggle");
	};

	return (
		<div className="tracker-modal">
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
			>
				{props.openText}
			</button>

			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								{props.title}
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{React.cloneElement(props.component, {
								closeModal: clickClose,
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
