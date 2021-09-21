import React from "react";
import { TarotCardEntity } from "../types";
import Card from "./Card";

const backgrounds = {
  comedy: "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
  tragedy: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500",
};

const Deck: React.FC<Props> = ({ cards, title, storyType }) => {
  const bg = backgrounds[storyType];

  return (
    <div
      className={`${bg} max-w-screen-xl min-w-min mx-auto rounded shadow-lg`}
    >
      <div className="text-center text-4xl font-bold">{title}</div>
      <div className="flex gap-4 p-5">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Deck;

type Props = {
  cards: TarotCardEntity[];
  title: string;
  storyType: "comedy" | "tragedy";
};
