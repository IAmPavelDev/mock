import React, { useState } from "react";
import style from "./Events.module.scss";
import Slider from "react-slick";
import eventsContent from "./EventsContent.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventItem from "./EventItem/EventItem";
import ScrollRule from "./ScrollRule";
export default function Events() {
	let sliderGlobal;
	const [slidesToShow, setSlidesToShow] = useState();
	const [blockScroll, allowScroll] = ScrollRule();

	function countOfSlides() {
		let h = window.innerWidth;
		let calcSlides = +(-19 + 3 * Math.log(h)).toFixed(1);
		calcSlides = calcSlides >= 1
							? calcSlides
							: 1; 

		// console.log((-19 + 3 * Math.log(h)).toFixed(1));
		if ((slidesToShow !== calcSlides)) {
			setSlidesToShow(calcSlides);
		}
		// setSlidesToShow(2);
		// if (h >= 1730 && slidesToShow !== 3.5) {
		// 	setSlidesToShow(3.5);
		// } else if (h >= 1400 && h < 1730 && slidesToShow !== 3) {
		// 	setSlidesToShow(3);
		// } else if (h < 1400 && h >= 1200 && slidesToShow !== 2.5) {
		// 	setSlidesToShow(2.5);
		// } else if (h < 1200 && h >= 1000 && slidesToShow !== 2) {
		// 	setSlidesToShow(2);
		// } else if (h < 1000 && h >= 850 && slidesToShow !== 1.5) {
		// 	setSlidesToShow(1.5);
		// } else if (h < 850 && slidesToShow !== 1) {
		// 	setSlidesToShow(1);
		// }
	}

	window.onresize = countOfSlides;

	countOfSlides(); //initial count of slides calculate

	function events() {
		const response = [];
		for (let event of eventsContent) {
			let index = eventsContent.indexOf(event);
			response.push(<EventItem content={event} key={index} />);
		}
		return response;
	}

	function scroll(x) {
		x > 0 ? sliderGlobal.slickNext() : sliderGlobal.slickPrev();
	}

	var settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		speed: 400,
	};

	return (
		<>
			<div className={style.events__wrapper}>
				<div className={style.events__header}>
					<p>Curated events for growth and success</p>
					<p>
						Our student chapter hosts a multitude of events throughout each
						school semester, consisting of workshops, info sessions, community
						building events, and much more! Events are open to anyone
						interested, regardless of major or background experience.
					</p>
				</div>
				<div className={style.events__main}>
					<p>This week's events</p>
					<div
						className={style.events__main__scroll}
						onWheel={(e) => scroll(e.deltaY)}
						onMouseOver={() => blockScroll()}
						onMouseLeave={() => allowScroll()}
					>
						<Slider {...settings} ref={(slider) => (sliderGlobal = slider)}>
							{events()}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}
