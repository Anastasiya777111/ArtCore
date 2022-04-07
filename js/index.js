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

hambMenu.addEventListener("click", () => {
  elemRespHeader.classList.toggle("hambClose");
});

function getHeaderElem(el, mainItems, dropdown) {
  let section = ``;
  if (el.article) {
    for (let i = 0; i < el.article.length; i++) {
      section += `
      <li><a href="#">${el.article[i].headerSubElem}</a></li>
      `;
    }
  } else {
    return `
      <li class="${mainItems}"><a class="${el.elementClass}" href="#">${el.headerElem}</a></li>
      `;
  }
  return `
    <li class="${mainItems}">
    <a href="#">${el.headerElem}</a>
    <ul class="${dropdown}">
    ${section}
    </ul>
    </li>
    `;
}

function elemHeaderMenu(el, mainItems, dropdown) {
  for (let i = 0; i < menu.length; i++) {
    const headerHtml = getHeaderElem(menu[i], mainItems, dropdown);
    el.insertAdjacentHTML("beforeEnd", headerHtml);
  }
}

elemHeaderMenu(elemHeader, "mainItems", "dropdownMenu");
elemHeaderMenu(elemRespHeader, "", "dropdownRespMenu");
