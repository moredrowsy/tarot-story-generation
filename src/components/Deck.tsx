import React from 'react';
import { Orientation, TarotCardEntity } from '../types';
import Card from './Card';

const backgrounds = {
  comedy: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
  tragedy: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500',
};

const Deck: React.FC<Props> = ({
  canUpdateCard,
  cards,
  orientations,
  storyType,
  onUpdateCard,
}) => {
  const bg = backgrounds[storyType];
  const title = `A story of ${storyType}`;

  return (
    <div className={`${bg} mx-auto rounded shadow-lg`}>
      <div className='font-bold text-center text-4xl capitalize'>{title}</div>
      <div className='flex gap-4 p-5'>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            canUpdateCard={canUpdateCard}
            card={card}
            orientation={orientations[index]}
            onUpdateCard={onUpdateCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Deck;

type Props = {
  canUpdateCard: boolean;
  cards: TarotCardEntity[];
  orientations: Orientation[];
  storyType: 'comedy' | 'tragedy';
  onUpdateCard: (id: string) => void;
};
