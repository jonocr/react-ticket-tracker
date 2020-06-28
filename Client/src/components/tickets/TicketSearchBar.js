import React, { useState } from "react";

const TicketSearchBar = (props) => {
	const [search, setSearch] = useState({});

	const handleSearchClick = (e) => {
		e.preventDefault();
		props.onClick(search);
	};
	return (
		<div>
			<form onSubmit={handleSearchClick}>
				<div className="form-group">
					<label htmlFor="subjectInput">Search</label>
					<input
						type="text"
						className="form-control"
						id="searchInput"
						placeholder="Search"
						onChange={(e) =>
							setSearch({ ...search, searchValue: e.target.value })
						}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="exampleFormControlSelect1">Search By:</label>
					<select
						className="form-control"
						id="exampleFormControlSelect1"
						onChange={(e) => setSearch({ ...search, criteria: e.target.value })}
					>
						<option>CreatedBy</option>
						<option>Category</option>
						<option>Priority</option>
						<option>Status</option>
						<option>Title</option>
						<option>Description</option>
					</select>
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
