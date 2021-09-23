import React from 'react';
import { Position, TarotCardEntity } from '../types';

const Card: React.FC<Props> = ({ card, position, updateSpread }) => {
  const { id, name } = card;
  const scaleValue = position === 'reversed' ? -1 : 1;

  return (
    <div className='bg-white flex flex-col overflow-hidden rounded shadow-lg w-full'>
      <div className='flex-grow'>
        <div className='flex justify-center'>
          <img
            style={{
              width: 150,
              transform: `scale(${scaleValue})`,
            }}
            className='w-full'
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
          {position}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2 text-center'>
        <button
          className='inline-block bg-gray-200 hover:bg-gray-400 hover:text-white font-semibold mb-2 px-3 py-1 rounded-full text-sm text-gray-700'
          onClick={() => updateSpread(card.id)}
        >
          New Card
        </button>
      </div>
    </div>
  );
};

export default Card;

type Props = {
  card: TarotCardEntity;
  position: Position;
  updateSpread: (id: string) => void;
};
