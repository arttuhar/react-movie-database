import React from "react";

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>
					{selected.Title}
					<span> ({selected.Year})</span>
				</h2>
				<p className="rating">
					<i class="fas fa-star"></i> {selected.imdbRating}
				</p>
				<div className="info">
					<img src={selected.Poster} alt="Poster" />
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>
					Close
				</button>
			</div>
		</section>
	);
}

export default Popup;
