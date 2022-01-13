import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, title }) {
	return (
		<div className="sidebar_row_container">
			{Icon && <Icon className="icon_container" />}
			<span className="nav_title_container">{title}</span>
		</div>
	);
}

export default SidebarRow;
