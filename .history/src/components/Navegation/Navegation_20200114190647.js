import React from "react";
import Mi from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

const Navegation = () => {
	return (
		<header>
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper  cyan darken-3">
						<a
							href="index.html"
							className="brand-logo  logo-text light  text-lighten-3"
						>
							<img src="img/logo2.jpg" className="responsive-img logo-img" />
						</a>
						<span className="logo-text-side sub-logo-text light grey-text text-lighten-3 sub-logo-text hide-on-med-and-down">
							AQUITECTURA &amp; DESIGN
						</span>
						<a
							href="#"
							data-activates="mobile-demo"
							className="button-collapse"
						>
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							<li>
								<a className=" amber" href="index.html">
									Home
								</a>
							</li>
							<li>
								<a href="projects.html">Projectos</a>
							</li>
							<li>
								<a href="seu_projecto.html">Seu Projecto</a>
							</li>
							<li>
								<a href="sobre_nos.html">Sobre nos</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			//side menu Trigger
			<ul className="side-nav" id="mobile-demo">
				<div className="background  side-nav-img">
					<p className="sid-nav-text logo-text">ArquiLapis</p>
				</div>
				<li className="menu-border">
					<a href="index.html">
						<i className="fas fa-home teal-text"></i>Home
					</a>
				</li>
				<li className="menu-border">
					<a href="projects.html">
						<i className="fas fa-tools teal-text"></i>Projectos
					</a>
				</li>
				<li className="menu-border">
					<a href="seu projecto.html">
						<i className="fas fa-leaf teal-text"></i>Seu Projecto
					</a>
				</li>
				<li className="menu-border">
					<a href="sobre nos.html">
						<i className="far fa-ruler-triangle"></i>Sobre nos
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Navegation;
