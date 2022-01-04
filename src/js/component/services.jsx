import React from "react";

//create your first component
const Services = () => {
	return (
		<div className="p-5 d-flex justify-content-center fontstyle align-items-center border-top mt-5">
			<img
				src="https://github.com/Codekgeek26/Git/blob/master/website/assets/img/2.jpg?raw=true"
				className="img-fluid p-3 rounded-circle w-25"
			/>
			<div className="w-50 p-2">
				<h1>
					<b>The Second Heading</b>
					<span className="text-secondary"> Is Pretty Cool Too.</span>
				</h1>
				<h3 className="fs-2 ">
					Done ullamcorper nulla non metus auctor fringilla.
					Vestibulum id ligula porta felis euismod semper. Present
					commodo cursus magna, vel scelerisque isl consectetur. Fuse
					dapibus, tellus ac cursus commodo,.
				</h3>
			</div>
		</div>
	);
};

export default Services;
