import React from "react";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Mid from "./components/Mid/Mid";
import RightSidebar from "./components/RightSidebar/RightSidebar";
function App() {
	return (
		<div className="App">
			<div className="app_page">
				<LeftSidebar />
				<Mid />
				<RightSidebar />
			</div>
		</div>
	);
}

export default App;
