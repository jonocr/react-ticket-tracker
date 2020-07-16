import React, { useContext } from "react";
import USFlag from "../../images/flags/svg/us.svg";
import AuthContext from "../utils/AuthContext";
import { Link } from "react-router-dom";

const TopBar = (props) => {
	const { userData } = useContext(AuthContext);
	const newMsgUrl =
		userData.user.department === "Client" ? "my-tickets" : "my-cases";

	return (
		<header className={props.css}>
			<a
				href="/#"
				className="toggle-menu"
				onClick={(e) => {
					e.preventDefault();
					props.onClick(e);
				}}
			>
				<svg
					className="bi bi-grid-1x2"
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9h-5v5h5v-5zM0 1a1 1 0 011-1h5a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1zm9 0a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1zm1 8a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1h-5z"
						clipRule="evenodd"
					/>
				</svg>
			</a>
			<div className="top-bar">
				{/* TODO**** Future Funtionality *****
				<a href="/#">
					<svg
						className="bi bi-search"
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
							clipRule="evenodd"
						/>
						<path
							fillRule="evenodd"
							d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
							clipRule="evenodd"
						/>
					</svg>
				</a>
				<a href="/#">
					<svg
						className="bi bi-bell"
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M8 16a2 2 0 002-2H6a2 2 0 002 2z" />
						<path
							fillRule="evenodd"
							d="M8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z"
							clipRule="evenodd"
						/>
					</svg>
				</a> */}
				<Link to={newMsgUrl}>
					<svg
						className="bi bi-envelope"
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
							clipRule="evenodd"
						/>
						<path
							fillRule="evenodd"
							d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
							clipRule="evenodd"
						/>
						<path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
					</svg>
					{userData.user.msg > 0 && (
						<span className="badge badge-pill badge-danger">
							{userData.user.msg}
						</span>
					)}
				</Link>
				<div className="profile-icons">
					Hi {userData.user.userName}
					<img src={USFlag} className="flag"></img>
					<a href="/#" className="profile-pic-icon">
						<svg
							className="bi bi-people-circle"
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
							<path
								fillRule="evenodd"
								d="M8 9a3 3 0 100-6 3 3 0 000 6z"
								clipRule="evenodd"
							/>
							<path
								fillRule="evenodd"
								d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</header>
	);
};

export default TopBar;
