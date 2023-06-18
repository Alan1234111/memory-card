import Header from "./modules/Header";
import Card from "./modules/Card";
import Footer from "./modules/Footer";
import data from "./data";
import React, {useEffect, useState} from "react";

function App() {
  const [characters, setCharactes] = useState(data.cards);
  const [actualCharacters, setActualCharacters] = useState(getRandomCharacters());
  const [points, setPoints] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem("highscore") || 0);
  const [isLose, setIsLose] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (points >= highScore) {
      setHighScore(points);
      localStorage.setItem("highscore", points);
    }

    if (points === characters.length) {
      setStatus("Thats a Win! Good Job");
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
    setStatus("");
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

    if (isLose) {
      resetGame();
      setStatus("You Lose! Try again");
    } else {
      if (status !== "") {
        setStatus("");
      }
      setPoints((prevVal) => prevVal + 1);
    }

    setActualCharacters(getRandomCharacters());
  }

  return (
    <div className="container">
      <Header points={points} highScore={highScore} status={status} />
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
