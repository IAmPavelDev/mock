import React from "react";
import style from "./Footer.module.scss";
import footerIcon from "./../../Images/footerIcon.png";
export default function Footer() {
	return (
		<div className={style.footer__wrapper}>
			<div className={style.footer}>
				<div className={style.footer__copyright}>
					<p>© 2021 acmCSUF</p>
				</div>
				<div className={style.footer__icons}>
					<img src={footerIcon} alt="" />
				</div>
			</div>
		</div>
	);
}
