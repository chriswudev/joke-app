import React from "react";
import JokeItem from "./JokeItem";

const JokeList = ({ jokes, language }) => {
  return (
    <div className="mt-4">
      {jokes.map((joke) => (
        <JokeItem joke={joke} key={joke.id} language={language || "en"} />
      ))}
    </div>
  );
};

export default JokeList;
