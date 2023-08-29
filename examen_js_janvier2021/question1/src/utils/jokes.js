const jokes = [
  {
    "id": 1,
    "question": "Why are modern programming languages so materialistic?",
    "answer": "Because they are object-oriented.",
    "category": "Programming"
  }
  ,
  {"id": 2,
    "question": "What's the object-oriented way to become wealthy?",
    "answer": "Inheritance.",
    "category": "Programming"
  }
  ,
  {
    "id": 3,
    "question": "What did the fish say when it swam into the wall?",
    "answer": "Dam.",
    "category": "Pun"
  }
  ,
  {
    "id": 4,
    "question": "How much did your chimney cost?",
    "answer": "Nothing, it was on the house.",
    "category": "Pun"
  }
  ,
  {
    "id": 5,
    "question": "Who is Santa's favourite singer?",
    "answer": "Elf-is Presley!",
    "category": "Christmas"
  }
  ,
  {
    "id": 6,
    "question": "What's Santa's favourite type of music?",
    "answer": "Wrap!",
    "category": "Christmas"
  }
]


let joke;

const allJokes = () => {
  return jokes;

};

const getJoke = () => {
  if (joke === undefined)
    return;
  return joke;

};

function getJokeWithCategory(category)  {
  const theAllJokes = allJokes();
  // theAllJokes.sort((e) => e.category === category);
  let jokeSorted = [];
  for (let i = 0; i < theAllJokes.length; i++) {
    if(theAllJokes[i].category === category){
      jokeSorted[i] = theAllJokes[i];
    }
  }
  
 // console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"+ theAllJokes);
  return jokeSorted;
};

const setJoke = (theJoke) => {
  joke = theJoke;
};


const isJoke = () => joke !== undefined;

const clearJoke = () => {
  joke = undefined;
};

export { allJokes, getJoke, setJoke, isJoke, clearJoke, getJokeWithCategory };
