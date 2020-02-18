import React, { useState, useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

const SlideShow = () => {

		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.carousel');
			
			var instances = M.Carousel.init(elems,option);
		  });

		
	return (
		<div className="carousel carousel-slider center">
		<div className="carousel-fixed-item center">
		  <a className="btn waves-effect white grey-text darken-text-2">button</a>
		</div>
		<div className="carousel-item red white-text" href="#one!">
		  <h2>First Panel</h2>
		  <p className="white-text">This is your first panel</p>
		</div>
		<div className="carousel-item amber white-text" href="#two!">
		  <h2>Second Panel</h2>
		  <p className="white-text">This is your second panel</p>
		</div>
		<div className="carousel-item green white-text" href="#three!">
		  <h2>Third Panel</h2>
		  <p className="white-text">This is your third panel</p>
		</div>
		<div className="carousel-item blue white-text" href="#four!">
		  <h2>Fourth Panel</h2>
		  <p className="white-text">This is your fourth panel</p>
		</div>
	  </div>
	);
};

export default SlideShow;
