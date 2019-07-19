import React from "react";

//create your first component
export class Nav extends React.Component {
	render() {
		return (
			<div class="parentNav">
				<div class="titleNav text-left">
					<h2 className="navTitle">Start with Bootstrap</h2>
				</div>
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
			</div>
		);
	}
}
