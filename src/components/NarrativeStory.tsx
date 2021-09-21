import React from "react";
import { TarotCardEntity } from "../types";
import { generatComedy, generateTagline } from "../lib";

const NarrativeStory: React.FC<Props> = ({ cards, storyType }) => {
  let story = "";

  if (storyType === "comedy") story = generatComedy(cards);

  return (
    <div
      className={`bg-white max-w-screen-xl min-w-min mx-auto m-5 p-5 rounded shadow-lg`}
    >
      <div className="font-bold text-lg mb-5">{generateTagline(cards[0])}</div>
      <div className="text-gray-700">{story}</div>
    </div>
  );
};

export default NarrativeStory;

type Props = { cards: TarotCardEntity[]; storyType: "comedy" | "tragedy" };
