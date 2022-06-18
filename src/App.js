import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Paths from "./Components/Paths/Paths";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/events" element={<Events />} />
				<Route path="/paths" element={<Paths />} />
			</Routes>
			<Footer/>
		</>
	);
}

export default App;
