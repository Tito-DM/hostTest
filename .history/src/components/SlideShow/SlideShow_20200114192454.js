import React, { useState, useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

class SlideShow extends Rea {
	useEffect(() => {
		var instance = M.Carousel.init({
			fullWidth: true,
			indicators: true
		  });
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.carousel');
			var instances = M.Carousel.init(elems);
		  });
	}, [])
	const [SlideShow, setSlideShow] = useState([
		{
			img: "img/sven-mieke-1162927-unsplash.jpg",
			title: "Projectando um Futuro Melhor e saudavel",
			subtitle: "Para Ti e a Sua Familia"
		},
		{
			img: "img/16 CASAS- PROJET. EXT 33.jpg",
			title: "Projectos Residências",
			subtitle: "Segurança &amp; Bem-Estar"
		},
		{
			img: "img/16 CASAS- PROJET. INT 01.jpg",
			title: "Design Interno",
			subtitle: "Dando Vida a Tua Habitação."
		},
		{
			img: "img/RESORT-NELSON TITO ARQ- TRAÇO VIVO 11.jpg",
			title: "Projectos Comerciais",
			subtitle: "Lazer &amp; Bem-Estar"
		}
	]);

	return (
		<div class="carousel carousel-slider center">
		<div class="carousel-fixed-item center">
		  <a class="btn waves-effect white grey-text darken-text-2">button</a>
		</div>
		<div class="carousel-item red white-text" href="#one!">
		  <h2>First Panel</h2>
		  <p class="white-text">This is your first panel</p>
		</div>
		<div class="carousel-item amber white-text" href="#two!">
		  <h2>Second Panel</h2>
		  <p class="white-text">This is your second panel</p>
		</div>
		<div class="carousel-item green white-text" href="#three!">
		  <h2>Third Panel</h2>
		  <p class="white-text">This is your third panel</p>
		</div>
		<div class="carousel-item blue white-text" href="#four!">
		  <h2>Fourth Panel</h2>
		  <p class="white-text">This is your fourth panel</p>
		</div>
	  </div>
	);
};

export default SlideShow;
