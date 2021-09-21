import React from "react";
import { TarotCardEntity } from "../types";
import { generatComedy, generateTagline, generateTragedy } from "../lib";

const NarrativeStory: React.FC<Props> = ({ cards, storyType }) => {
  let story = "";
  const tagline = generateTagline(cards[0]);

  switch (storyType) {
    case "comedy":
      story = generatComedy(cards);
      break;
    case "tragedy":
      story = generateTragedy(cards);
      break;
    default:
      story = generatComedy(cards);
  }

  return (
    <div className={`bg-white mx-auto m-5 p-5 rounded shadow-lg`}>
      <div className="font-bold text-lg mb-5">{tagline}</div>
      <div className="text-gray-700">{story}</div>
    </div>
  );
};

export default NarrativeStory;

type Props = { cards: TarotCardEntity[]; storyType: "comedy" | "tragedy" };
