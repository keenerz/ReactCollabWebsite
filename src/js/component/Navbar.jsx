import React from "react";

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					{" "}
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link"
								aria-current="page"
								href="/website/templates/first_heading.html">
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="/website/templates/services.html">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="/website/templates/portfolio.html">
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="/website/templates/contact.html">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
