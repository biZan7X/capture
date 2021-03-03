import React from "react";
import home1 from "../img/home1.png";
import Wave from "./Wave";

//styled
import { About, Description, Image, Hide } from "../style";

//framer motion
import { motion } from "framer-motion";

//animations
import { titleAnim, photoAnim, fade } from "../animation";

const AboutUsSection = () => {
	return (
		<About>
			<Description>
				<motion.div className="title">
					<Hide>
						<motion.h2 variants={titleAnim}>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							your <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>True.</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas that you
					have. We have professionals with amazing skills.
				</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</Description>

			<Image>
				<motion.img
					variants={photoAnim}
					src={home1}
					alt="guy with camera"
				/>
			</Image>

			<Wave />
		</About>
	);
};

export default AboutUsSection;
