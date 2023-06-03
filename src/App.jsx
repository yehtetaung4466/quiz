import { useState } from "react";
import End from "./End";

export default function App() {
  const [state, setState] = useState({ showResults: true });
  const [result, setResult] = useState(0);
  const [questions] = useState([
    "1.What is the largest planet in our solar system?",
    "2.What is the smallest planet in our solar system?",
    "3.Which planet is closest to the sun?",
    `4.Which planet is known as "Red planet"?`,
    "5.What is the fifth planet from the sun?",
    "6.Which planet has the most moons?",
    "7.Which planet has the longest day?",
    "8.Which planet has the shortest year?",
    "9.Which planet is known for its beautiful rings?",
    "10.Which planet is the only one known to have life?",
  ]);
  const [correctAnswers] = useState([
    "Jupiter",
    "Mercury",
    "Mercury",
    "Mars",
    "Jupiter",
    "Jupiter",
    "Saturn",
    "Venus",
    "Saturn",
    "Earth",
  ]);
  const [answers1] = useState([
    "Jupiter",
    "Earth",
    "Venus",
    "Mars",
    "Uranus",
    "Neptune",
    "Saturn",
    "Mercury",
    "Saturn",
    "Uranus",
  ]);
  const [answers2] = useState([
    "Mercury",
    "Mars",
    "Neptune",
    "Earth",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Venus",
    "Earth",
    "Jupiter",
  ]);
  const [answers3] = useState([
    "Saturn",
    "Mercury",
    "Uranus",
    "Venus",
    "Neptune",
    "Earth",
    "Mars",
    "Jupiter",
    "Venus",
    "Neptune",
  ]);
  const [answers4] = useState([
    "Mars",
    "Saturn",
    "Mercury",
    "Neptune",
    "Uranus",
    "Jupiter",
    "Earth",
    "Venus",
    "Mercury",
    "Earth",
  ]);
  const [index, setIndex] = useState(0);

  function handleButton1(answer) {
    if (index === 9) {
      if (answer === correctAnswers[index]) {
        setResult(result + 1);
      }
      setIndex(0);
      setState({ showResults: false });
    } else {
      if (answer === correctAnswers[index]) {
        setResult(result + 1);
      }
      setIndex(index + 1);
    }
  }

  function handleButton2(answer) {
    if (index === 9) {
      if (answer === correctAnswers[index]) {
        setResult(result + 1);
      }
      setIndex(0);
      setState({ showResults: false });
    } else {
      if (answer === correctAnswers[index]) {
        setResult(result + 1);
      }
      setIndex(index + 1);
    }
  }

  function handleButton3(answer) {
    if (index === 9) {
      if (answer === correctAnswers[index]) {
        setResult(result + 1);
      }
      setIndex(0);
      setState({ showResults: false });
    } else {
      if (answer === correctAnswers[index]) {
        setResult(result + 1);
      }
      setIndex(index + 1);
    }
  }

  function handleButton4(answer) {
    if (index === 9) {
      if (answer === correctAnswers[index]) {
        setResult(result + 1);
      }
      setIndex(0);
      setState({ showResults: false });
    } else {
      if (answer === correctAnswers[index]) {
        setResult(result + 1);
      }
      setIndex(index + 1);
    }
  }

  function Question() {
    return (
      <div className="h-screen w-screen flex justify-center items-center mx-auto bg-gradient-to-r from-cyan-500 to-emerald-500">
        <div className="bg-white w-10/12 h-3/5 max-w-xl">
          <div className=" h-1/3">
            <h1 className="h-full flex items-center justify-center text-sm md:text-xl sm:text-lg">
              {questions[index]}
            </h1>
          </div>
          <div className="h-2/3 h- grid grid-cols-2 grid-rows-2 gap-2 md:gap-4">
            <button
              className=" b ml-1"
              onClick={() => handleButton1(answers1[index])}
            >
              1.{answers1[index]}
            </button>
            <button
              className=" b mr-1"
              onClick={() => handleButton2(answers2[index])}
            >
              2.{answers2[index]}
            </button>
            <button
              className=" b ml-1"
              onClick={() => handleButton3(answers3[index])}
            >
              3.{answers3[index]}
            </button>
            <button
              className=" b mr-1 "
              onClick={() => handleButton4(answers4[index])}
            >
              4.{answers4[index]}
            </button>
          </div>
        </div>
      </div>
    );
  }

  function restartQuiz() {
    setState({ showResults: true });
    setResult(0);
    setIndex(0);
  }

  return (
    <div>
      {state.showResults ? (
        <Question />
      ) : (
        <End value={result} c={correctAnswers} restartQuiz={restartQuiz} />
      )}
    </div>
  );
}