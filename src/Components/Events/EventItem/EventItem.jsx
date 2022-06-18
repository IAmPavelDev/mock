import React from "react";
import style from "./EventItem.module.scss";

export default function EventItem({ content }) {
	return (
		<div className={style.event__item__wrapper}>
			<div className={style.events__main__scroll__event}>

				<div className={style.events__main__scroll__event__date}>
					{content.date}
				</div>
				<div className={style.events__main__scroll__event__span}>
					{content.span ??= <br />}
				</div>
				<div className={style.events__main__scroll__event__name}>
					{content.name}
				</div>
				<div className={style.events__main__scroll__event__time}>
					Starts {content.time}
				</div>
				<div className={style.events__main__scroll__event__app}>
					Hosted on {content.app}
				</div>
				<button className={style.events__main__scroll__event__button}>
					Click to join
				</button>
			</div>
		</div>
	);
}
