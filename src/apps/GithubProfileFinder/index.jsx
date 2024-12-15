import { useState } from "react";
import "./styles.css";

export default function GithubProfileFinder() {
	const [name, setName] = useState("");
	const [info, setInfo] = useState(null);

	async function handleSubmit() {
		const response = await fetch(`https://api.github.com/users/${name}`);
		const data = await response.json();

		setInfo(data);
	
	}

	return (
		<div className="container">
			<div className="input_container">
				<input
					type="text"
					placeholder="Search Github Profiles"
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
			<div className="info_container">
			
				
				{info != null ? (
						<>
							<img src={info.avatar_url} width={100}/>
							<a href={info.html_url} target="_blank">{info.name}</a>
							<div>Joined on {info.created_at}</div>
							<div>Public Repos: {info.public_repos}</div>
							<div>Followers: {info.followers}</div>
							<div>Following:{info.following}</div>
						</>
					)
				: (
					<div>Waiting for the search</div>
				)}
			</div>
		</div>
	);
}
