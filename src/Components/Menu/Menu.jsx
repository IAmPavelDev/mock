import React from "react";
import { ReactDOM } from "react";
import Icon from "./img/Icon";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";
import "./Menu.module.scss";
import "./../../Fonts/Poppins/Poppins-Regular.ttf";

import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export default function Menu() {
	const [open, setOpen] = useState();
	const [btnVisible, setBtnVisible] = useState();

	function menuIsVisible() {
		if (document.body.clientWidth > 560) {
			if (!open) {
				setOpen(true);
			}
			if (btnVisible) {
				setBtnVisible(false);
			}
		} else if (document.body.clientWidth <= 560 && !btnVisible) {
			setBtnVisible(true);
		}
	}

	React.useEffect(() => {
		window.addEventListener("resize", menuIsVisible);
		menuIsVisible();
	});

	function coloredMenuItem(e) {
		const a = document.getElementsByClassName(style.link);
		for(let key of a){
			console.log(key);
			key.style.color = "black";
		}
		e.target.style.color = "#2c91c6";
	}

	function menuItems() {
		return (
			<>
				<Link to={"/"} className={style.link} onClick={coloredMenuItem}>
					home
				</Link>
				<Link to={"/about"} className={style.link} onClick={coloredMenuItem}>
					about
				</Link>
				<Link to={"/events"} className={style.link} onClick={coloredMenuItem}>
					events
				</Link>
				<Link to={"/paths"} className={style.link} onClick={coloredMenuItem}>
					paths
				</Link>
				<Link to={"/nodebuds"} className={style.link} onClick={coloredMenuItem}>
					nodeBuds
				</Link>
				<Link to={"/connect"} className={style.link} onClick={coloredMenuItem}>
					connect
				</Link>
			</>
		);
	}
	return (
		<>
			<div className={style.menu__wrapper}>
				<div className={style.menu__wrapper__icon}>
					<Link to={"/"}>
						<Icon />
					</Link>
				</div>
				<div className={style.menu__wrapper__links}>
					{open ? menuItems() : ""}
				</div>
				{btnVisible ? (
					<div className={style.menu__wrapper__mobile}>
						{!open ? (
							<AiOutlineMenu
								onClick={() => {
									console.log(open);
									setOpen(!open);
								}}
								className={style.menu__wrapper__open}
								size={"42px"}
							/>
						) : (
							<CgClose
								size={"42px"}
								onClick={() => setOpen(!open)}
								className={style.menu__wrapper__close}
							/>
						)}
					</div>
				) : null}
			</div>
		</>
	);
}
