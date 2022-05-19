let pageBlock = "page";
let pageElementHeader = "__header";
let elementHeaderMod = "_pos_fixed";

const fixedHeader = window.addEventListener("scroll", makeHeaderFixed);

function makeHeaderFixed() {
  const header = document.querySelector(`.${pageBlock}${pageElementHeader}`);
  const headerHeight = header.offsetHeight;
  const main = document.querySelector("main");
  if (document.documentElement.scrollTop) {
    header.classList.add(`${pageBlock}${pageElementHeader}${elementHeaderMod}`);
    main.style.marginTop = `${headerHeight}px`;
  } else {
    header.classList.remove(`${pageBlock}${pageElementHeader}${elementHeaderMod}`);
    main.style.marginTop = "0px";
  }
}

export {fixedHeader};
