import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class FloatingButtom e() {
	return (
		<div className="fixed-action-btn ">
			<a className="btn-floating btn-large red pulse">
				<i className="large material-icons">mode_edit</i>
			</a>
			<ul>
				<li>
					<a className="btn-floating green">
						<i className="material-icons">location_on</i>
					</a>
				</li>
				<li>
					<a className="btn-floating red">
						<i className="fab fa-youtube"></i>
					</a>
				</li>
				<li>
					<a className="btn-floating blue">
						<i className="fab fa-facebook-f"></i>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default FloatingButtom;
