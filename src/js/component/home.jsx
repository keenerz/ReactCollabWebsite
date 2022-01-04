import React from "react";
import Navbar from "./Navbar.jsx";
import FirstHeading from "./first_heading.jsx";
import Tagline from "./tagline.jsx";
import Services from "./services.jsx";
import Portfolio from "./portfolio.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Tagline />
			<div className="container">
				<FirstHeading />
				<Services />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
