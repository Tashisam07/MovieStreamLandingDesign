import "../LeftSidebar/LeftSidebar.css";
import React from "react";
import SidebarRow from "./component/SidebarRow";
import Category from "./component/Category";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import ExploreIcon from "@material-ui/icons/Explore";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import StarIcon from "@material-ui/icons/Star";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import TvRoundedIcon from "@material-ui/icons/TvRounded";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import MovieFilterRoundedIcon from "@material-ui/icons/MovieFilterRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function LeftSidebar() {
	return (
		<div className="leftbar_container">
			<img
				className="web_logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
				alt="netflix_logo"
			/>
			<Category title="menu">
				<SidebarRow Icon={HomeRoundedIcon} title="Home" />
				<SidebarRow Icon={BeenhereIcon} title="Discover" />
				<SidebarRow Icon={ExploreIcon} title="Community" />
				<SidebarRow Icon={LocalActivityIcon} title="Awards" />
			</Category>
			<Category title="library">
				<SidebarRow Icon={WatchLaterIcon} title="Recent" />
				<SidebarRow Icon={StarIcon} title="Top-Rated" />
				<SidebarRow Icon={CloudDownloadIcon} title="Downloaded" />
			</Category>
			<Category title="CATEGORY">
				<SidebarRow Icon={TvRoundedIcon} title="TV-Show" />
				<SidebarRow Icon={MovieRoundedIcon} title="Movies" />
				<SidebarRow Icon={MovieFilterRoundedIcon} title="anime" />
			</Category>
			<Category title="General">
				<SidebarRow Icon={SettingsRoundedIcon} title="Settings" />
				<SidebarRow Icon={ExitToAppIcon} title="Login" />
			</Category>
		</div>
	);
}

export default LeftSidebar;
