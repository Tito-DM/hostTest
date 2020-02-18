import React, { useState } from "react";
import "./App.css";
import Navegation from "../src/components/Navegation/Navegation";
import SlideShow from "../src/components/SlideShow/SlideShow";
import FloatingButtom from "../src/components/FloatingButtom/FloatingButtom";
function App() {
	return (
		<div className="App">
			<Navegation />
			{/* <SlideShow />
			<FloatingButtom /> */}
		</div>
	);
}

export default App;
