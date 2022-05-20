import React from "react";
import "./counter.css";

export const SecondCounter = (props) => {
    let totalSecond = props.seconds
    let second1 = 0
    let second2 = 0
    let minut1 = 0
    let minut2 = 0
    let hour1 = 0
    let hour2 = 0

    second1 = props.seconds

	return (
		<>
			<div className="container-fluid bg-dark text-white row">
				<div className="container-second col-1 borderless">
					<i className="far fa-clock"></i>
				</div>
				<div className="container-second col-1">{hour2}</div>
				<div className="container-second col-1">{hour1}</div>
				<div className="container-second col-1">{minut2}</div>
				<div className="container-second col-1">{minut1}</div>
				<div className="container-second col-1">{second2}</div>
				<div className="container-second col-1">{second1}</div>
			</div>
		</>
	);
};
