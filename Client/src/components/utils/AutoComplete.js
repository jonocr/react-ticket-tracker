import React, { useState, useEffect } from "react";

const AutoComplete = (props) => {
	const [suggestions, setSuggestions] = useState([]);
	const [selectedItem, setSelectedItem] = useState();

	const logs = (text) => {
		props.search(text);
		setSelectedItem(text);
	};

	const itemSelectHandle = (item) => {
		setSuggestions([]);
		setSelectedItem(item.value);
		props.onChange(item.id);
	};

	useEffect(() => {
		setSuggestions(props.items);
	}, [props.items]);

	useEffect(() => {
		setSelectedItem(props.defaultValue);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="auto-complete-text">
			<input
				className="form-control"
				onChange={(e) => logs(e.target.value)}
				value={selectedItem}
			></input>
			<ul className={suggestions.length < 1 ? "d-none" : ""}>
				{suggestions.map((item) => (
					<li onClick={() => itemSelectHandle(item)} key={item.index}>
						{item.value}
					</li>
				))}
			</ul>
		</div>
	);
};

export default AutoComplete;
