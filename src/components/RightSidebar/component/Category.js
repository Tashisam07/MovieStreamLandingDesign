import React from "react";

function Category(props) {
	return (
		<div>
			<div className="category_container">
				<span className="category_title">{props.title}</span>
				<div>{props.children}</div>
			</div>
		</div>
	);
}

export default Category;
