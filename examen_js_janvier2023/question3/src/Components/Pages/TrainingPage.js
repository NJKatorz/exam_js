/* eslint-disable prefer-template */
/* eslint-disable no-console */
import { clearPage } from '../../utils/render';

const TrainingPage = () => {
    clearPage();
    renderTrainingPage();
    
};

async function renderTrainingPage() {
  const main = document.querySelector("main");
    const div = document.createElement('div');

    div.innerHTML = `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Français</label>
    <input type="text" class="form-control" id="idFr" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">English</label>
    
    <input type="text" class="form-control" id="idEn" aria-describedby="emailHelp">
  </div>
  <br>

`;
// const btnRegister = document.querySelector("#btnRegister");
const btnRegister = document.createElement("button");
btnRegister.type = "submit";
btnRegister.className = "btn btn-primary";
btnRegister.textContent = "Ajouter la traduction";

btnRegister.addEventListener('click', async (event) => {
    event.preventDefault();
    const francais = document.querySelector("#idFr").value;
    const english = document.querySelector("#idEn").value;


    const options = {
        method: 'POST',
        body: JSON.stringify({
            fr: francais,
            en: english
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch('/api/trad', options);

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const createdTraduction = await response.json();

    console.log("dddddddddddd"+createdTraduction);
});

    main.appendChild(div);
    main.appendChild(btnRegister);
   
}

export default TrainingPage;