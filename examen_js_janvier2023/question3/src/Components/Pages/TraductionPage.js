import { clearPage } from '../../utils/render';

const TraductionPage = () => {
  clearPage();
  renderTraductionPage();
};

async function renderTraductionPage() {
    const main = document.querySelector("main");
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const divTradEn = document.createElement("div");
    const divTradFr = document.createElement("div");

    div.innerHTML = `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Français</label>
    <input type="text" class="form-control" id="idFr" aria-describedby="emailHelp">
  </div>
  <br>
`;
// const btnRegister = document.querySelector("#btnRegister");
const btnTraduire = document.createElement("button");
btnTraduire.type = "submit";
btnTraduire.className = "btn btn-primary";
btnTraduire.textContent = "Traduire";

div2.innerHTML = ` <div class="mb-3">
<label for="exampleInputEmail1" class="form-label">English</label>
<input type="text" class="form-control" id="idEn" aria-describedby="emailHelp">
</div>
<br>`;

const btnTranslate = document.createElement("button");
btnTranslate.type = "submit";
btnTranslate.className = "btn btn-primary";
btnTranslate.textContent = "Translate";

const p = document.createElement("p");

btnTraduire.addEventListener('click', async (event) => {
    event.preventDefault();
    const francais = document.querySelector("#idFr").value;

    const requete = await fetch(`/api/trad/fr?query=${francais}`, {
        method: 'GET'
    });

    if (!requete.ok) throw new Error(`fetch error : ${requete.status} : ${requete.statusText}`);
    if (requete.status !== 200) {
        p.innerHTML = `<p>Traduction anglaise: </p><p style="color: red;">Impossible d'obtenir la traduction</p>`;
    } else {
        const response = await requete.json();
        p.textContent = `Traduction anglaise: ${response.en}`;
    }

    divTradEn.appendChild(p);

});


btnTranslate.addEventListener('click', async (event) => {
    event.preventDefault();
    const english = document.querySelector("#idEn").value;

    const requete = await fetch(`/api/trad/en?query=${english}`, {
        method: 'GET'
    });

    if (!requete.ok) throw new Error(`fetch error : ${requete.status} : ${requete.statusText}`);
    if (requete.status !== 200) {
        p.innerHTML = `<p>Traduction français: </p><p style="color: red;">Impossible d'obtenir la traduction</p>`;
    } else {
        const response = await requete.json();
        p.textContent = `Traduction français: ${response.fr}`;
    }

    divTradFr.appendChild(p);

});

    main.appendChild(div);
    main.appendChild(btnTraduire);
    main.appendChild(divTradEn);
    main.appendChild(div2);
    main.appendChild(divTradFr);
    main.appendChild(btnTranslate);
}

export default TraductionPage;