import React, { useEffect, useState } from 'react';
import { tarotCards } from '../lib/data';
import { storyTypes } from '../lib/constants';
import { StoryType, TarotCardEntity } from '../types';
import { getRandomInt, shuffleArray } from '../utils';

import Button from './Button';
import Deck from './Deck';
import NarrativeStory from './NarrativeStory';

function App() {
  const [deck, setDeck] = useState<TarotCardEntity[]>([]);
  const [spread, setSpread] = useState<TarotCardEntity[]>([]);
  const [storyType, setStoryType] = useState<StoryType>('comedy');

  const generateRandomDeck = (cards: Record<string, TarotCardEntity>) => {
    const newDeck = Object.keys(tarotCards).map((k) => tarotCards[k]);
    shuffleArray(newDeck);
    return newDeck;
  };

  const generateRandomStoryType = (storyTypes: readonly StoryType[]) => {
    return storyTypes[getRandomInt(0, storyTypes.length - 1)];
  };

  const generateNewSpread = (deck: TarotCardEntity[]) => {
    const newSpread: TarotCardEntity[] = [];
    for (let i = 0; i < 5; ++i) newSpread.push(deck.pop() as TarotCardEntity);
    return newSpread;
  };

  useEffect(() => {
    const newDeck = generateRandomDeck(tarotCards);
    const newSpread = generateNewSpread(newDeck);
    const newStoryType = generateRandomStoryType(storyTypes);

    setDeck(newDeck);
    setSpread(newSpread);
    setStoryType(newStoryType);
  }, []);

  const onNewSpread = () => {
    const newDeck =
      deck.length < 5 ? generateRandomDeck(tarotCards) : [...deck];
    const newSpread = generateNewSpread(newDeck);
    const newStoryType = generateRandomStoryType(storyTypes);

    setDeck(newDeck);
    setSpread(newSpread);
    setStoryType(newStoryType);
  };

  const updateSpread = (id: string) => {
    for (let i = 0; i < deck.length; ++i) {
      if (spread[i].id === id) {
        spread[i] = deck.pop() as TarotCardEntity;
        setDeck([...deck]);
        setSpread([...spread]);
        break;
      }
    }
  };

  return (
    <>
      {spread.length > 4 && (
        <div className='mx-auto h-full' style={{ width: 900 }}>
          <Deck
            cards={spread}
            storyType={storyType}
            updateSpread={updateSpread}
          />
          <div className='m-5'></div>
          <NarrativeStory cards={spread} storyType={storyType} />
          <div className='m-5'></div>
          <Button onClick={onNewSpread}>New Spread</Button>
        </div>
      )}
    </>
  );
}

export default App;
