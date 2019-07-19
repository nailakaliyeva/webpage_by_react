import React from "react";

export default class CardDeck extends React.Component {
	render() {
		let arrayOfObjects = [
			{
				imageUrl: "http:lorempixel.com/output/nature-q-c-640-480-7.jpg",
				cardTitle: "A beautiful flower",
				cardDescription:
					"This is some dummy text but the flower IS actually beautiful just like Me"
			},

			{
				imageUrl:
					"http:lorempixel.com/output/nightlife-q-c-640-480-6.jpg",
				cardTitle: "The bar",
				cardDescription:
					"This bar is advertising cheap ass Vodka. You might not notice you're drinking cheap or expensive vodka at the moment, but you will definitely feel it next morning"
			},

			{
				imageUrl: "http:lorempixel.com/output/cats-q-c-640-480-3.jpg",
				cardTitle: "Grumpy Cat",
				cardDescription:
					"This cat is still cute regardless how mad he looks"
			}
		];
		return (
			<div id="parent">
				<div className="card-deck">
					{arrayOfObjects.map((item, index) => {
						return (
							<div className="card" key={index}>
								<img
									src={item.imageUrl}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">
										{item.cardTitle}
									</h5>
									<p className="card-text">
										{item.cardDescription}
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
