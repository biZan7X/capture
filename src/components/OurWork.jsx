import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
	return (
		<Work>
			<Movie>
				<Link to="/work/the-athlete">
					<h2>The Athlete</h2>
				</Link>

				<div className="line"></div>
				<img src={athlete} alt="athlete" />
			</Movie>
			<Movie>
				<Link to="/work/the-racer">
					<h2>The Racer</h2>
				</Link>
				<div className="line"></div>
				<img src={theracer} alt="theracer" />
			</Movie>
			<Movie>
				<Link to="/work/good-times">
					<h2>Good Times</h2>
				</Link>
				<div className="line"></div>
				<img src={goodtimes} alt="goodtimes" />
			</Movie>
		</Work>
	);
};

const Work = styled.div`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	h2 {
		padding: 1rem 0rem;
	}
`;
const Movie = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #cccccc;
		margin-bottom: 3rem;
	}

	a {
		text-decoration: none;
		position: relative;
		color: white;
	}

	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
		left: 0;
	}
`;

export default OurWork;
