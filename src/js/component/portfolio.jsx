import React from "react";

//create your first component
const Portfolio = () => {
	return (
		<div className="container-flex p-5 border-top mt-5">
			<div className="row">
				<h1>Portfolio</h1>
			</div>
			<div className="row">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<img
						src="https://maximator-test.com/wp-content/uploads/2015/04/image-placeholder-700x400.jpg"
						className="img-fluid"></img>
					<h3>Project Name</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
				<div className="col-sm-4">
					<img
						src="https://maximator-test.com/wp-content/uploads/2015/04/image-placeholder-700x400.jpg"
						className="img-fluid"></img>
					<h3> Project Name</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
				<div className="col-sm-4">
					<img
						src="https://maximator-test.com/wp-content/uploads/2015/04/image-placeholder-700x400.jpg"
						className="img-fluid"></img>
					<h3>Project Name</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
