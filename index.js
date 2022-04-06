const searchBtn = document.querySelector(".search");

const clickSearchBtn = document.querySelector(".clickBtnSearch");

const btnClose = document.querySelector(".closeBtn");

const elemHeader = document.querySelector(".menuItems");

const elemRespHeader = document.querySelector(".respMenuItems");

const hambMenu = document.querySelector(".hamburger");

searchBtn.addEventListener("click", () => {
  clickSearchBtn.classList.remove("closeBtnSearch");
});

btnClose.addEventListener("click", () => {
  clickSearchBtn.classList.add("closeBtnSearch");
});

let respClose = true;
hambMenu.addEventListener("click", () => {
  if (respClose) {
    elemRespHeader.classList.remove("hambClose");
    respClose = false;
  } else {
    elemRespHeader.classList.add("hambClose");
    respClose = true;
  }
});

function getHeaderElem(el) {
  let section = ``;
  if (el.article) {
    for (let i = 0; i < el.article.length; i++) {
      section += `
      <li><a href="#">${el.article[i].headerSubElem}</a></li>
      `;
    }
  } else {
    return `
      <li class="mainItems"><a class="${el.elementClass}" href="#">${el.headerElem}</a></li>
      `;
  }
  return `
    <li class="mainItems">
    <a href="#">${el.headerElem}</a>
    <ul class="dropdownMenu">
    ${section}
    </ul>
    </li>
    `;
}

function elemHeaderMenu() {
  for (let i = 0; i < menu.length; i++) {
    const headerHtml = getHeaderElem(menu[i]);
    elemHeader.insertAdjacentHTML("beforeEnd", headerHtml);
  }
}

elemHeaderMenu();

function getRespHeaderElem(el) {
  let section = ``;
  if (el.article) {
    for (let i = 0; i < el.article.length; i++) {
      section += `
      <li><a href="#">${el.article[i].headerSubElem}</a></li>
      `;
    }
  } else {
    return `
      <li><a href="#">${el.headerElem}</a></li>
      `;
  }
  return `
    <li>
    <a href="#">${el.headerElem}</a>
    <ul class="dropdownRespMenu">
    ${section}
    </ul>
    </li>
    `;
}

function elemRespHeaderMenu() {
  for (let i = 0; i < menu.length; i++) {
    const headerHtml = getRespHeaderElem(menu[i]);
    elemRespHeader.insertAdjacentHTML("beforeEnd", headerHtml);
  }
}

elemRespHeaderMenu();
