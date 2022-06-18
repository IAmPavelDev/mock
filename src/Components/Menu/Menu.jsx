import React from "react";
import Icon from "./img/Icon";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";
import "./../../Fonts/Poppins/Poppins-Regular.ttf";
export default function Menu() {
	 function displayMenu() {
		let menuStyle =  document.getElementById("links");
		let toggle =  document.getElementById("toggle");
		menuStyle.style = toggle.checked ? "display: block" : "display: none";
	}
	function menuItems() {
		return (
			<>
				<Link to={"/"} className={style.link}>
					home
				</Link>
				<Link to={"/about"} className={style.link}>
					about
				</Link>
				<Link to={"/events"} className={style.link}>
					events
				</Link>
				<Link to={"/paths"} className={style.link}>
					paths
				</Link>
				<Link to={"/nodebuds"} className={style.link}>
					nodeBuds
				</Link>
				<Link to={"/connect"} className={style.link}>
					connect
				</Link>
			</>
		);
	}
	return (
		<>
			<div className={style.menu__wrapper}>
				<div className={style.icon}>
					<Link to={"/"}>
						<Icon />
					</Link>
				</div>
				<div className={style.links__desktop}>{menuItems()}</div>
				<div className={style.mobile__button__menu}>
					<div className={style.button}>
						<input
							type="checkbox"
							id="toggle"
							className={style.menu__toggle}
							onClick={displayMenu}
						/>
						<label htmlFor="toggle">
							<div></div>
							<div></div>
							<div></div>
						</label>
					</div>
				</div>
			</div>
			<div id="links" style={{display: "none"}}>
				<div className={style.links__mobile}>{menuItems()}</div>
			</div>
		</>
	);
}
