import React from "react";
import style from "./Connect.module.scss";
import IGIcon from "./../../Images/IG.png";
import LNIcon from "./../../Images/ln.png";
import YTIcon from "./../../Images/YT.png";
import DSIcon from "./../../Images/DS.png";
export default function Connect() {
	return (
		<>
			<div className={style.connect__wrapper}>
				<div className={style.connect__wrapper__top}>
					<div className={style.connect__wrapper__top__header}>
						<p>Connect with us!</p>
						<p>
							The best way to stay up to date with us is by following all of our
							social platforms, and by joining our Discord server. We post
							announcements, exclusive content, and more, so there's never a
							chance to miss out on what's going on.
						</p>
					</div>
					<div className={style.connect__wrapper__top__socials}>
						<a href="#">
							<img src={IGIcon} alt="" />
						</a>
						<a href="#">
							<img src={LNIcon} alt="" />
						</a>
						<a href="#">
							<img src={YTIcon} alt="" />
						</a>
						<a href="#">
							<img src={DSIcon} alt="" />
						</a>
					</div>
				</div>
				<center>
					<div className={style.connect__wrapper__email}>
						<div className={style.connect__wrapper__email__header}>
							<p>Get in touch</p>
							<p>
								Got any questions for us? Want to collaborate? Just want to say
								hi? Whatever it is, feel free to contact us! Send us an email by
								filling out the form below, and we'll have a representative get
								back to you as soon as possible.
							</p>
						</div>
						<div className={style.connect__wrapper__email__form}>
							<div className={style.connect__wrapper__email__form__name}>
								<p>Name</p>
								<input type="text" placeholder="Name" />
							</div>
							<div className={style.connect__wrapper__email__form__email}>
								<p>Email</p>
								<input type="text" placeholder="Email" />
							</div>
							<div className={style.connect__wrapper__email__form__subject}>
								<p>Subject</p>
								<input type="text" placeholder="Subject" />
							</div>
							<div className={style.connect__wrapper__email__form__message}>
								<p>Message</p>
								<textarea type="text" placeholder="Message">
									{" "}
								</textarea>
							</div>
						</div>
						<div className={style.connect__wrapper__email__submit}>
							<button type="submit">Submit</button>
						</div>
					</div>
				</center>
			</div>
		</>
	);
}
