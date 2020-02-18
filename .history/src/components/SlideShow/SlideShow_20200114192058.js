import React, { useState, useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

const SlideShow = () => {
	useEffect(() => {
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
		<div class="carousel">
    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
    <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
  </div>
	);
};

export default SlideShow;
