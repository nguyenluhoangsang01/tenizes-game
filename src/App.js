import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);

  console.log(count);

  useEffect(() => {
    const allHeld = dice.every((item) => item.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((item) => item.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDice() {
    return {
      id: nanoid(),
      value: Math.round(Math.random() * 6),
      isHeld: false,
    };
  }

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }

    return newDice;
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    } else {
      setDice((oldDice) =>
        oldDice.map((item) => {
          return item.isHeld ? item : generateNewDice();
        })
      );
    }

    setCount(count + 1);
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((item) =>
        item.id === id
          ? {
              ...item,
              isHeld: !item.isHeld,
            }
          : item
      )
    );
  }

  return (
    <main className="app">
      {tenzies && <Confetti />}

      <div className="app-description">
        <h1>Tenzies</h1>

        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>

      <div className="app-content">
        {dice.map((item) => (
          <Die
            key={item.id}
            value={item.value}
            isHeld={item.isHeld}
            onHoldDice={() => holdDice(item.id)}
          />
        ))}
      </div>

      <div className="app-button" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </div>

      <div className="the-number-of-rolls">
        The number of rolls: <span>{count}</span>
      </div>
    </main>
  );
}

export default App;
