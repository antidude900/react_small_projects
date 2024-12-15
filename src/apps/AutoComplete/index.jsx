import "./styles.css";
import { useEffect, useState } from "react";

export default function AutoComplete() {
	const [searchParam, setSearchParam] = useState("");
	const [users, setUsers] = useState([]);
	const [searched, setSearched] = useState(false);
	const [searchedUser, setSearchedUser] = useState(null);

	function handleSubmit() {
		setSearched(true);
		const user = users.filter(
			(user) =>
				`${user.firstName} ${user.lastName}`.toLowerCase() ===
				searchParam.toLowerCase()
		);
		setSearchedUser(user[0]);
	}

	async function fetchData() {
		const response = await fetch("https://dummyjson.com/users?limit=1000");
		const data = await response.json();
		setUsers(data.users);
	}

	useEffect(() => {
		fetchData();
		console.log("Fetching User");
	}, []);

	return (
		<div className="container">
			<div className="input_container">
				<input
					value={searchParam}
					placeholder="Enter userName"
					onChange={(event) => {
						setSearchParam(event.target.value);
						setSearched(false);
					}}
				/>
				<button onClick={handleSubmit}>Submit</button>
			</div>

			{searchParam !== "" &&
				searched !== true &&
				users.map((user) => {
					if (
						searchParam ===
						user.firstName.slice(0, searchParam.length).toLowerCase()
					) {
						const name = `${user.firstName} ${user.lastName}`;
						return (
							<div
								className="options"
								key={user.key}
								onClick={() => {
									setSearchParam(name);
								}}
							>
								{name}
							</div>
						);
					}
				})}
			{
                searched &&
                (searchedUser != null ? (
				<div>User Found, username:{searchedUser.username}</div>
			) : (
				<div>User Not Found!</div>
			))
            }

		</div>
	);
}
