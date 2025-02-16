"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtn = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
  return <div className={containerStyles}>
    <button className={btnStyles}>
        <PiCaretLeftBold style={iconsStyles} onClick={() => swiper.slidePrev()} />
    </button>

    <button className={btnStyles}>
        <PiCaretRightBold style={iconsStyles} onClick={() => swiper.slideNext()} />
    </button>
  </div>;
};


export default WorkSliderBtn;
