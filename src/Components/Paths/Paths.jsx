import React from "react";
import style from "./Paths.module.scss";
import algoIcon from "./../../Images/Algo.png";
import createIcon from "./../../Images/Create.png";
import devIcon from "./../../Images/Dev.png";
export default function Paths() {
	return (
		<>
			<div className={style.paths__wrapper}>
				<div className={style.path__wrapper__header}>
					<p>What are paths?</p>
					<p>
						Paths are committees that specialize in specific fields in the tech
						industry. We've designed paths to be gateways for students to
						explore new fields, develop new interests, and enhance skills
						that'll benefit in the industry.
					</p>
				</div>
				<div className={style.path__wrapper__main}>
					<div className={style.path__wrapper__main__algo}>
						<div className={style.path__wrapper__main__algo__icon}>
							<img src={algoIcon} alt="" />
						</div>
						<div className={style.path__wrapper__main__algo__details}>
							<p>
								acm<span>Algo</span>
							</p>
							<p>
								This path is dedicated to building the programming proficiency
								of students. <span>Algo</span> focuses on mastering data structures and
								algorithms, enhancing problem solving abilities, and exploration
								of competitive programming.
							</p>
						</div>
					</div>
					<div className={style.path__wrapper__main__create}>
						<div className={style.path__wrapper__main__create__details}>
                            <p>acm<span>Create</span></p>
                            <p>This path is dedicated to emphasizing the importance of product design and product management in the tech industry.  <span>Create</span> focuses on educating students about design principles, design tools, and the intricacies of conceptualization, development, and management of a product.</p>
                        </div>
						<div className={style.path__wrapper__main__create__icon}>
							<img src={createIcon} alt="" />
						</div>
					</div>
					<div className={style.path__wrapper__main__dev}>
						<div className={style.path__wrapper__main__dev__icon}>
							<img src={devIcon} alt="" />
						</div>
						<div className={style.path__wrapper__main__dev__details}>
                            <p>acm<span>Dev</span></p>
                            <p>This path is dedicated to giving students the opportunity to explore tech via hands-on projects and activities.  <span>Dev</span> focuses on introducing students to software development, and the various tech stacks used in the industry.</p>
                        </div>
					</div>
				</div>
			</div>
		</>
	);
}
