import React from "react";
import { TarotCardEntity } from "../types";

const Card: React.FC<Props> = ({ card }) => {
  const { id, name } = card;

  return (
    <div className="bg-white flex flex-col overflow-hidden rounded shadow-lg">
      <div className="flex-grow">
        <img
          style={{ minWidth: 150 }}
          className="w-full"
          src={require(`../assets/cards/${id}.jpg`).default}
          alt={name}
        />
      </div>
      <div className="flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
        <p className="text-gray-700 text-base text-center">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <button className="inline-block bg-gray-200 hover:bg-gray-400 hover:text-white font-semibold mb-2 px-3 py-1 rounded-full text-sm text-gray-700">
          New Card
        </button>
      </div>
    </div>
  );
};

export default Card;

type Props = {
  card: TarotCardEntity;
};
