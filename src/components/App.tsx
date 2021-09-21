import React, { useEffect, useState } from "react";
import { tarotCards } from "../lib/data";
import { TarotCardEntity } from "../types";
import { shuffleArray } from "../utils";

import Button from "./Button";
import Deck from "./Deck";
import NarrativeStory from "./NarrativeStory";

function App() {
  const [deck, setDeck] = useState<TarotCardEntity[]>([]);
  const [spread, setSpread] = useState<TarotCardEntity[]>([]);
  const type = "comedy";

  const generateRandomDeck = (cards: Record<string, TarotCardEntity>) => {
    const newDeck = Object.keys(tarotCards).map((k) => tarotCards[k]);
    shuffleArray(newDeck);
    return newDeck;
  };

  const generateNewSpread = (deck: TarotCardEntity[]) => {
    const newSpread: TarotCardEntity[] = [];
    for (let i = 0; i < 5; ++i) newSpread.push(deck.pop() as TarotCardEntity);
    return newSpread;
  };

  useEffect(() => {
    const newDeck = generateRandomDeck(tarotCards);
    const newSpread = generateNewSpread(newDeck);
    setDeck(newDeck);
    setSpread(newSpread);
  }, []);

  const onNewSpread = () => {};

  return (
    <div className="bg-gray-50 h-full">
      {spread.length > 4 && (
        <>
          <Deck title="A Story of Comedy" cards={spread} storyType="comedy" />
          <div className="m-5"></div>
          <NarrativeStory cards={spread} storyType={type} />
          <div className="m-5"></div>
          <Button onClick={onNewSpread}>New Spread</Button>
        </>
      )}
    </div>
  );
}

export default App;
