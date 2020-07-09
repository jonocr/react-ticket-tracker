import React, { useState } from "react";

const Modal = (props) => {
	const [closeModalCss, setCloseModalCss] = useState("modal fade");
	const [ariaToggle, setAriaToggle] = useState(true);
	const [styleC, setStyleC] = useState({ display: "none" });
	const clickClose = () => {
		console.log("closing tag...");
		setCloseModalCss("modal fade");
	};
	//style="display: block; padding-right: 16px;"

	//close
	//style="display: none;"
	const clickToggle = () => {
		console.log("clickToggle");
		closeModalCss === "modal fade"
			? setCloseModalCss("modal fade show")
			: setCloseModalCss("modal fade");
		setAriaToggle(!ariaToggle);

		// styleC === { display: "none" }
		// 	? setStyleC({ display: "block", paddingRight: 16 })
		// 	: setStyleC({ display: "none" });
	};
	return (
		<div className="tracker-modal">
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
				// onClick={clickToggle}
			>
				{props.openText}
			</button>

			<div
				// className={closeModalCss}
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				// aria-hidden={ariaToggle}
				// aria-modal={!ariaToggle}
				// style={
				// 	ariaToggle
				// 		? { display: "none" }
				// 		: { display: "block", paddingRight: 16 }
				// }
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
