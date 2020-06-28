import React, { useState } from "react";

const TicketSearchBar = (props) => {
	const [search, setSearch] = useState({ criteria: "createdBy", query: "" });

	const handleSearchClick = (e) => {
		e.preventDefault();
		props.onClick(search.criteria, search.query);
	};
	return (
		<div className="ticket-search-bar">
			<form onSubmit={handleSearchClick}>
				<div className="row input-row">
					<div className="form-group">
						<label htmlFor="subjectInput">Search</label>
						<input
							type="text"
							className="form-control"
							id="searchInput"
							placeholder="Search"
							onChange={(e) => setSearch({ ...search, query: e.target.value })}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="ticketSearchBarSelect">Search By:</label>
						<select
							className="form-control"
							id="ticketSearchBarSelect"
							onChange={(e) =>
								setSearch({ ...search, criteria: e.target.value })
							}
						>
							<option value="createdBy">CreatedBy</option>
							<option value="category">Category</option>
							<option value="priority">Priority</option>
							<option value="status">Status</option>
							<option value="title">Title</option>
							<option value="description">Description</option>
						</select>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TicketSearchBar;
