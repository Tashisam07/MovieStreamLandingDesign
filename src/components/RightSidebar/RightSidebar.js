import React from "react";
import "./RightSidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import Category from "./component/Category";

import requests from "../../requests";
import SidebarRow from "./component/SidebarRow";

function RightSidebar() {
	return (
		<div className="right_sidebar_container">
			<div className="header_search">
				<SearchIcon />
				<input placeholder="Search" type="search" />
			</div>
			<Category title="Popular Movies">
				<SidebarRow fetchUrl={requests.fetchTopRated}/>
				<SidebarRow fetchUrl={requests.fetchTopRated} />
			</Category>
			<Category title="Watchlists">
				<SidebarRow fetchUrl={requests.fetchDiscover}  />
				<SidebarRow fetchUrl={requests.fetchDiscover} />
				<SidebarRow fetchUrl={requests.fetchDiscover} />
			</Category>
		</div>
	);
}

export default RightSidebar;
