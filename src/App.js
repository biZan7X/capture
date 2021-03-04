import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";

//pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";

//router
import { Route, Switch, useLocation } from "react-router-dom";

//framer motion
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />

			<ScrollToTop />

			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
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
			</AnimatePresence>
		</div>
	);
}

export default App;
