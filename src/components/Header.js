import React from "react";
import "./Header.scss";
import { AwesomeButton } from "react-awesome-button";
import styles from "react-awesome-button/src/styles/themes/theme-rickiest";

export default function Header(props) {
	return (
		<header className="headerBar">
			<img src={require("../pictures/GitHub-Mark-64px.png")} />
			<AwesomeButton type="secondary" className="headerBarBtn">
				Login
			</AwesomeButton>
		</header>
	);
}
