import Header from "./modules/Header";
import Card from "./modules/Card";
import Footer from "./modules/Footer";
import data from "./data";
import React, {useEffect, useState} from "react";

function App() {
  const [characters, setCharactes] = useState(data.cards);
  const [actualCharacters, setActualCharacters] = useState(getRandomCharacters());

  function getRandomCharacters() {
    const tempArray = [];
    let numCardsDisplayed = 4;
    for (let i = 0; i < numCardsDisplayed; i++) {
      let randomNumber;

      do {
        randomNumber = Math.floor(Math.random() * characters.length);
      } while (tempArray.some((hero) => hero === characters[randomNumber]));

      tempArray.push(characters[randomNumber]);
    }
    return tempArray;
  }

  function changeIsChosen(id) {
    setCharactes((prevCharacters) => {
      return prevCharacters.map((hero) => {
        if (hero.id === id) {
          return {...hero, chosen: true};
        } else {
          return hero;
        }
      });
    });

    changeCards();
  }

  function changeCards() {
    setActualCharacters(getRandomCharacters());
  }

  return (
    <div className="container">
      <Header />
      <div className="cards-container">
        {actualCharacters.map((hero) => {
          return <Card key={hero.id} picture={hero.pictureDir} title={hero.title} handleClick={() => changeIsChosen(hero.id)} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
