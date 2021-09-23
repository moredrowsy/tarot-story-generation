import React, { useEffect, useState } from 'react';
import { generateCardOrientations, storyTypes, tarotCards } from '../lib';
import { Orientation, StoryType, TarotCardEntity } from '../types';
import { getRandomInt, shuffleArray } from '../utils';

import Button from './Button';
import Deck from './Deck';
import NarrativeStory from './NarrativeStory';

const mockComedySpread: TarotCardEntity[] = [
  tarotCards['tarot-wands-09'],
  tarotCards['tarot-cups-13'],
  tarotCards['tarot-cups-04'],
  tarotCards['tarot-cups-09'],
  tarotCards['tarot-death'],
];

const mockTragedySpread: TarotCardEntity[] = [
  tarotCards['tarot-pentacles-02'],
  tarotCards['tarot-swords-01'],
  tarotCards['tarot-pentacles-10'],
  tarotCards['tarot-world'],
  tarotCards['tarot-cups-11'],
];

function App() {
  const [deck, setDeck] = useState<TarotCardEntity[]>([]);
  const [spread, setSpread] = useState<TarotCardEntity[]>([]);
  const [storyType, setStoryType] = useState<StoryType>('comedy');
  const [orientations, setOrientations] = useState<Orientation[]>([]);

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
    setOrientations(generateCardOrientations(newStoryType));
  }, []);

  const onNewSpread = () => {
    const newDeck =
      deck.length < 5 ? generateRandomDeck(tarotCards) : [...deck];
    const newSpread = generateNewSpread(newDeck);
    const newStoryType = generateRandomStoryType(storyTypes);

    setDeck(newDeck);
    setSpread(newSpread);
    setStoryType(newStoryType);
    setOrientations(generateCardOrientations(newStoryType));
  };

  const onUpdateCard = (id: string) => {
    for (let i = 0; i < spread.length; ++i) {
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
            canUpdateCard={deck.length > 0}
            cards={spread}
            orientations={orientations}
            storyType={storyType}
            onUpdateCard={onUpdateCard}
          />
          {deck.length === 0 && (
            <>
              <div className='m-5'></div>
              <div className='text-center font-bold'>
                There are no more cards in the deck. Choose 'New Spread' to
                restart
              </div>
            </>
          )}
          <div className='m-5'></div>
          <NarrativeStory
            cards={spread}
            storyType={storyType}
            orientations={orientations}
          />
          <div className='m-5'></div>
          <Button onClick={onNewSpread}>New Spread</Button>
        </div>
      )}
    </>
  );
}

export default App;
