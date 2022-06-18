import React from "react";
import style from "./Home.module.scss";
import introImage from "./../../Images/RightContentImg.png";
import whyImage from "./../../Images/whyImage.png";
import algoImage from "./../../Images/Algo.png";
import createImage from "./../../Images/Create.png";
import devImage from "./../../Images/Dev.png";
export default function Home() {
	return (
		<>
			<div className={style.home__wrapper}>
				<div className={style.home__intro}>
					<div className={style.home__intro__left}>
						<p className={style.home__intro__text}>
							<p>
								We are the largest tech community at <span>CSUF</span>
							</p>
						</p>
						<a href={"https://tinyurl.com/acm-csuf-discord/"}>
							<button className={style.home__join__button}>
								Join us today!
							</button>
						</a>
					</div>
					<div className={style.home__intro__right}>
						<img src={introImage} alt="" />
					</div>
				</div>
				<div className={style.home__why}>
					<div className={style.home__why__left}>
						<img src={whyImage} alt="" />
					</div>
					<div className={style.home__why__right}>
						<p className={style.home__why__right__first}>
							Why should students join?
						</p>
						<p className={style.home__why__right__second}>
							We help kickstart student's journies through the tech industry by
							providing workshops that enable growth of technical ability, a
							community of techies open to building personal and professional
							connections, and a mentorship program full of enthusiastic
							upperclassmen ready prepare underclassmen for success.
						</p>
					</div>
				</div>
				<div className={style.home__paths}>
					<div className={style.home__paths__top}>
						<p className={style.home__paths__top__first}>
							Get involved with our paths!
						</p>
						<p className={style.home__paths__top__second}>
							Paths were designed to empower students who want to specialize in
							something specific within the industry. By joining any of our
							paths, students will be given access to exclusive workshops and
							events that'll build, strengthen, and improve skills.
						</p>
					</div>
					<div className={style.home__paths__bottom}>
						<div className={style.home__paths__bottom__algo}>
							<img src={algoImage} alt="" />
							<p>
								acm<span>Algo</span>
							</p>
						</div>
						<div className={style.home__paths__bottom__create}>
							<img src={createImage} alt="" />
							<p>
								acm<span>Create</span>
							</p>
						</div>
						<div className={style.home__paths__bottom__dev}>
							<img src={devImage} alt="" />
							<p>
								acm<span>Dev</span>
							</p>
						</div>
					</div>
				</div>
				<div className={style.home__prompt}>
					<div className={style.home__prompt__top}>
						<p className={style.home__prompt__top__first}>
							Ready to get started?
						</p>
						<p className={style.home__prompt__top__second}>
							We invite all to join our student chapter consisting of 350+
							passionate tech enthusiasts. Each of our workshops, info sessions,
							and community events were designed to kickstart your tech journey
							on the right foot.
						</p>
					</div>
					<div className={style.home__prompt__bottom}>
						<a href={"https://tinyurl.com/acm-csuf-discord/"}>
							<button className={style.home__join__button}>
								Join us today!
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
