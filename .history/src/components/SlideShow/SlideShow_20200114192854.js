import React, { useState, useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";
import { ReactComponent } from "*.svg";

class SlideShow extends React.Component {
	componentDidMount() {
		var instance = M.Carousel.init({
			fullWidth: true,
			indicators: true
		  });
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.carousel');
			var instances = M.Carousel.init(elems);
	}

render()

	
}

export default SlideShow;
