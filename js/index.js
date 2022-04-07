const searchBtn = document.querySelector(".search");

const clickSearchBtn = document.querySelector(".clickBtnSearch");

const btnClose = document.querySelector(".closeBtn");

const elemHeader = document.querySelector(".menuItems");

const elemRespHeader = document.querySelector(".respMenuItems");

const hambMenu = document.querySelector(".hamburger");

const elemArticles = document.querySelector(".articles");

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

function getArticles(el) {
  return `
  <div class="article ${el.order}">
          <div class="imgArticle">
            <img class="photoArticle" src="${el.img}" />
            <div class="hoverImg">
              <div class="hoverBtn imageHoverBtn">
                <a class="fas fa-link" href="#"></a>
              </div>
            </div>
          </div>
          <div class="descriptionArticle">
            <h4 class="titleArticle">${el.title}</h4>
            <p class="dataArticle">${el.data}</p>
            <p class="textArticle">${el.text}</p>
          </div>
        </div>
  `;
}

function elemGetArticles() {
  for (let i = 0; i < articles.length; i++) {
    const articlesHtml = getArticles(articles[i]);
    elemArticles.insertAdjacentHTML("beforeEnd", articlesHtml);
  }
}

elemGetArticles();
