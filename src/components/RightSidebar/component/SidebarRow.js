import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import './SidebarRow.css';

const base_url = "https://image.tmdb.org/t//p/original/";

function SidebarRow(props) {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(props.fetchUrl);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, [props.fetchUrl]);
	
	return(
        <div className="sidebar_container">
            <img
				key={movie?.id}
				className='sidebar_poster'
				src={`${base_url}${movie?.poster_path}`}
				alt={movie?.name}
			/>
            <div className="poster_contents">
                <div className="poster_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </div>
                <div className="poster_rating">
                    {`Ratings: ${movie?.vote_average}`}
                </div>
            </div>
        </div>
    );
}

export default SidebarRow;
