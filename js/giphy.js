const gif = "cats";

const apiKey = "WICPTTaIJy520uG8v6UTpOmaQ24CnVwn";

const leftArrow = document.querySelector(".leftArrow");

const rightArrow = document.querySelector(".rightArrow");

let numPage = 0;

let path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gif}&limit=9&offset=${numPage}`;

let resultsHTML = "";

rightArrow.addEventListener("click", () => {
  numPage += 9;
  AsyncFunc(numPage);
});

leftArrow.addEventListener("click", () => {
  if (numPage !== 0) {
    numPage -= 9;
    AsyncFunc(numPage);
  }
});

async function AsyncFunc(count) {
  await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gif}&limit=9&offset=${count}`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      const articles = document.querySelector(".articles");
      let page = document.querySelector(".numPage");
      page.innerHTML = numPage / 9 + 1;
      articles.innerHTML = "";
      json.data.forEach((el) => {
        const url = el.images.fixed_width.url;

        resultsHTML = `
      <div class="article">
       <div class="imgArticle">
          <div class="photoArticle">
            <img src="${url}" class="gifImg">
           </div>
          <div class="hoverImg">
            <div class="hoverBtn imageHoverBtn">
                     <a class="fas fa-link" href=${url}></a>
              </div>
            </div>
             </div>
                <div class="descriptionArticle">      
                <h4 class="titleArticle">${el.title}</h4>
                <p class="dataArticle">${el.import_datetime}</p>
              </div>
      </div>
              
      `;

        articles.insertAdjacentHTML("beforeend", resultsHTML);
      });
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

AsyncFunc();
