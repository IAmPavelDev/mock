import React from "react";
import style from "./About.module.scss";
import algoImage from "./../../Images/Algo.png";
import createImage from "./../../Images/Create.png";
import devImage from "./../../Images/Dev.png";
import generalImage from "./../../Images/General.png";
import budsImage from "./../../Images/Buds.png";
import aaronImage from "./../../Images/Aaron.png";
import armanImage from "./../../Images/Arman.png";
import mikeImage from "./../../Images/Mike.png";
import boardContent from "./boardContent.json";
export default function About() {
	function boardBadges() {
		let res = [];
		for (let i = 0; i < 12; i++) {
			let input =
				i < 4 || i >= 10
					? aaronImage
					: i >= 4 && i < 6
					? armanImage
					: i >= 6 && i <= 10
					? mikeImage
					: null;
			res.push(
				<div className={style.about__badge}>
					<img src={input} alt="Aaron icon" />
					<p>{boardContent[i].name}</p>
					<p>
						<span style={{ color: boardContent[i].color }}>
							{boardContent[i].span}{" "}
						</span>
						{boardContent[i].position}
					</p>
				</div>
			);
		}
		return res;
	}
	return (
		<>
			<div className={style.about__wrapper}>
				<div className={style.about__who}>
					<div className={style.about__who__badges}>
						<img src={algoImage} alt="icon algo" />
						<img src={createImage} alt="icon create" />
						<img src={generalImage} alt="icon general" />
						<img src={devImage} alt="icon develop" />
						<img src={budsImage} alt="icon buds" />
					</div>
					<div className={style.about__who__text}>
						<p>Who are we?</p>
						<p>
							<span>acm</span>
							<span>CSUF</span> is a student chapter of the Association for
							Computing Machinery, an international organization based in New
							York that advocates for the advancement of computer science as a
							science and profession. Our chapter based in California State
							University, Fullerton focuses on bringing passionate Titans
							together to be involved in the tech community via workshops, info
							sessions, community events, and more!
						</p>
					</div>
				</div>
				<div className={style.about__board}>
					<div className={style.about__board__header}>
						<p>Board members</p>
						<div className={style.about__board__header__year}>2021-2022</div>
					</div>
					<div className={style.about__board__badges}>{boardBadges()}</div>
				</div>
                {/* <Footer /> */}
			</div>
		</>
	);
}
