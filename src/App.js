import Header from "./modules/Header";
import Card from "./modules/Card";
import Footer from "./modules/Footer";
import data from "./data";
import React, {useEffect, useState} from "react";

function App() {
  const [characters, setCharactes] = useState(data.cards);
  const [actualCharacters, setActualCharacters] = useState(getRandomCharacters());
  const [points, setPoints] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLose, setIsLose] = useState(false);

  useEffect(() => {
    if (points >= highScore) {
      setHighScore(points);
    }
  }, [points]);

  function resetGame() {
    setCharactes((prevCharacters) =>
      prevCharacters.map((hero) => {
        return {...hero, chosen: false};
      })
    );
    setPoints(0);
    setIsLose(false);
  }

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
      if (prevCharacters[id].chosen === true) {
        setIsLose(true);
      }
      return prevCharacters.map((hero) => {
        if (hero.id === id) {
          return {...hero, chosen: true};
        } else {
          return hero;
        }
      });
    });

    isLose ? resetGame() : setPoints((prevVal) => prevVal + 1);
    changeCards();
  }

  function changeCards() {
    setActualCharacters(getRandomCharacters());
  }

  return (
    <div className="container">
      <Header points={points} highScore={highScore} />
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
