import React from "react";

const Modal = (props) => {
	const tagger = props.component;

	const clickClose = () => {
		console.log("closing tag...");
	};
	return (
		<div>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
			>
				Launch demo modal
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
							{/* {props.component} */}
							{React.cloneElement(props.component, {
								closeModal: clickClose,
							})}
							{/* <tagger /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
