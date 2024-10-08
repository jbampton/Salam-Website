import Image from "next/image";
import Gif404Image from "../../../public/gifs/404.gif";
import GifDownloadImage from "../../../public/gifs/download.gif";
import GifEducationImage from "../../../public/gifs/education.gif";
import GifEducation2Image from "../../../public/gifs/education2.gif";
import React from "react";

function Gif({ variant }) {
  let classes = "";
  let src = "";

  switch (variant) {
    case "Gif404":
      classes += "w-60 h-64 sm:w-[304px] sm:h-[337px]";
      src = Gif404Image;
      break;
    case "GifDownload":
      classes += "h-[270px] w-48 sm:w-[275px] sm:h-96";
      src = GifDownloadImage;
      break;
    case "GifEducation":
      classes +=
        "h-[385px] w-[400px] sm:w-[455px] sm:h-[440px] dark:invert dark:opacity-90";
      src = GifEducationImage;
      break;
    case "GifEducation2":
      classes += "w-[337px] h-64 sm:h-80 sm:w-[425px] dark:invert";
      src = GifEducation2Image;
      break;
  }

  return <Image className={classes} src={src} alt="Gif" unoptimized priority />;
}

export default Gif;
