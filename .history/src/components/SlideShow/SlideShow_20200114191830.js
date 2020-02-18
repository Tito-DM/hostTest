import React, { useState, useEffect } from "react";

import M from "materialize-css";

const SlideShow = () => {
	useEffect =
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
		<div className="slider fullscreen fix-slide">
			<ul className="slides filter_img">
				{SlideShow.map((s, i) => (
					<li key={i}>
						<img src={s.img} />
						<div className="caption right-align">
							<h3 className="light grey-text text-lighten-3 slide-text">
								{s.title}
							</h3>
							<h5 className="light grey-text text-lighten-3 slide-text">
								{s.subtitle}
							</h5>
						</div>
					</li>
				))}
				;
			</ul>
		</div>
	);
};

export default SlideShow;
