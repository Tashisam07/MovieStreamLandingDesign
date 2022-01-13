import React from "react";
import requests from "../../requests";
import Row from "./component/Row";
import Nav from "./component/Nav";
import "./Mid.css";
import Banner from "./component/Banner";

function Mid() {
	return (
		<div className="mid_container">
			<Banner />
			<Row
				styles={{
					marginTop: "1.5rem",
				}}
				title="Netflix Originals"
				fetchUrl={requests.fetchDiscover}
				isLargeRow
			/>
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Actions" fetchUrl={requests.fetchActionMovies} />
			<Row title="Thriller" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default Mid;
