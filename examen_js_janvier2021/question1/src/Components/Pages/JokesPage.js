/**
 * Render the JokesPage
 */
import christmas from '../../img/Christmas.jpg';
import programming from '../../img/Programming.jpg';
import pun from '../../img/Pun.jpg';
import { allJokes, setJoke, getJoke, getJokeWithCategory } from '../../utils/jokes';

const divAll = document.createElement("div");
const pageDiv = document.querySelector("#page");
const JokesPage = () => {
    clearPage();

    const divImg1 = document.createElement("div");
    const divImg2 = document.createElement("div");
    const divImg3 = document.createElement("div");
    const divImgAll = document.createElement("div");
    // const pageDiv = document.querySelector("#page");
    divImg1.innerHTML = `<img src="${christmas}"/>`;
    divImg1.addEventListener('click', () => {
        setJoke("Christmas");
        displayJokeWithCategory();

    });
    divImg2.innerHTML = `<img src="${programming}"/>`;
    divImg2.addEventListener('click', () => {
        setJoke("Programming");
        displayJokeWithCategory();

    });
    divImg3.innerHTML = `<img src="${pun}"/>`;
    divImg3.addEventListener('click', () => {
        setJoke("Pun");
        displayJokeWithCategory();

    });

    divImgAll.appendChild(divImg1);
    divImgAll.appendChild(divImg2);
    divImgAll.appendChild(divImg3);

    divAll.innerHTML = "";
    pageDiv.appendChild(divImgAll);



};

function displayJokeWithCategory() {
    clearPage();
    const category = getJoke();
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkk", category)
    //pageDiv.innerHTML = "";
    //const div = document.createElement("div");
    //div.innerHTML = `Ouuuuuuuuuuuiiiiiiiiiiiiiiiiii`;
    //pageDiv.appendChild(div);  
    const jokesCat = getJokeWithCategory(category);

    jokesCat.forEach(element => {
        const divQuestion = document.createElement('div');
        divQuestion.innerHTML = `<div> ${element.question} </div>`;
        // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkk", jokesCat.question)
        divAll.appendChild(divQuestion);

        const divAnswer = document.createElement('div');
        divAnswer.innerHTML = `<div> ${element.answer} </div>`;
        ;


        setTimeout(() => {
            divAll.appendChild(divAnswer);
        }, 5000);
        // divAll.appendChild(divAnswer)
    });

    pageDiv.appendChild(divAll);

}

const clearPage = () => {
    //  const main = document.querySelector('main');
    //main.innerHTML = '';
    //   const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = "";
};

export default JokesPage;
