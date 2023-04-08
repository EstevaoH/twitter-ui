import { Header } from "../../Components/Header/Header";
import { Separator } from "../../Components/Separator/Separator";
import { Tweet } from "../../Components/Tweet/Tweet";
import { v4 as uuidv4 } from "uuid";
import "./Timeline.css";
import { FormEvent, KeyboardEvent, useState } from "react";

export function Timeline() {
  const [newTweet, setNewTweet] = useState({ id: "", content: "" });

  const [tweets, setTweets] = useState([
    {
      id: uuidv4(),
      content: "Meu tweet",
    },
  ]);
  function creatNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet({ id: "", content: "" });
  }

  function stateChangeTweet(event: any) {
    setNewTweet({ id: uuidv4(), content: event.target.value });
  }
  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet({ id: "", content: "" });
    }
  }

  return (
    <main className="timeLine">
      <Header title="Home" />
      <form onSubmit={creatNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/estevaoH.png" alt="Estevão Henrique" />
          <textarea
            id="tweet"
            value={newTweet.content}
            placeholder="What's happenig"
            onKeyDown={handleHotKeySubmit}
            onChange={stateChangeTweet}
          ></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} content={tweet.content} />;
      })}
    </main>
  );
}
