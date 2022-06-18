import React from "react";
import style from "./NodeBuds.module.scss";
import budsIcon from "./../../Images/Buds.png";
import vectorIcon from "./../../Images/Vector.png";

export default function NodeBuds() {
    return (
        <>
            <div className={style.nodeBuds__wrapper}>
                <div className={style.nodeBuds__wrapper__buds}>
                    <div className={style.nodeBuds__wrapper__buds__details}>
                        <p>Personalized mentorship</p>
                        <p><span className={style.nodeBuds__wrapper__buds__details__weightWord}>node<span className={style.nodeBuds__wrapper__buds__details__weightWord__color}>Buds</span></span> is our exclusive mentorship program that aims to assist underclassmen with adjusting to university life while simultaneously preparing them for life in tech.  Our program exposes underclassmen to various opportunities that encourage connecting forming, skill building, and both personal and technical development.</p>
                    </div>
                    <div className={style.nodeBuds__wrapper__buds__icon}>
                        <img src={budsIcon} alt="buds icon" />
                    </div>
                </div>
                <div className={style.nodeBuds__wrapper__officers}>
                    <div className={style.nodeBuds__wrapper__officers__header}>
                        <p>Officers</p>
                        <select>
                            <option>2021-22</option>
                        </select>
                    </div>
                    <div className={style.nodeBuds__wrapper__officers__board}>
                        <img src={vectorIcon} alt="" />
                        <p>Sami Bajwa</p>
                    </div>
                </div>
            </div>
        </>
    )
}