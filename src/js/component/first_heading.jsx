import React from "react";

const FirstHeading = () => {
	return (
		<div className="p-5 d-flex justify-content-center fontstyle align-items-center border-top mt-5">
			<div className="w-50 p-2">
				<h1>
					<b>This First Heading</b>{" "}
					<span className="text-secondary">Will Catch Your Eye</span>
				</h1>
				<h3 className="fs-2 ">
					{" "}
					Done ullamcorper nulla non metus actor fringilla. Vestibulum
					id ligula porta felis euismod semper. Present commodo cursus
					magna, vel scelerisque nisl consectetur. Fusce dapibus,
					tellus ac cursus commodo.
				</h3>
			</div>
			<img
				src="https://i.ibb.co/3FWxtLC/rrrff.jpg"
				className="img-fluid p-3 rounded-circle w-25"
			/>
		</div>
	);
};

export default FirstHeading;
