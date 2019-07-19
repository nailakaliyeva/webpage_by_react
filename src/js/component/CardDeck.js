import React from "react";

//create your first component
export default class CardDeck extends React.Component {
	render() {
		let pictures = [
			"http://lorempixel.com/output/nature-q-c-640-480-7.jpg",
			"http://lorempixel.com/output/nightlife-q-c-640-480-6.jpg",
			"http://lorempixel.com/output/cats-q-c-640-480-3.jpg"
		];
		return (
			<div id="parent">
				<div className="card-deck">
					{pictures.map((item, index) => {
						return (
							<div className="card" key={index}>
								<img
									src={item}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is a longer card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<p className="card-text">
										<small className="text-muted">
											Last updated 3 mins ago
										</small>
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
