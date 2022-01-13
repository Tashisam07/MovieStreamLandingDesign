import React from "react";
import "./Category.css";

function Category(props) {
	return (
		<div className="category_container">
			<span className="category_title">{props.title}</span>
			<div>{props.children}</div>
		</div>
	);
}

export default Category;
