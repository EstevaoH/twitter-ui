import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Tweet.css";

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [retweet, setTweet] = useState(false);

  const navigate = useNavigate();

  // const openTweet = () => {
  //   navigate("/status", {
  //     state: {
  //       content: "lorem",
  //     },
  //   });
  // };

  function handleClikLike() {
    setLike(!like);
  }
  function handleClikComment() {
    setComment(!comment);
  }
  function handleClikRetweet() {
    setTweet(!retweet);
  }

  return (
    <div className="tweet">
      <img src="https://github.com/estevaoH.png" alt="Estevão Henrique" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Estevão Henrique</strong>
          <span>@estevaoh_f</span>
        </div>
        <Link to="/status" state={{ content: props.content }}>
          <p>{props.content}</p>
        </Link>

        <div className="tweet-content-footer">
          <button
            className="button-comment"
            type="button"
            onClick={handleClikComment}
          >
            {comment ? (
              <ChatCircle weight="fill" className="button-comment-icon" />
            ) : (
              <ChatCircle />
            )}

            <span className={comment ? "button-comment-icon" : ""}>20</span>
          </button>

          <button
            className="button-retweet"
            type="button"
            onClick={handleClikRetweet}
          >
            {retweet ? (
              <ArrowsClockwise weight="fill" className="button-retweet-icon" />
            ) : (
              <ArrowsClockwise />
            )}
            <span className={retweet ? "button-retweet-icon" : ""}>20</span>
          </button>

          <button
            className="button-like"
            type="button"
            onClick={handleClikLike}
          >
            {like ? (
              <Heart weight="fill" className="button-like-icon" />
            ) : (
              <Heart />
            )}
            <span className={like ? "button-like-icon" : ""}>20</span>
          </button>
        </div>
      </div>
    </div>
  );
}
