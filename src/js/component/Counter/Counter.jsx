import React from "react";
import "./counter.css";

export const SecondCounter = (props) => {
	let unit = props.seconds; //variables
	let ten = 0;
	let hundred = 0;
	let thousand = 0;
	let tenThousand = 0;
	let hunThousand = 0;

	if (props.seconds > 9) {
		ten = Math.floor(props.seconds / 10);
		unit = props.seconds % 10;
		if (ten > 9) {
			hundred = Math.floor(ten / 10);
			ten = ten % 10;
			if (hundred > 9) {
				thousand = Math.floor(hundred / 10);
				hundred = hundred % 10;
				if (thousand > 9) {
					tenThousand = Math.floor(thousand / 10);
					thousand = thousand % 10;
					if (tenThousand > 9) {
						hunThousand = Math.floor(tenThousand / 10);
						tenThousand = tenThousand % 10;
					}
				}
			}
		}
	}

	return (
		<>
			<div className="container-fluid bg-dark text-white row">
				<div className="container-second col-1 borderless">
					<i className="far fa-clock"></i>
				</div>
				<div className="container-second col-1">{hunThousand}</div>
				<div className="container-second col-1">{tenThousand}</div>
				<div className="container-second col-1">{thousand}</div>
				<div className="container-second col-1">{hundred}</div>
				<div className="container-second col-1">{ten}</div>
				<div className="container-second col-1">{unit}</div>
			</div>
		</>
	);
};
