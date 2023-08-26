/* eslint-disable no-unused-vars */
import { clearPage } from '../../utils/render';
import { setPlace } from '../../utils/places';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  clearPage();
  getHomePage();
};

function getHomePage(){
  
  const main = document.querySelector('main');
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const divBerlin = document.createElement('div');
  const divBruges = document.createElement('div');
  const divMunich = document.createElement('div');
  const divParis = document.createElement('div');
  const divRome = document.createElement('div');

  title.innerText = "Places to visit!";

  divBerlin.innerText = "Berlin";

  divBerlin.addEventListener('click', () => {
    setPlace("Berlin");
    Navigate("/photos");
  });

  divBruges.innerText = "Bruges";

   
  divBruges.addEventListener('click', () => {
    setPlace("Bruges");
    Navigate("/photos");
  });

  divMunich.innerText = "Munich";

   
  divMunich.addEventListener('click', () => {
    setPlace("Munich");
    Navigate("/photos");
  });

  divParis.innerText = "Paris";

   
  divParis.addEventListener('click', () => {
    setPlace("Paris");
    Navigate("/photos");
  });

  divRome.innerText = "Rome";

   
  divRome.addEventListener('click', () => {
    setPlace("Rome");
    Navigate("/photos");
  });

  div.appendChild(title);
  div.appendChild(divBerlin);
  div.appendChild(divBruges);
  div.appendChild(divMunich);
  div.appendChild(divParis);
  div.appendChild(divRome);

  div.style.textAlign = "center";
  main.appendChild(div);

}

export default HomePage;
