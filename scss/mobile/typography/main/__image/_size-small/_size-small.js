let mainBlock = "main";
let mainElementImage = "__image";
let mainMod = "_size-small";
let maxWidth = 600;
let imageSource = "../images/image-hero-mobile.png";

const changeMainImg = changeMainImgOnMobile(imageSource);

function changeMainImgOnMobile(imgSrc) {
  const screenSize = document.body.offsetWidth;
  if (screenSize <= maxWidth) {
    const image = document.querySelector(`.${mainBlock}${mainElementImage}${mainMod}`);
    image.src = imgSrc;
  }
}

export {changeMainImg};
