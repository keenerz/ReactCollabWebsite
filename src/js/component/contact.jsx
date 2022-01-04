import React from "react";

//create your first component
const Contact = () => {
	return (
		<div className="container-flex p-5 border-top mt-5">
			<div className="row">
				<h1>Contact</h1>
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
				<div className="card stomp">
					<div className="card-body">
						<form>
							<div className="row mb-3">
								<div className="col-md-3 mt-2 text-end">
									<label
										for="exampleFormControlInput1"
										className="form-label">
										<b>Your E-Mail</b>
									</label>
								</div>
								<div className="col-md sally">
									<input
										type="email"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="Your E-Mail"></input>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-md-3 mt-2 text-end">
									<label
										for="exampleFormControlTextarea1"
										className="form-label">
										<b>Your Message</b>
									</label>
								</div>
								<div className="col-md">
									<textarea
										className="form-control"
										id="exampleFormControlTextarea1"
										rows="3"
										placeholder="Please enter your message here..."></textarea>
								</div>
							</div>
							<div className="row justify-content-end burger">
								<button
									type="submit"
									className="btn btn-primary col-sm-2">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
