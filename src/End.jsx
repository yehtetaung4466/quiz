/* eslint-disable react/prop-types */
import { useState } from "react";

export default function End(props) {
  const [showResults, setShowResults] = useState(false);

  function restartQuiz() {
    setShowResults(true);
    props.restartQuiz();
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-emerald-500 flex justify-center items-center">
      <div className="h-1/2 w-4/6 bg-white max-w-lg rounded-lg flex justify-center items-center flex-col">
        <div className=" text-center text-2xl">
          You scored {props.value} out of 10
        </div>
        <button className=" btn btn-accent mt-6" onClick={restartQuiz}>
          restart
        </button>
      </div>
    </div>
    //
  );
}