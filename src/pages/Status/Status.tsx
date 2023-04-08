import { Header } from "../../Components/Header/Header";
import { Separator } from "../../Components/Separator/Separator";
import { Tweet } from "../../Components/Tweet/Tweet";

import { v4 as uuidv4 } from "uuid";
import { PaperPlaneRight } from "phosphor-react";
import "./Status.css";
import { FormEvent, KeyboardEvent, useState } from "react";
import { useLocation } from "react-router-dom";

export function Status() {
  const [newAnswer, setNewAnswer] = useState({ id: "", content: "" });
  const [answers, setAnswers] = useState([
    {
      id: uuidv4(),
      content: "Meu tweet",
    },
  ]);

  const location = useLocation();
  console.log(location);

  function creatNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswer({ id: "", content: "" });
  }

  function stateChangeAnswer(event: any) {
    setNewAnswer({ id: uuidv4(), content: event.target.value });
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer({ id: "", content: "" });
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content={location.state.content} />
      <Separator />

      <form onSubmit={creatNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/estevaoH.png" alt="Estevão Henrique" />
          <textarea
            value={newAnswer.content}
            id="tweet"
            placeholder="Tweet your answer"
            onKeyDown={handleHotKeySubmit}
            onChange={stateChangeAnswer}
          ></textarea>
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer.id} content={answer.content} />;
      })}
    </main>
  );
}
