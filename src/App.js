import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

//pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./components/OurWork";
import Contact from "./components/Contact";
import MovieDetail from "./pages/MovieDetail";

//router
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />

			<Switch>
				<Route path="/" exact>
					<AboutUs />
				</Route>

				<Route path="/work" exact>
					<OurWork />
				</Route>

				<Route path="/work/:id">
					<MovieDetail />
				</Route>

				<Route path="/contact" exact>
					<Contact />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
