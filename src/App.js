import React, { useState } from "react";
import Search from "./components/Search";
import axios from "axios";

function App() {
	const [state, setState] = useState({
		searchQuery: "",
		results: [],
		selected: {},
	});

	const apiurl = "http://www.omdbapi.com/?apikey=bf410ecf";

	const search = e => {
		if (e.key === "Enter") {
			axios(apiurl + "&s=" + state.searchQuery).then(data => {
				console.log(data);
			});
		}
	};

	const handleInput = e => {
		let searchQuery = e.target.value;
		setState(previousState => {
			return { ...previousState, searchQuery: searchQuery };
		});
		console.log(state.searchQuery);
	};

	return (
		<div className="App">
			<header>
				<h1>Works?</h1>
			</header>
			<main>
				<Search handleInput={handleInput} search={search} />
			</main>
		</div>
	);
}

export default App;
