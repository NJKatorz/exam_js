/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import { getIdPlace, getPlace, getPlaceWithName } from '../../utils/places';


const main = document.querySelector('main');
const div = document.createElement("div");
div.style.textAlign = "center";
const divImage = document.createElement("div");
const divName = document.createElement("div");
const divButton = document.createElement("div");



const PhotoPage = () => {
  clearPage();
  getPhotoPage();
};

function getPhotoPage() {
  const place = getPlaceWithName(getPlace());

  if (getPlace() === "Berlin") {
    divImage.innerHTML = `<img src="${place.image}">`;
    divName.innerHTML = `${place.name}`;
  }

  if (getPlace() === "Bruges") {
    divImage.innerHTML = `<img src="${place.image}">`;
    divName.innerHTML = `${place.name}`;
  }

  if (getPlace() === "Munich") {
    divImage.innerHTML = `<img src="${place.image}">`;
    divName.innerHTML = `${place.name}`;
  }

  if (getPlace() === "Paris") {
    divImage.innerHTML = `<img src="${place.image}">`;
    divName.innerHTML = `${place.name}`;
  }

  if (getPlace() === "Rome") {
    divImage.innerHTML = `<img src="${place.image}">`;
    divName.innerHTML = `${place.name}`;
  }

  let count = place.id;

  divButton.innerHTML = `
  <button type ="submbit" id="btnBefore">Previous</button>
  <button type ="submbit" id="btnAfter">Next</button>
  `;

  div.appendChild(divImage);
  div.appendChild(divName);

  div.appendChild(divButton);
  main.appendChild(div);

  const buttonBefore = document.querySelector('#btnBefore');
  const buttonAfter = document.querySelector('#btnAfter');

  buttonBefore.addEventListener('click', () => {
    count--;
    previousButton(count);

  });

  buttonAfter.addEventListener('click', () => {
    count++;
    nextButton(count);
  });


}

function previousButton(id) {
  blockButtonNextPrevious(id);
  const placePrevious = getIdPlace(id);
  divImage.innerHTML = `<img src="${placePrevious.image}">`;
  divName.innerHTML = `${placePrevious.name}`;

}

function nextButton(id) {
  blockButtonNextPrevious(id);
  const placeNext = getIdPlace(id);
  divImage.innerHTML = `<img src="${placeNext.image}">`;
  divName.innerHTML = `${placeNext.name}`;
}

function blockButtonNextPrevious(count) {

  if (count === 1) {
    let resetBtn = document.getElementById("btnBefore");
      resetBtn.disabled = true;
  } else {
    let resetBtn = document.getElementById("btnBefore");
      resetBtn.disabled = false;
  }

  if (count === 5) {
    let resetBtn = document.getElementById("btnAfter");
      resetBtn.disabled = true;
  } else {
    let resetBtn = document.getElementById("btnAfter");
      resetBtn.disabled = false;
  }
  
}

export default PhotoPage;
