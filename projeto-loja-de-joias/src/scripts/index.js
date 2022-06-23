function constructInformativesTop(json) {
  const $wrapper = document.querySelector(".header__top-wrapper");

  for (completeText of json) {
    const firstBold = completeText.firstBold;

    $wrapper.innerHTML += `
    <span class="header__top-wrapper-text${
      firstBold ? " header__top-wrapper-strong" : ""
    }">
      ${completeText.text}
      <span class="header__top-wrapper-text${
        firstBold === false
          ? " header__top-wrapper-strong"
          : " header__top-wrapper-margin"
      }">
      ${completeText.bold}
      </span>
      </span>
    `;
  }
}

function informativesTop() {
  fetch("./mocks/INFORMATIVES_TOP.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructInformativesTop(json);
    });
}

function requestMenuDesktop() {
  fetch("./mocks/MENU.json").then(function(response){
    return response.json();
  }).then(function(json){
    constructMenuDesktop(json.menu)
  })
}

function constructMenuDesktop(json) {
  let structureMenu = ""

  const $containerMenu = document.querySelector(".header__menu");

  for (const menu of json) {
   structureMenu += `<div class="header__menu-text">
    <a class="header__menu-text" href="${menu.url}">${menu.name}</a>
  </div>`
  } 

  $containerMenu.innerHTML = structureMenu;
}


informativesTop();
// requestMenuDesktop();

