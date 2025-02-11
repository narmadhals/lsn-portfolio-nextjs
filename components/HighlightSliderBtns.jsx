"use client";
import React from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const HighlightSliderBtns = ({ swiper, containerStyles, btnStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper?.slidePrev()} // Safely call slidePrev
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper?.slideNext()} // Safely call slideNext
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default HighlightSliderBtns;
