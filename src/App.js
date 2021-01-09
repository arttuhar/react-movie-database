import React, { useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
	const [state, setState] = useState({
		searchQuery: "",
		results: [],
		selected: {},
	});

	const apiurl = "http://www.omdbapi.com/?apikey=bf410ecf";

	const search = e => {
		if (e.key === "Enter") {
			axios(apiurl + "&s=" + state.searchQuery).then(({ data }) => {
				let results = data.Search;
				setState(previousState => {
					return { ...previousState, results: results };
				});
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

	const openPopup = id => {
		axios(apiurl + "&i=" + id + "&plot=full").then(({ data }) => {
			let result = data;
			setState(previousState => {
				return { ...previousState, selected: result };
			});
		});
	};

	const closePopup = () => {
		setState(previousState => {
			return { ...previousState, selected: {} };
		});
	};

	return (
		<div className="App">
			<header>
				<h1>RMDb</h1>
			</header>
			<main>
				<Search handleInput={handleInput} search={search} />
				<Results results={state.results} openPopup={openPopup} />
				{typeof state.selected.Title != "undefined" ? (
					<Popup selected={state.selected} closePopup={closePopup} />
				) : (
					false
				)}
			</main>
		</div>
	);
}

export default App;
