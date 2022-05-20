import React from "react";
import reactDOM from "react-dom";
import { SecondCounter } from "./Counter/Counter.jsx";

let counter = 0;

window.onload = setInterval(function () {
	reactDOM.render(
		<SecondCounter seconds={counter} />,
		document.getElementById("app")
	);
	counter++;
}, 1000);

export default Home;
