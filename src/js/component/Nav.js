import React from "react";

//create your first component
export class Nav extends React.Component {
	render() {
		return (
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Services
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Contact
					</a>
				</li>
			</ul>
		);
	}
}
