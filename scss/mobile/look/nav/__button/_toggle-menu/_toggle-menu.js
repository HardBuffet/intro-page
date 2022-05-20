let navBlock = "nav";
let navElementButton = "__button";
let navElementMenu = "__menu";
let navMod = "_toggle-menu";

const button = document.querySelector(`.${navBlock}${navElementButton}${navMod}`);
const showHideMenu = checkIfButtonExist(button);

function checkIfButtonExist(btn) {
  const nav = document.querySelector(`.${navBlock}`);
  nav.firstElementChild === btn ? checkIfIconExist(btn) : crtButton(nav);
}

function checkIfIconExist(button) {
  if (button.firstElementChild) {
    toggleMenu(button);
  } else {
    addIcon(button);
  }
}

function crtButton(navigation) {
  const button = document.createElement("button");
  button.classList.add(`.${navBlock}${navElementButton}${navMod}`);
  navigation.insertBefore(button, navigation.children[0]);
  addIcon(button);
}

function addIcon(btn) {
  const crtButtonImg = document.createElement("img");
  crtButtonImg.src = "../images/icon-menu.svg";
  crtButtonImg.alt = "";
  btn.appendChild(crtButtonImg);
}

function toggleMenu(btn) {
  btn.addEventListener('click', () => {
    const menu = document.querySelector(`.${navBlock}${navElementMenu}`);
    menu.classList.toggle(`${navBlock}${navElementMenu}${navMod}`);

    if (menu.classList.contains(`${navBlock}${navElementMenu}${navMod}`)) {
      button.firstElementChild.src = "../images/icon-close-menu.svg";
    } else {
      button.firstElementChild.src = "../images/icon-menu.svg";
    }
  })
}

export {showHideMenu};
