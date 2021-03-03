import React from "react";

//framer motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Contact = () => {
	return (
		<motion.div
			style={{ color: "white" }}
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			Contact
		</motion.div>
	);
};

export default Contact;
