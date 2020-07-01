import React, { useState } from "react";

const AutoComplete = (props) => {
	const logs = (text) => {
		// console.log(text);
		props.search(text);
	};
	return (
		<div>
			<input onChange={(e) => logs(e.target.value)}></input>
			<ul>
				{props.items.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default AutoComplete;
