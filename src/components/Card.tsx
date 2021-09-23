import React from 'react';
import { Orientation, TarotCardEntity } from '../types';

const Card: React.FC<Props> = ({
  canUpdateCard,
  card,
  orientation,
  onUpdateCard,
}) => {
  const { id, name } = card;

  const btnStyle =
    'inline-block bg-gray-200 hover:bg-gray-400 hover:text-white font-semibold mb-2 px-3 py-1 rounded-full text-sm text-gray-700';
  const btnStyleDisabled =
    'inline-block bg-gray-200 font-semibold mb-2 px-3 py-1 rounded-full text-sm text-gray-200';

  return (
    <div className='bg-white flex flex-col overflow-hidden rounded shadow-lg w-full'>
      <div className='flex-grow'>
        <div className='flex justify-center'>
          <img
            style={{ width: 150 }}
            className={`w-full ${
              orientation === 'reversed' && 'transform rotate-180'
            }`}
            src={require(`../assets/cards/${id}.jpg`).default}
            alt={name}
          />
        </div>
      </div>
      <div className='flex-grow px-6 py-4'>
        <div className='font-bold text-xl mb-2 text-center'>{name}</div>
      </div>
      <div className='px-6 py-4'>
        <p className='text-gray-500 text-xs text-center uppercase'>
          {orientation}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2 text-center'>
        <button
          className={canUpdateCard ? btnStyle : btnStyleDisabled}
          onClick={() => onUpdateCard(card.id)}
          disabled={!canUpdateCard}
        >
          New Card
        </button>
      </div>
    </div>
  );
};

export default Card;

type Props = {
  canUpdateCard: boolean;
  card: TarotCardEntity;
  orientation: Orientation;
  onUpdateCard: (id: string) => void;
};
