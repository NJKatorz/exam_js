/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import berlin from '../img/berlin.jpg';
import bruges from '../img/bruges.jpg';
import munich from '../img/munich.jpg';
import paris from '../img/paris.jpg';
import rome from '../img/rome.jpg';

const PHOTOS = [
  {
    id: 1,
    name: 'Berlin',
    image: berlin,
  },
  {
    id: 2,
    name: 'Bruges',
    image: bruges,
  },
  {
    id: 3,
    name: 'Munich',
    image: munich,
  },
  {
    id: 4,
    name: 'Paris',
    image: paris,
  },
  {
    id: 5,
    name: 'Rome',
    image: rome,
  },
];

let place;

const getIdPlace = (id) => {
  let thePlace;
  for (const element of PHOTOS) {
    if (element.id === id) 
      thePlace = element;
    
  }
  return thePlace;

};

const getPlaceWithName = (name) => {
  let result;
  for (const thePlace of PHOTOS) {
    if (thePlace.name === name) 
      result = thePlace;
    
  }
  return result;

};

const getPlace = () => {
  if (place === undefined)
    return;
  return place;

};

const setPlace = (thePlace) => {
  place = thePlace;
};


const isPlace = () => place !== undefined;

const clearPlace = () => {
  place = undefined;
};

export { getPlace, setPlace, isPlace, clearPlace, getPlaceWithName, getIdPlace };

// , getNamePlace, getIdPlace 
