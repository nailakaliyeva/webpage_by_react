import React from "react";

//create your first component
export default class CardDeck extends React.Component {
	render() {
		return (
			<div id="parent">
				<div className="card-deck">
					<div className="card">
						<img
							src="http://lorempixel.com/125/125/abstract/3/cc"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a longer card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
					<div className="card">
						<img
							src="http://lorempixel.com/125/125/abstract/1/cc"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This card has supporting text below as a natural
								lead-in to additional content.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
					<div className="card">
						<img
							src="http://lorempixel.com/125/125/abstract/7/cc"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								card has even longer content than the first to
								show that equal height action.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
